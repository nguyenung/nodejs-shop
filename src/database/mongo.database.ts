import mongoose from "mongoose";
import { mongoDBConfig } from '../config/index.js'

export const connectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(mongoDBConfig.credential as string);
        console.log('Connected to MongoDB through mongoose');
    } catch (error: any) {
        throw new Error((error as Error).message);
    }
}