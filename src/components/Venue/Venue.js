import React from "react";
import "./Venue.css"
import { IoRestaurantSharp } from "react-icons/io5";
import { CiShop, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosBeer, IoIosCafe } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdLocalHotel } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";

const starStyle = {
    color: "#FFD700"
}

const VenueType = ({ type }) => {
    switch (type) {
        case "Restaurant":
            return <IoRestaurantSharp />
        case "Cafe":
            return <IoIosCafe />
        case "Store":
            return <CiShop />
        case "Grocery store":
            return <GiFruitBowl />
        case "Hotel":
            return <MdLocalHotel />
        case "Bar":
            return <IoIosBeer />
        default:
            return <CiShop />
    }
}

const randomVenueType = () => {
    const types = ["restaurant", "cafe", "store"]
    return types[Math.floor(Math.random() * types.length)]
}

function Venue({ id, venue }) {
    return (
        <div
            key={id}
            className="venue col-sm-12 col-xs-12 col-md-5 col-lg-3 bg-light rounded m-2 p-0"
            style={{ display: "inline-block", padding: 0, borderRadius: "0 0 10px 10px" }}
        >
            <img
                src={"https://picsum.photos/200/300"}
                alt={`${venue.name} in ${venue.address} at Jönköping`}
                className="img-cover"
                style={{ width: "100%", height: "200px", objectFit: "cover" }} // Adjust height as needed
            />

            <div
                className="p-3"
            >
                <h3><VenueType type={venue.category} /> {venue.name}</h3>
                <hr />
                <p>
                    {venue.bio}
                </p>
                <hr />
                <footer>
                    <span></span>
                    <address>
                        {venue.address}
                    </address>
                    {/* Add star reviews */}
                    <p>Rating: <span>
                        <FaStar style={starStyle} />
                        <FaStar style={starStyle} />
                        <FaStar style={starStyle} />
                        <FaStar style={starStyle} />
                        <CiStar />
                    </span></p>
                    <span>
                        Open today: 10:00 - 20:00
                    </span>
                </footer>
            </div>
        </div>

    );
}

export default Venue;