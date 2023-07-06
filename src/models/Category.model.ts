import { Schema, model } from "mongoose";

interface ICategory {
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

export const Category = model('Category', categorySchema);
