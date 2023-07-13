import { Schema } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface ICategory extends IBaseModel {
    title: string;
    description: string;
    imageUrl: string;
}

const categorySchema = new Schema<ICategory>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

class CategoryModel extends BaseModel<ICategory> {
    constructor() {
        super('Category', categorySchema, 'categories');
    }
}

const Category = new CategoryModel().model;

export { Category };
