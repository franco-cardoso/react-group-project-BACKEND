import express from "express";
import { userRouter } from "./userRoutes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/test", (req, res) => res.send("test"));

export { router };
