import { Schema, model, Types } from "mongoose";

interface IProduct {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: Types.ObjectId;
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, { collection: 'products' });

export const Product = model('Product', productSchema);
