import express from "express";
import { productsRouter } from "./productsRouter";
import { userRouter } from "./userRoutes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);

export { router };
