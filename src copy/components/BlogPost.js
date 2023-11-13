import React, { useState, useEffect } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((blogsData) => {
        console.log('List of blogs:', blogsData);
        setBlogs(blogsData);
      })
      .catch((error) => {
        console.error('Error:', error);
        
      });
  }, []);

  return (
    <div>
      <h2>List of Blogs</h2>
      <Link to="/Blog"> <Button variant="contained">Create New Post</Button> </Link>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="post">
            
            <h3>Title: {blog.title}</h3>
            <h4>Blog entry: {blog.id}</h4>
            <hr></hr>
            <p>Written by: {blog.author}</p>
            <p className="myParagraph">{blog.text}</p>
            <Link to={`/blog/${blog.id}`}>
              <Button variant="contained">Read More</Button>
            </Link>

          </li>
        ))}
      </ul>
{/* 
      <CommentHandler blogPostId={`${blogs.Id}`} /> */}


    </div>
  );
}

export default ShowBlogs;