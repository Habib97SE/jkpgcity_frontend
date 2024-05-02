import User from "../models/User.js";

class UserController {
    static async getUserData(userId) {
        return await User.getUserData(userId);
    }

    static async all() {
        const result = await User.find();
        return result.data.data;
    }

    static async create(data) {
        data.roleId = 1;
        const result = await User.create(data);
        return result.data;
    }

    static async update(id, data) {
        console.log("Updating user");
        console.log(data);
        const result = await User.update(id, data);
        return result.data;
    }

    static async emailExists(email) {
        return User.emailExists(email);
    }

    static async get(id) {
        const result = await User.findById(id);
        if (result.data.message === "Success") {
            return result.data.data;
        }
        return null;
    }

    static async getRoles() {
        const result = await User.getRoles();
        return result.data.data;
    }

    static async getUserFullName(userId) {
        const user = await User.getUserData(userId);
        return `${user.data.firstName} ${user.data.lastName}`;
    }
}

export default UserController;