import React from "react";
import NavBar from "./NavBar/NavBar";
import {CgProfile} from "react-icons/cg";
import {IoIosNotifications} from "react-icons/io";
import {FaSearch} from "react-icons/fa";

const iconStyle = {
    fontSize: "1.3rem",
    color: "#fff",
    marginRight: "2vw",
    cursor: "pointer"
}

function Header() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{minHeight: "10vh"}}>
                <div className="container-fluid mx-5">
                    {/* Logo */}
                    <a className="navbar-brand" href="#" style={{fontSize: "1.5rem"}}>DailyScope.</a>

                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Items */}
                    <div className="collapse navbar-collapse justify-content-center" style={{color:"#fff", fontSize: "1.2rem"}} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active"  aria-current="page" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Life</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tech</a>
                            </li>
                        </ul>
                    </div>

                    {/* Icons on the right */}
                    <div className="d-flex" >
                        <FaSearch style={iconStyle} /> {/* Search Icon */}
                        <IoIosNotifications  style={iconStyle} /> {/* Notifications Icon */}
                        <CgProfile style={iconStyle} /> {/* Profile Icon */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;