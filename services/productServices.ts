import { PromiseType } from "../misc/types";
import { Product } from "../models/Product";
import { ProductType } from "../misc/types";
import { HydratedDocument } from "mongoose";

const getAllProducts = (): Promise<PromiseType> => {
    return new Promise((res, rej) => {
        try {
            Product.find({}, (err, products: HydratedDocument<ProductType>) => {
                if (err) throw new Error(err);
                res({ data: products, status: 200 });
            });
        } catch (err) {
            rej({ data: null, status: 500, error: err });
        }
    });
};

const getProductsMatch = (): Promise<PromiseType> => {
    return new Promise((res, rej) => {});
};

export { getAllProducts };
