import axios from "axios";

class User {

    baseUrl = "http://localhost:5000/api/v1/users/";
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

    static findByIdAndUpdate(id, data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true",
        }

        return axios.put(`http://localhost:5000/api/v1/users/${id}`, data, {headers, withCredentials: true});
    }

    static findById(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true",
        }

        return axios.get(`http://localhost:5000/api/v1/users/${id}`, {headers, withCredentials: true});
    }
}

export default User;