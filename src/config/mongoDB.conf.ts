import dotenv from "dotenv";
dotenv.config();

export const mongoDBConfig = {
    credential: process.env.DB_MONGODB_CREDENTIAL
};