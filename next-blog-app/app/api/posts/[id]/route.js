import Post from "@/app/models/postModel";
import { connectDB } from "@/app/utils/connectDB";
// Getting Single Post by Id
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const id = params.id;
    const post = await Post.findById(id);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

// Update the Post by Id
export const PUT = async (req, { params }) => {
  try {
    await connectDB();
    const { title, description, tags } = await req.json();
    await Post.findByIdAndUpdate(
      params.id,
      {
        $set: {
          title,
          description,
          tags,
        },
      },
      { new: true }
    );
    return new Response("Post updated successfully", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

// Delete the Post by Id
export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    await Post.findByIdAndDelete(params.id);
    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
