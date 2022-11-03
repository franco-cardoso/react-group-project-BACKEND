import express from "express";
import { getUsers, login, register } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/login", login);
userRouter.post("/register", register);

export { userRouter };
