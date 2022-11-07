import express from "express";
import { getProducts } from "../controllers/productsControllers";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

export { productsRouter };
