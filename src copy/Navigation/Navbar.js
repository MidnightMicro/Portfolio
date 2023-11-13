import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/Home">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/Home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/Blog">
              Create a Post
            </Nav.Link>
            <Nav.Link as={Link} to="/AllBlogs">
              View All Blogs
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
