import React, {useState, useEffect} from "react";
import UserController from "../../controller/UserController";

function ProfileItem() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (document.cookie.indexOf("user_id") >= 0) {
                const userId = document.cookie.split("user_id=")[1].split(";")[0];
                try {
                    const response = await UserController.getUserData(userId);
                    if (response.message === "Success") {
                        setUserData(response.data);
                    } else {
                        console.error("Error getting user data");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchData();
    }, []);

    if (!userData) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/login">Login</a></li>
                    <li><a className="dropdown-item" href="/register">Register</a></li>
                </ul>
            </li>
        );
    }

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false" style={{
                   textTransform: "capitalize"
            }}>
                Welcome {userData.firstName + ' ' + userData.lastName}!
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">My Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
        </li>
    );
}

export default ProfileItem;
