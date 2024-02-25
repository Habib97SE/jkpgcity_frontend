import React from "react";
import {CgProfile} from "react-icons/cg";
import {FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter} from "react-icons/fa";

function ProfileSection(){
    return (
        <div className={"col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9"}>
            <div className={"card"}>
                <div className={"card-body"}>
                    <div>
                        <CgProfile style={{fontSize: "3rem", display: "inline-block"}}/>
                        <h5 className={"card-title"} style={{display: "inline-block", marginLeft: "5px"}}>Habib Hezarehee</h5>
                    </div>
                    <p className={"card-text"}>Here you're going to write your bio.</p>
                </div>
            </div>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className={"card-title"}>Personal details:</h5>
                    <div>
                        <div>
                            <p className={"card-text"}><FaEnvelope /> example@mail.com</p>
                            <p className={"card-text"}><FaPhone/> 1234567890</p>
                            <p className={"card-text"}><FaFacebook /> facebook.com/example</p>
                            <p className={"card-text"}><FaTwitter /> twitter.com/example</p>
                            <p className={"card-text"}><FaInstagram /> instagram.com/example</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;