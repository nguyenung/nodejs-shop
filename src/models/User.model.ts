import { Schema, model } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface IUser extends IBaseModel {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

class UserModel extends BaseModel<IUser> {
    constructor() {
        super('User', userSchema, 'users');
    }
}

const User = new UserModel().model;

export { User };
