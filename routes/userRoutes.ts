import express from "express";
import { getUsers, login, register } from "../controllers/userControllers";
import { isValidUser } from "../middleware/userMiddleware";

const userRouter = express.Router();

userRouter.use("/register", isValidUser);

userRouter.get("/", getUsers);
userRouter.post("/login", login);
userRouter.post("/register", register);

export { userRouter };
