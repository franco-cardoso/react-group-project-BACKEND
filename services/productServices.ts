import { Product } from "../models/Product";

const getAllProducts = (response) => {
    Product.find({}, (err, products) => {
        if (err) throw new Error(err);
        response(products);
    });
};

export { getAllProducts };
