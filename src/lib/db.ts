import mongoose, { connection, connect } from "mongoose";

const con = {
  isConnected: false,
};

export const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    console.log("Connected to database");
  } catch (e) {
    console.log("Error connecting to database", e);
    process.exit(1);
  }
};
