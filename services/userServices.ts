import { compareSync } from "bcrypt-nodejs";
import { ObjectId } from "mongoose";
import { User, UserType } from "../models/User";
import { createToken } from "./authService";

const getUser = (id: ObjectId, result: Function) => {
    User.findOne({ _id: id }, (err, user) => {
        if (err) throw new Error(err);
        if (!user) return result({ message: "Usuario no encontrado", status: 404 });
        return result({ user: user, status: 200 });
    });
};

const registerNewUser = (user: UserType, result) => {
    const newUser = new User(user);
    newUser.save((err) => {
        if (err) throw err;
        return result({ message: "Usuario creado con éxito", token: createToken(newUser), status: 200 });
    });
};

const attemptLogin = (credentials: { email: string; password: string }, resCallback) => {
    const { email, password } = credentials;
    if (!email) return resCallback({ message: "Debes ingresar un correo", status: 400 });
    if (!password) return resCallback({ message: "Debes ingresar una contraseña", status: 400 });

    User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) return resCallback({ message: "El correo o la contraseña son incorrectos", status: 400 });
        if (!(password && compareSync(password, user.password))) {
            return resCallback({ message: "El correo o la contraseña son incorrectos", status: 400 });
        }

        return resCallback({ message: "Éxito al iniciar sesión", status: 200, token: createToken(user) });
    });
};

export { getUser, registerNewUser, attemptLogin };
