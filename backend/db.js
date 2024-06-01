import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected");
  } catch (error) {
    console.log("Failed Connection");
  }
};
