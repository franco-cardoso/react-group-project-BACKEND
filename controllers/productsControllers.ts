import { getAllProducts } from "../services/productServices";

const getProducts = (req, res) => {
    try {
        getAllProducts((result) => res.status(200).json(result));
    } catch (err) {
        res.status(500).send("Internal server error");
    }
};

export { getProducts };
