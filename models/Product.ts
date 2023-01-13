import { Schema, model } from "mongoose";
import { ProductType } from "../misc/types";

const ProductSchema = new Schema<ProductType>(
    {
        img: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true, lowercase: true },
    },
    { collection: "products" }
);

const Product = model<ProductType>("Product", ProductSchema);
export { Product };
