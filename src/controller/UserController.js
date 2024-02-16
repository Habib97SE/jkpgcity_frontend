import User from "../models/User.js";

class UserController {
    static async getUserData (userId){
        return await User.getUserData(userId);
    }
}

export default UserController;