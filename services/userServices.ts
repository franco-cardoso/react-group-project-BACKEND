import { User, UserType } from "../models/User";
import { createToken } from "./authService";

const registerNewUser = (user: UserType, result) => {
    const newUser = new User(user);
    newUser.save((err) => {
        if (err) throw err;
        return result({ message: "Usuario creado con éxito", token: createToken(newUser), status: 200 });
    });
};

const attemptLogin = () => {
    
}

export { registerNewUser, attemptLogin };
