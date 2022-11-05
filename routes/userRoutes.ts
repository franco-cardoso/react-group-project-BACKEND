import express from "express";
import { getUserById, getUsers, login, register } from "../controllers/userControllers";
import { isAuth, isValidUser } from "../middleware/userMiddleware";

const userRouter = express.Router();

userRouter.use("/register", isValidUser);

userRouter.get("/", getUsers);
userRouter.post("/login", login);
userRouter.post("/login-token", isAuth, getUserById)
userRouter.post("/register", register);

export { userRouter };
