import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    if (isConnected) {
      console.log("Database already connected");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "next-blog-park",
    });
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
