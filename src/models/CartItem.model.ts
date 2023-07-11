import { Schema, model, Types } from "mongoose";

interface ICartItem {
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
}, { collection: 'cart_items' }
);

export const CartItem = model<ICartItem>('CartItem', cartItemSchema);
