import React, { useState, useEffect } from "react";
import Venue from "../components/Venue/Venue";
import Pagination from "../components/Pagination/Pagination";
import venue from "../components/Venue/Venue";
import VenuesController from "../controller/VenuesController";

function Venues() {
    const [currentVenues, setCurrentVenues] = useState([]);
    const [error, setError] = useState("");
    const [meta, setMeta] = useState({});
    const [allVenues, setAllVenues] = useState([]);
    const [queries, setQueries] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const venues = await VenuesController.all();

                setCurrentVenues(venues.data);
                setMeta(venues.meta);
            } catch (e) {
                setCurrentVenues([])
                setError(e.message);
            }
        }
        fetchData();
        document.title = "Venues";
    }, []);

    const fetchData = async (data) => {
        try {
            const page = data.split("page=")[1];
            const venues = await VenuesController.all(page);
            setCurrentVenues(venues.data);
            setMeta(venues.meta);
        } catch (e) {
            setCurrentVenues([])
            setError(e.message);
        }
    }

    const handleVenueTypeChange = (e) => {
        const type = e.target.value;
        if (type === "All") {
            setCurrentVenues(allVenues);
        } else {
            setCurrentVenues(allVenues.filter(venue => venue.category === type));
        }
    }

    const handleNumberOfVenuesChange = (e) => {
        const number = e.target.value;

    }

    const handleSearchVenue = (e) => {
        const name = e.target.value.toLowerCase();
        setCurrentVenues(prevVenues => prevVenues.filter(venue => venue.name.toLowerCase().includes(name)));
    }

    return (
        <div className={"container-fluid col-11 bg-white p-4"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <h1>Venues</h1>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <label htmlFor={"venue-type"}>
                        Venue type:
                    </label>
                    <select id={"venue-type"} onChange={handleVenueTypeChange}
                        className={"form-select form-select-lg mb-3"}>
                        <option value={"All"}>All</option>
                        <option value={"Restaurant"}>Restaurant</option>
                        <option value={"Cafe"}>Cafe</option>
                        <option value={"Grocery store"}>Grocery store</option>
                        <option value={"Store"}>Store</option>
                        <option value={"Bar"}>Bar</option>
                        <option value={"Pharmacy"}>Pharmacy</option>
                        <option value={"Hotel"}>Hotel</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <div className={"col-4"}>
                    <label htmlFor={"venue-name"}>
                        Venue name:
                    </label>
                    <input type={"text"} id={"venue-name"} onChange={handleSearchVenue}
                        className={"form-control form-control-lg mb-3"} />
                </div>
                <div className={"col-4"}>
                    <label htmlFor={"number-of-venues"}>
                        Number of venues per page:
                    </label>
                    <select id={"number-of-venues"} onChange={handleNumberOfVenuesChange}
                        className={"form-select form-select-lg mb-3"}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
            <div className={"row"}>
                <h3>Total Venues: {meta.totalItems}</h3>
            </div>
            <div className={"row"}>
                {currentVenues.length > 0 ? currentVenues.map(venue => <Venue key={venue.venueId} venue={venue} />) :
                    <h2>No venues found</h2>}
                {error && <div className={"alert alert-danger"}>{error}</div>}
            </div>
            <Pagination totalPages={meta.totalPages} currentPageUrl={window.location.href} fetchData={fetchData} />
        </div>
    );
}

export default Venues;