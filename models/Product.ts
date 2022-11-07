import { Schema, model } from "mongoose";

export interface ProductType {
    img: string;
    title: string;
    price: number;
    category: string;
}

const ProductSchema = new Schema<ProductType>(
    {
        img: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true, lowercase: true },
    },
    { collection: "products" }
);

const Product = model("Product", ProductSchema);
export { Product };
