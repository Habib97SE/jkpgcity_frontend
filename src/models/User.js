import axios from "axios";

class User {
    static async getUserData(userId) {
        const endpoint = `http://localhost:5000/api/v1/users/${userId}`;
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true",
        }
        // add credentials include to the request
        // send the cookie with the request
        const user = await axios.get(endpoint, {headers, withCredentials: true});

        return user.data;
    }
}

export default User;