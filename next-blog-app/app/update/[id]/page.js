"use client";
import Form from "@/app/components/Form";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
const UpdatePost = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
  });
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    async function getPost() {
      const res = await fetch(`/api/posts/${params.id}`);
      const data = await res.json();
      setPost(data);
    }
    getPost();
  }, []);
  const updatePost = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          tags: post.tags.split(",").map((tag) => tag.trim()),
        }),
      });
      if (response.ok) {
        alert("Post updated successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="container">
      <Form
        type="Update"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePost}
      />
    </div>
  );
};

export default UpdatePost;
