import mongoose from "mongoose";
import "dotenv/config";

export const Connect = async () => {
    try {
        const Connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("connected successfully");
        // console.log(Connection);
    } catch (error) {
        console.log(error);

    }
}