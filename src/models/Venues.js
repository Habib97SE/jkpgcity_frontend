import axios from "axios";

class Venues {


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
}

export default Venues;