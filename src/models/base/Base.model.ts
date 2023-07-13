import { Schema, Types, model, Document, Model } from "mongoose";

interface IBaseModel extends Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const baseSchemaOptions = {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    collection: '',
}

abstract class BaseModel<T extends IBaseModel> {
    public model;
    constructor(modelName: string, schema: Schema<T>, collectionName: string) {
        baseSchemaOptions.collection = collectionName;
        const baseSchema = new Schema<IBaseModel>({}, baseSchemaOptions).add(schema);
        this.model = model<IBaseModel>(modelName, baseSchema);
    }
}

export {IBaseModel, BaseModel};
