import React from "react";
import "./SocialMedia.css";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import Square from "../Calendar/Square";

function SocialMedia() {

    return (<div className={"container-fluid"}>
        <div className={"row bg-dark-subtle text-white "}>
                <span className={"d-flex flex-column justify-content-center align-content-center"} style={{
                    alignItems: "baseline"
                }}>
                    <h3>
                        Follow us on social media:
                    </h3>
                    <div className={"d-flex flex-row"}>
                        <div className={"d-flex flex-column"}>
                            <FaFacebook style={{fontSize: "75px", color: "#3b5998"}}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <FaTwitter style={{fontSize: "75px", color: "#00acee"}}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <FaInstagram style={{fontSize: "75px", color: "#e4405f"}}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <FaLinkedin style={{fontSize: "75px", color: "#0e76a8"}}/>
                        </div>
                    </div>
                </span>
        </div>
    </div>);
}

export default SocialMedia;