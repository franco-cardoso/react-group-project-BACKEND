import { getAllProducts, getProductsMatch } from "../services/productServices";
import { Request, Response } from "express";

const getProducts = (req: Request, res: Response) => {
    if ("search" in req.query) {
        getProductsMatch(req.query.search as string)
            .then((data) => res.status(data.status).send(data))
            .catch((err) => res.status(err.status).send(err.err));
    } else {
        getAllProducts()
            .then((data) => res.status(data.status).send(data))
            .catch((err) => res.status(err.status).send(err.err));
    }
};

export { getProducts };
