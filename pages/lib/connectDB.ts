import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB2_URI);
    console.log("Successfully connected to DataBase");
  }catch (error){
    console.log("Error connecting to DataBase", error);
  }
}