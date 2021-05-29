import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="/home" style={{ fontSize: "1.5em" }}>
        Swabhimaan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/home">
            Home
          </Nav.Link>
          <Nav.Link className="mx-3" href="/programs">
            Gallery
          </Nav.Link>
          <Nav.Link className="mx-3" href="/programs">
            Timelines
          </Nav.Link>
          <Nav.Link className="mx-3" href="/programs">
            Blog
          </Nav.Link>
          <NavDropdown
            className="mx-3"
            title="Programs"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="/action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="mx-3" href="/programs">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
