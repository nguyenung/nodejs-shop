import { Schema, model, Types } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface IProduct extends IBaseModel {
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
});

class ProductModel extends BaseModel<IProduct> {
    constructor() {
        super('Product', productSchema, 'products');
    }
}

const Product = new ProductModel().model;

export { Product };
