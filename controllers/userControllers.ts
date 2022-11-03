import { User, UserType } from "../models/User";
import { registerNewUser } from "../services/userServices";

const getUsers = (req, res) => {
    try {
        User.find({}, (err, users) => {
            if (err) throw new Error(err);
            res.status(200).json(users);
        });
    } catch (err) {
        console.log(err);
    }
};

const login = (req, res) => {
    res.send("test");
};

const register = (req, res) => {
    const { email, password, name, surname }: UserType = req.body;
    registerNewUser(req.body, (result) => res.status(result.status).send(result));
};

export { getUsers, login, register };
