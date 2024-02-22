import Venues from "../models/Venues";

async function VenuesController(page) {
    const response = await Venues.all(page);

    if (response.data.message === "Success") {
        return response.data;
    } else {
        return [];
    }
}

export default VenuesController;