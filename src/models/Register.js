const axios = require('axios');

class Register {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    async registerUser() {
        try {
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                role: "3"
            }
            const endpoint = "http://localhost:8080/api/v1/users";
            return await axios.post(endpoint, user);
        } catch (error) {
            return error.data.message;
        }
    }
}

export default Register;