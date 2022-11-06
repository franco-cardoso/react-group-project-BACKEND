import jwt from "jwt-simple";
import { DateTime } from "luxon";
import { UserType } from "../models/User";

const createToken = (user: UserType): string => {
    const payload = {
        sub: user._id,
        iat: DateTime.now().toMillis(),
        exp: DateTime.now().plus({ day: 30 }).toMillis(),
    };
    return jwt.encode(payload, process.env.JWT_KEY);
};

const decodeToken = (token: string): { message: string; status: number; id?: string } => {
    const payload = jwt.decode(token, process.env.JWT_KEY);
    if (payload.exp <= DateTime.now().toMillis()) {
        return { message: "El token ha expirado", status: 401 };
    }
    return { message: "Token creado con éxito", status: 200, id: payload.sub };
};

export { createToken, decodeToken };