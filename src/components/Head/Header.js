import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Form, Button, Nav, NavDropdown } from "react-bootstrap";
import { Router, Route, NavLink } from "react-router-dom";
import About from "../About/About";

export default function Header() {
  return (
    <div>
      
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" component>
              Trang Chủ
            </Nav.Link>
            <Nav.Link path="/about" component={About}>
              Giới Thiệu
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/action-3">Action</NavDropdown.Item>
              <NavDropdown.Item href="/lien-he">Liên Hệ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/san-pham">Sản Phẩm</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Đăng Nhập</Nav.Link>
            <Nav.Link href="/register">Đăng Ký</Nav.Link>
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
