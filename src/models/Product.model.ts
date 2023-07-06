import { Schema, model } from "mongoose";

interface IProduct {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

export const Product = model('Product', productSchema);
