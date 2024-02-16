import React from "react";
import "./SocialMedia.css";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import Square from "../Square/Square";

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
                        <Square size={"150px"} color={"#3b5998"} children={<FaFacebook style={{fontSize: "75px"}}/>}/>
                        <Square size={"150px"} color={"#00acee"} children={<FaTwitter style={{fontSize: "75px"}}/>}/>
                        <Square size={"150px"} color={"#e4405f"} children={<FaInstagram style={{fontSize: "75px"}}/>}/>
                        <Square size={"150px"} color={"#0e76a8"} children={<FaLinkedin style={{fontSize: "75px"}}/>}/>
                    </div>
                </span>
        </div>
    </div>);
}

export default SocialMedia;