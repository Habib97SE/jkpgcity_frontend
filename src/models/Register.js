import axios from 'axios';

class Register {

    static async registerUser(user) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true",
        }
        const endpoint = "http://localhost:5000/api/v1/users";
        try {
            return await axios.post(endpoint, user, {headers: headers});
        } catch (error) {
            return error.response;
        }
    }
}

export default Register;