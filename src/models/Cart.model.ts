import { Schema, model, Types } from "mongoose";

interface ICart {
    customer: Types.ObjectId;
}

const cartSchema = new Schema<ICart>({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
}, { collection: 'carts' }
);

export const Cart = model<ICart>('Cart', cartSchema)
