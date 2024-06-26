import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/event-management");
    console.log("Database connected successfully.....!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
