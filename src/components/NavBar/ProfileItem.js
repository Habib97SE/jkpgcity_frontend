import React from "react";

function ProfileItem() {
    if (document.cookie.indexOf("auth_token") >= 0)
    {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </li>
        );
    } else {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Login</a></li>
                    <li><a className="dropdown-item" href="#">Register</a></li>
                </ul>
            </li>
        );
    }
}

export default ProfileItem;