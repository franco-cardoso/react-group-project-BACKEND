import { PromiseType } from "../misc/types";
import { Product } from "../models/Product";
import { ProductType } from "../misc/types";
import { CallbackError, HydratedDocument } from "mongoose";

const getAllProducts = (): Promise<PromiseType> => {
    return new Promise((res, rej) => {
        try {
            Product.find({}, (err: CallbackError, products: HydratedDocument<ProductType>) => {
                if (err) throw err;
                res({ data: products, status: 200 });
            });
        } catch (err) {
            rej({ data: null, status: 500, error: err });
        }
    });
};

const getProductsMatch = (matchString: string): Promise<PromiseType> => {
    return new Promise((res, rej) => {
        try {
            const regex = new RegExp(matchString, "i");

            Product.find(
                { title: { $regex: regex } },
                (err: CallbackError, products: HydratedDocument<ProductType>) => {
                    if (err) throw err;
                    res({ data: products, status: 200 });
                }
            );
        } catch (err) {
            rej({ data: null, status: 500, error: err });
        }
    });
};

export { getAllProducts, getProductsMatch };
