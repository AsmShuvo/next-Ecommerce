import mongoose from "mongoose";
const connectDB = async()=>{
   try {
    await mongoose.connect(process.env.DB_URL)
   } catch (error) {
    console.log("Database connection error")
   }
}

export default connectDB;