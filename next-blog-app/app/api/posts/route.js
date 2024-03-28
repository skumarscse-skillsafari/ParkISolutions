import Post from "@/app/models/postModel";
import { connectDB } from "@/app/utils/connectDB";

export const GET = async (req, res) => {
  try {
    connectDB();
    const allPosts = await Post.find();
    return new Response(JSON.stringify(allPosts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
