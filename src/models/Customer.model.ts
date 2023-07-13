import { Schema, model } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface ICustomer extends IBaseModel {
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

class CustomerModel extends BaseModel<ICustomer> {
    constructor() {
        super('Customer', customerSchema, 'customers');
    }
}

const Customer = new CustomerModel().model;

export { Customer };
