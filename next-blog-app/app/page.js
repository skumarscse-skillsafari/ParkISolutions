"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchAllPosts() {
      const res = await fetch("/api/posts", {
        method: "GET",
      });
      const data = await res.json();
      setPosts(data);
    }
    fetchAllPosts();
  }, []);

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      const { id } = e.target;
      if (confirm("Are you sure to delete the post")) {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        alert("Post deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 className="display-3 text-center my-3">Home Component</h2>
      <div className="row">
        {posts.map((post) => {
          return (
            <Card style={{ width: "18rem" }} key={post._id} className="col m-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>Tags: {post.tags.join(", ")}</Card.Text>
                <Link href={`/update/${post._id}`} className="btn btn-primary">
                  Update Post
                </Link>
                {"  "}
                <Button variant="danger" onClick={deletePost} id={post._id}>
                  Delete Post
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
