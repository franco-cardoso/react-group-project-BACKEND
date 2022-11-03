import { User, UserType } from "../models/User";

const isValidUser = async (req, res, next) => {
    const { email, password, name, surname }: UserType = req.body;
    if (!(email && password && name && surname)) return res.status(400).send({ message: "Faltan datos" });
    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) return res.status(400).send({ message: "Este correo es inválido" });
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(password)) {
        return res.status(400).send({
            message: "Tu contraseña debe contener al menos 8 caracteres, una letra mayúscula, una minúscula, y un número",
        });
    }
    try {
        let foundUser: UserType;
        await User.findOne({ email: email }).then((res) => (foundUser = res));
        if (foundUser) return res.status(400).send({ message: "Ya existe un usuario usando este correo" });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error del servidor" });
    }
    next();
};

export { isValidUser };
