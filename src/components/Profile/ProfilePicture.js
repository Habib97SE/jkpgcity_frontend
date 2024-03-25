import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import "./style.css"
import profile from "../../pages/Profile";

function ProfilePicture() {
    const [isHovering, setIsHovering] = useState(false);
    const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/150");

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const newImageUrl = URL.createObjectURL(e.target.files[0]);
            setProfilePic(newImageUrl);
        }
    };

    return (
        <div
            className="position-relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                display: "inline-block", // Changed from 'd-block' to 'inline-block'
            }}
        >
            <img
                src={profilePic}
                alt="Profile Picture"
                style={{
                    width: "100%", // Adjusted to 100% to fill the parent div
                    height: "100%", // Adjusted to 100% to fill the parent div
                    borderRadius: "50%",
                    border: "2px solid #f2f2f2",
                    cursor: "pointer",
                    display: "block", // Ensure the img fills the div completely.
                }}
            />
            {isHovering && (
                <div
                    className="position-absolute d-flex justify-content-center align-items-center"
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                    onClick={() => document.getElementById('profilePicInput').click()}
                >
                    <input
                        type="file"
                        id="profilePicInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <MdEdit size="24px" />
                </div>
            )}
        </div>
    );
}

export default ProfilePicture;