import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CommentHandler from "../components/CommentHandler"
import ViewComments from "../components/ViewComments";


export default function ShowBlog() {
  const [blog, setBlog] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();




  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("something bad happened");
        }
        return response.json();
      })
      .then((blogData) => {
        console.log("Blog:", blogData);
        setBlog(blogData);
      });
  }, [id]);

  return (
    <>
      <div>
        <h2>Blog Details</h2>
        {blog ? (
          <div className="postID">
            <h3>Title: {blog.title}</h3>
            <h4> Blog entry: {blog.id}</h4>
            <hr></hr>
            <p>Written by: {blog.author}</p>
            <p className="postText">{blog.text}</p>
            <hr></hr>
            <Link to="/AllBlogs">
          <Button variant="contained" size="large">Back to Blogs</Button>
        </Link>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      <ViewComments blogId={blog.id}/>
      <CommentHandler blogId={blog.id} />
      </div>
    </>
  );
}
