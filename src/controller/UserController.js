import User from "../models/User.js";

class UserController {
    static async getUserData (userId){
        return await User.getUserData(userId);
    }

    static update(id, data) {
        return User.findByIdAndUpdate(id, data)
    }

    static show(id) {
        return User.findById(id)
    }
}

export default UserController;