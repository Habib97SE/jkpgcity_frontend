import axios from 'axios';


class News {
    baseURL = "http://localhost:5001/api/v1/news";
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true"
    }
    static async all() {
        try {
            const endpoint = "http://localhost:5001/api/v1/news";
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.get(endpoint, { headers });
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    /**
     * Sends post request to server to create a new news article.
     * @param {Object} data - News article data 
     * @returns {Promise<Object>} - Response from server
     */
    static async create(data) {
        let errorMessage = "";
        try {
            const endpoint = "http://localhost:5001/api/v1/news";
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.post(endpoint, data, { headers });
            return response;
        } catch (error) {
            console.error(error);

            return null;
        }
    }

    static async find(id) {
        try {
            const endpoint = `http://localhost:5001/api/v1/news/${id}`;
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.get(endpoint, { headers });
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async update(id, data) {
        try {
            const response = await axios.put(`${this.baseURL}/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async delete(id) {
        try {
            const response = await axios.delete(`${this.baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getCategories() {
        try {
            const endpoint = "http://localhost:5001/api/v1/news/categories";
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.get(endpoint, { headers });
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getCategory(id) {
        try {
            const endpoint = "http://localhost:5001/api/v1/news/categories/" + id;
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.get(endpoint, { headers });

            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async like(id) {
        try {
            const endpoint = `http://localhost:5001/api/v1/news/${id}/like`;
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "true"
            }
            const response = await axios.post(endpoint, { headers });
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export default News;