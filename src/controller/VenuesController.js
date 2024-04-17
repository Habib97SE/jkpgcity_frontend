import Venues from "../models/Venues";


class VenuesController {
    static async all() {

        const result = await Venues.all();
        return result.data;
    }

    static async find(id) {
        return await Venues.findById(id);
    }

    static async create(data) {
        console.log(data);
        const result = await Venues.create(data);
        console.log(result.data);
        return result.data;
    }

    static async update(id, data) {
        return await Venues.findByIdAndUpdate(id, data, { new: true });
    }

    static async delete(id) {
        return await Venues.findByIdAndDelete(id);
    }


    /**
     * 
     * Managing Venue Categories: These functions are used to manage venue categories in the application.
     * 1. createCategory(data) - This function is used to create a new venue category.
     * 2. getCategories() - This function is used to get all venue categories.
     * 3. getCategory(id) - This function is used to get a single venue category.
     * 4. updateCategory(id, data) - This function is used to update a venue category.
     * 5. deleteCategory(id) - This function is used to delete a venue category.
     */


    /**
     * getCategories - This function is used to get all venue categories. 
     * @returns {Promise<*>} 
     */
    static async getCategories() {
        console.log("getCategories() in controller")
        const categories = await Venues.categories();
        console.log(`categories: ${categories.data.data}`)
        console.dir(categories.data.data)
        if (categories.data) {
            return categories.data.data;
        }
        return [];
    }

    static async getCategory(id) {
        console.log("getCategory in controller: " + id);
        const result = await Venues.findCategortyById(id);
        console.log("getCategory in controller: " + result.data);
        return result.data;
    }

    static async createCategory(data) {
        console.log(data);
        if (!data) {
            return;
        }
        if (data.name === "") {
            return;
        }
        return await Venues.createCategory(data);
    }

    static async deleteCategory(id) {
        const result = await Venues.deleteCategory(id);
        return result.data;
    }

    static async updateCategory(id, data) {
        const result = await Venues.updateCategory(id, data);
        return result.data;
    }
}


export default VenuesController;