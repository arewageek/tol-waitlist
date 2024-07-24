import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connected to database");
  } catch (e) {
    console.log(e);
  }
};
