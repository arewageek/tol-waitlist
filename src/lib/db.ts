import mongoose, { connection, connect } from "mongoose";

const con = {
  isConnected: false,
};

export const connectMongoDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://arewageek:11e0s79nC8KnBXvo@cluster0.xabpnqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to database");
  } catch (e) {
    console.log("Error connecting to database", e);
    process.exit(1);
  }
};
