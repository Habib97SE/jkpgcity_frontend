import axios from "axios";

class Venues {

    static baseUrl = "http://localhost:5000/api/v1/venues";

    static async all(page= 1) {
        let endpoint = "http://localhost:5000/api/v1/venues";

        if (page > 1) {
            endpoint = `http://localhost:5000/api/v1/venues?page=${page}`;
        }

        const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            };
        return await axios.get(endpoint, {headers: headers});
    }

    static async getCategories() {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.get("http://localhost:5000/api/v1/venues/categories", {headers: headers});
    }

    static async create(data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.post(this.baseUrl, data, {headers: headers});
    }

    static async find(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.get(`${this.baseUrl}/${id}`, {headers: headers});
    }

    static async update(id, data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.put(`${this.baseUrl}/${id}`, data, {headers: headers});
    }

    static async delete(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.delete(`${this.baseUrl}/${id}`, {headers: headers});
    }
}

export default Venues;