import React, { useState, useEffect } from "react";
import VenuesController from "../../controller/VenuesController";
import { MdDelete, MdEdit } from "react-icons/md";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import { ImNewTab } from "react-icons/im";


function Venues() {

    const [venues, setVenues] = useState([]);
    const [venueId, setVenueId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const fetchVenues = async () => {
            const response = await VenuesController.all();
            setVenues(response.data);
        }
        fetchVenues();
    }, []);


    const handleClick = async () => {
        await VenuesController.delete(venueId);
        setShowDeleteModal(false);
        const response = await VenuesController.all();
        setVenues(response.data);
    }

    return (
        <>
            <div
                className={"col-md-12"}
                style={{
                    backgroundColor: "#fff",
                    display: "inline-block",
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                <div className="row d-inline-block">
                    {/* title in the left and button in the right side */}
                    <h1>Venues</h1>
                    <Link to={"/admin/venues/new"} className={"btn btn-primary"}>New Venue</Link>
                </div>
                <p>View and manage venues</p>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venues.length === 0 && (
                            <tr>
                                <td colSpan={6}>No venues found</td>
                            </tr>
                        )}
                        {venues.map((venue, index) => (
                            <tr key={index}>
                                <td>{venue.name}</td>
                                <td>{venue.address}</td>
                                <td><a href={`tel:${venue.phone}`}>{venue.phone}</a></td>
                                <td><a href={`mailto:${venue.email}`}>{venue.email}</a></td>
                                <td><a href={venue.website} target="_blank">{venue.website} <ImNewTab /></a></td>
                                <td>
                                    <Link to={`/admin/venues/${venue.venueId}/edit`} className="btn btn-warning m-2">
                                        <MdEdit /> Edit
                                    </Link>
                                    <button className="btn btn-danger m-2" onClick={() => { setShowDeleteModal(true) }}>
                                        <MdDelete /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>
            {/** Create modal to handle deleting a venue from table */}
            <div className="modal fade" id="deleteVenueModal" tabIndex={-1} role="dialog" aria-labelledby="deleteVenueModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteVenueModalLabel">Delete Venue</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this venue?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={() => { handleClick() }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Venues;