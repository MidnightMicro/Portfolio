
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Blog from "./pages/Blog";
import ShowBlogs from "./pages/AllBlogs";

import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BlogId from "./pages/BlogID";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <img
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
          className="App-logo"
          alt="logo"
        />

        <p>{message}</p>
        {/* <>
          <Link to="./home">Click here to begin!</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/Blog">Blog</Link>
        </> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AllBlogs" element={<ShowBlogs />} />
          <Route path="/blog/:id" element={<BlogId />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
