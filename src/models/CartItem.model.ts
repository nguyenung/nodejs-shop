import { Schema, Types } from "mongoose";
import { BaseModel, IBaseModel } from "./base/Base.model.js";

interface ICartItem extends IBaseModel {
    cart: Types.ObjectId;
    product: Types.ObjectId;
    quantity: number;
    price: number;
}

const cartItemSchema = new Schema<ICartItem>({
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

class CartItemModel extends BaseModel<ICartItem> {
    constructor() {
        super('CartItem', cartItemSchema, 'cart_items');
    }
}

const CartItem = new CartItemModel().model;

export { CartItem };
