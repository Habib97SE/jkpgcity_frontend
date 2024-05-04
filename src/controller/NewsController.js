import React from "react";
import News from "../models/News";

class NewsController {
    static async all(page = 1, limit = 10, filter = {}, sort = {}) {
        const result = await News.all(page, limit, filter, sort);
        return result.data;
    }

    static async create(data) {
        const result = await News.create(data);
        return result.data;
    }

    static async find(id) {
        const result = await News.find(id);
        return result.data;
    }

    static async update(id, data) {
        return await News.update(id, data);
    }

    static async delete(id) {
        return await News.delete(id);
    }

    static async getCategories() {
        const result = await News.getCategories();
        return result.data;
    }

    static async getCategory(id) {
        const result = await News.getCategory(id);
        return result.data.data.name;
    }

    static async like(id) {
        const result = await News.like(id);
        return result.data;
    }
}

export default NewsController;