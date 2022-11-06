import { User, UserType } from "../models/User";
import { attemptLogin, getUser, registerNewUser } from "../services/userServices";

const getUsers = (req, res) => {
    try {
        User.find({}, (err, users: UserType[]) => {
            if (err) throw new Error(err);
            const usersList = users.map(
                (user) =>
                    new Object({
                        _id: user._id,
                        name: user.name,
                        surname: user.surname,
                    })
            );
            res.status(200).json(usersList);
        });
    } catch (err) {
        res.status(500).send({ message: "Ocurrió un error en el servidor", error: err });
    }
};

const getUserById = (req, res) => {
    try {
        getUser(req.user, (result) => {
            if (result.user) res.status(result.status).json(result);
        });
    } catch (err) {
        res.status(500).send({ message: "Ocurrió un error al consultar la base de datos", error: err });
    }
};

const login = (req, res) => {
    try {
        attemptLogin(req.body, (response) => {
            res.status(response.status).send(response);
        });
    } catch (err) {
        res.status(500).send({ message: "Ocurrió un error al iniciar sesión", error: err });
    }
};

const register = (req, res) => {
    const { email, password, name, surname }: UserType = req.body;
    try {
        registerNewUser(req.body, (result) => res.status(result.status).send(result));
    } catch (err) {
        res.status(500).send({ message: "Ocurrió un error al registrar el usuario", error: err });
    }
};

export { getUsers, getUserById, login, register };
