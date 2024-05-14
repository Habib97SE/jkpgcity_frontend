import React from "react";
import { useSelector } from "react-redux";
import Helper from "../../utils/Helper";

function ProfileItem() {
    const user = useSelector(state => state.user);

    let loggedInAvatar = "";
    let loggedOutAvatar = "";

    if (user.isAuthenticated) {
        loggedInAvatar = Helper.getAvatarUrl(user.userData.firstName + " " + user.userData.lastName);
    } else {
        loggedOutAvatar = Helper.getAvatarUrl("Guest");
    }

    const avatarUrl = user.isAuthenticated ? loggedInAvatar : loggedOutAvatar;

    return (
        <li className="nav-item dropdown" style={{ listStyle: "none" }}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img
                    src={avatarUrl}
                    alt="Profile"
                    style={{
                        width: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "2vw",
                        cursor: "pointer"
                    }}
                />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {user.isAuthenticated ? (
                    <>
                        <li className="dropdown-item">Welcome {user.userData.firstName}</li>
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li><a className="dropdown-item" href="/logout">Logout</a></li>
                    </>
                ) : (
                    <>
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/register">Register</a></li>
                    </>
                )}
            </ul>
        </li>
    );
}

export default ProfileItem;
