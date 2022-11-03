import { Schema, model } from "mongoose";
import bcrypt from "bcrypt-nodejs";

export interface UserType {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    date: Date;
}

const UserSchema = new Schema<UserType>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now() },
});

UserSchema.pre("save", function (next) {
    const user = this;
    try {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
            });
        });
        next();
    } catch (err) {
        console.log(err);
    }
});

const User = model("User", UserSchema);
export { User };
