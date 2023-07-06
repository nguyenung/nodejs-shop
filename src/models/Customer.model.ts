import { Schema, model } from "mongoose";

interface ICustomer {
    email: string;
    name: string;
    password: string;
}

const customerSchema = new Schema<ICustomer>({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export const Customer = model<ICustomer>('Customer', customerSchema);
