import { Schema, Types } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface ICart extends IBaseModel {
    customer: Types.ObjectId;
}

const cartSchema = new Schema<ICart>({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
});

class CartModel extends BaseModel<ICart> {
    constructor() {
        super('Cart', cartSchema, 'carts');
    }
}

const Cart = new CartModel().model;

export { Cart };
