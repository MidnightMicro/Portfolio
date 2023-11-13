import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ShowBlogs from "./AllBlogs";

// import Blog from '../../../back-end/models'

function Blog() {
  const [state, setState] = useState({
    author: "",
    title: "",
    message: "Enter your text here!",
  });

  function handleClick(){
    alert("Blog Posted!")
  }

  const [blogList, setBlogList] = useState([]);

  // const [loading, setLoading] = useState(true);
  const { blogId } = useParams();
  console.log(blogId);
  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch("http://localhost:3001/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: state.author,
        title: state.title,
        text: state.message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((newBlog) => {
        console.log("New blog post created:", newBlog);
        setBlogList([...blogList, newBlog]);
        setState({
          author: "",
          title: "",
          message: "Enter your text here!",
        });
      })
      .catch((error) => {
        console.error("Error encountered with blog post:", error);
      });
  };

  useEffect(() => {
  }, [blogList]); // Refresh the component when blogList changes

  return (
    <>
      <h1>Blogs</h1>
      <Link to='/AllBlogs'> Show Previous Entries </Link>
      {/* Viewing: {blogId}
      <p>Written by:</p> */}
      <form onSubmit={handleSubmit} className="CreateBlog">
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleTextareaChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleTextareaChange}
          />
        </label>
        <br />
        <textarea
          value={state.message}
          onChange={handleTextareaChange}
          name="message"
          rows="10"
          cols="75"
        />
        <br></br>
        <input type="submit" value="Submit" onClick={handleClick} />
      </form>
      {/* <ShowBlogs /> */}
    </>
  );
}

export default Blog;
