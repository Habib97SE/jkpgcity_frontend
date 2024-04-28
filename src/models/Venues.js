import axios from "axios";

class Venues {

    static baseUrl = "http://localhost:5001/api/v1/venues";


    static async all(page = 1, pageSize = 10) {

        if (pageSize > 50 || pageSize < 1) {
            return {
                message: "Invalid page size. Page size must be between 1 and 50.",
                data: []
            };
        }

        if (page < 1) {
            return {
                message: "Invalid page number. Page number must be greater than 0.",
                data: []
            };
        }


        let endpoint = "http://localhost:5001/api/v1/venues";
        endpoint = `${endpoint}?page=${page}&pageSize=${pageSize}`;


        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.get(endpoint, { headers: headers });
    }

    static async getCategories() {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        };
        console.log(headers)
        console.log(this.baseUrl)
        return await axios.get(`${this.baseUrl}/categories`, { headers, withCredentials: true });
    }

    static async create(data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.post(this.baseUrl, data, { headers: headers });
    }

    static async find(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.get(`${this.baseUrl}/${id}`, { headers: headers });
    }

    static async update(id, data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.put(`${this.baseUrl}/${id}`, data, { headers: headers });
    }

    static async delete(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        const endpoint = `${this.baseUrl}/${id}`;
        return await axios.delete(endpoint, { headers: headers });
    }

    /**
     * Search for venues
     * @param {String} searchValue 
     * @returns 
     */
    static async search(searchValue) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        const endpoint = `${this.baseUrl}/search?search=${searchValue}`;
        return await axios.get(endpoint, { headers: headers });
    }

    static async categories() {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        };
        const endpoint = `${this.baseUrl}/categories`;
        return await axios.get(endpoint, { headers: headers });
    }

    static async findByIdAndUpdate(id, data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.put(`${this.baseUrl}/${id}`, data, { headers: headers });
    }

    static async findByIdAndDelete(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.delete(`${this.baseUrl}/${id}`, { headers: headers });
    }

    /**
     * 
     * @param {Object} data : {name: String, description: String} : The data to create a new category 
     * @returns <Promise> : The response from the server
     */
    static async createCategory(data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.post(`${this.baseUrl}/categories`, data, { headers: headers });
    }

    static async deleteCategory(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.delete(`${this.baseUrl}/categories/${id}`, { headers: headers });
    }

    static async findCategortyById(id) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        console.log("findCategortyById in Venues")
        return await axios.get(`${this.baseUrl}/categories/${id}`, { headers: headers });
    }

    static async updateCategory(id, data) {
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "true"
        };
        return await axios.put(`${this.baseUrl}/categories/${id}`, data, { headers: headers });
    }

}

export default Venues;