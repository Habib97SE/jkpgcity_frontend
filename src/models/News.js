import axios from 'axios';


class News {
    baseURL = "http://localhost:3001/news";

    static async all() {
        try {
            const response = await axios.get(this.baseURL);
            const data = response.data;
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async create(data) {
        try {
            const response = await axios.post(this.baseURL, data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async find(id) {
        try {
            const response = await axios.get(`${this.baseURL}/${id}`);
            return response.data;
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

}

export default News;