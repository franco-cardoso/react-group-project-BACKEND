import { User, UserType } from "../models/User";

const registerNewUser = (user: UserType, result) => {
    const newUser = new User(user);
    try {
        newUser.save((err) => {
            if (err) throw err;
            return result({ message: "Usuario creado con éxito", status: 200 });
        });
    } catch (err) {
        console.log(err);
        return result({ message: "Ocurrió un error al crear el usuario", status: 500, error: err });
    }
};


export { registerNewUser };
