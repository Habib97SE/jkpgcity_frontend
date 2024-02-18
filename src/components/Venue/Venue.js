import React from "react";
import "./Venue.css"
import {IoRestaurantSharp} from "react-icons/io5";
import {CiShop, CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa";
import {IoIosCafe} from "react-icons/io";

const starStyle = {
    color: "#FFD700"
}

const VenueType = ({type}) => {
    switch (type) {
        case "restaurant":
            return <span style={{color: "#999"}}>
                <IoRestaurantSharp/> Restaurant
            </span>
        case "cafe":
            return <span style={{color: "#999"}}>
                <IoIosCafe/> Cafe
            </span>
        case "store":
            return <span style={{color: "#999"}}>
                <CiShop/> Store
            </span>
        default:
            return <span style={{color: "#999"}}>
                <IoRestaurantSharp/> Restaurant
            </span>
    }
}

const randomVenueType = () => {
    const types = ["restaurant", "cafe", "store"]
    return types[Math.floor(Math.random() * types.length)]
}

function Venue() {
    return (
        <div className="venue col-sm-12 col-xs-12 col-md-5 col-lg-3 mx-2" style={{display: "inline-block"}}>
            <img src={"https://picsum.photos/200/300"} style={{borderRadius: "11px", width: "100%", height: "250px"}}
                 alt={"Jönköping Concert Hall"}/>
            <div>
                <VenueType type={randomVenueType()}/>
                <h3>Jönköping Concert Hall</h3>
                <p>
                    The Jönköping Concert Hall is a concert hall in Jönköping, Sweden. It was built in 1955 and has a
                    capacity of 850 people. The concert hall is home to the Jönköping Sinfonietta.
                </p>
                <footer>
                    {/* Add star reviews */}
                    <p>Rating: <span>
                    <FaStar style={starStyle}/>
                    <FaStar style={starStyle}/>
                    <FaStar style={starStyle}/>
                    <FaStar style={starStyle}/>
                    <CiStar/>
                </span></p>
                </footer>
            </div>

        </div>
    );
}

export default Venue;