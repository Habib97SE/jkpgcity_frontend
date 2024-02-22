import React from "react";
import "./Venue.css"
import {IoRestaurantSharp} from "react-icons/io5";
import {CiShop, CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa";
import {IoIosBeer, IoIosCafe} from "react-icons/io";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {MdLocalHotel} from "react-icons/md";
import {GiFruitBowl} from "react-icons/gi";

const starStyle = {
    color: "#FFD700"
}

const VenueType = ({type}) => {
    switch (type) {
        case "Restaurant":
            return <IoRestaurantSharp/>
        case "Cafe":
            return <IoIosCafe/>
        case "Store":
            return <CiShop/>
        case "Grocery store":
            return <GiFruitBowl/>
        case "Hotel":
            return <MdLocalHotel/>
        case "Bar":
            return <IoIosBeer/>
        default:
            return <CiShop/>
    }
}

const randomVenueType = () => {
    const types = ["restaurant", "cafe", "store"]
    return types[Math.floor(Math.random() * types.length)]
}

function Venue({id, venue}) {
    return (
        <div
            key={id}
            className="venue col-sm-12 col-xs-12 col-md-5 col-lg-3 mx-2" style={{display: "inline-block"}}>
            <img src={"https://picsum.photos/200/300"} style={{borderRadius: "11px", width: "100%", height: "250px"}}
                 alt={"Jönköping Concert Hall"}/>
            <div>
                <h3><VenueType type={venue.category}/> {venue.name}</h3>
                <p>
                    {venue.bio}
                </p>
                <footer>
                    <span></span>
                    <address>
                        {venue.address}
                    </address>
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