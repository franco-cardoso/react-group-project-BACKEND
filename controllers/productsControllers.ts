import { getAllProducts } from "../services/productServices";
import { ProductType } from "../misc/types";

const getProducts = (req, res) => {
    getAllProducts()
        .then((data) => res.status(data.status).send(data))
        .catch((err) => res.status(err.status).send(err.err));
};

export { getProducts };
