import React from "react";
import News from "../models/News";

class NewsController {
    static async all(page = 1, limit = 10, filter = {}, sort = {}) {
        return await News.all(page, limit, filter, sort);
    }

    static async create(data) {
        return await News.create(data);
    }

    static async find(id) {
        return await News.find(id);
    }

    static async update(id, data) {
        return await News.update(id, data);
    }

    static async delete(id) {
        return await News.delete(id);
    }
}

export default NewsController;