import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Form, Button, Nav, NavDropdown } from "react-bootstrap";
import About from "../About/About";
import { Link } from 'react-router-dom';
import BodyContent from "../Body/BodyContent";
export default function Header() {
  return (
    <div>
      
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Navbar scroll</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">Giới Thiệu</Link>
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/action-3"><Link to="/action">Action</Link></NavDropdown.Item>
              <NavDropdown.Item to="/lien-he">Liên Hệ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/san-pham">Sản Phẩm</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/login">Đăng Nhập</Link></Nav.Link>
            <Nav.Link to="/register">Đăng Ký</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button className="mr-2" variant="outline-success">
              Search
            </Button>
            <Button to className="mr-2" variant="outline-primary">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
