import axios from "axios";

class Login {
    static async loginUser(email, password) {
        const endpoint = "http://localhost:5000/api/v1/users/login";
        const data = {
            email: email,
            password: password
        }
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        }
        return await axios.post(endpoint, data, {headers: headers})
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            });

    }
}

export default Login;