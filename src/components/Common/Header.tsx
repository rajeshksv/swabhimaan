import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-2">
      <Navbar.Brand
        href="/"
        className="mx-2 font-weight-bold"
        style={{ fontSize: "1.5em" }}
      >
        Swabhimaan.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mx-3" href="/">
            Home
          </Nav.Link>
          <NavDropdown className="mx-3" title="Causes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/education">Education</NavDropdown.Item>
            <NavDropdown.Item href="/food">Food</NavDropdown.Item>
            <NavDropdown.Item href="/health">Health</NavDropdown.Item>
            <NavDropdown.Item href="/employment">Employment</NavDropdown.Item>
            <NavDropdown.Item href="/womenwelfare">
              Women Welfare
            </NavDropdown.Item>
            <NavDropdown.Item href="/communityenabling">
              Community Enabling
            </NavDropdown.Item>
            <NavDropdown.Item href="/microfinance">
              Micro Finance
            </NavDropdown.Item>
            <NavDropdown.Item href="/covid">Covid</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="mx-3" href="/timeline">
            Journey
          </Nav.Link>
          <Nav.Link className="mx-3" href="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link className="mx-3" href="/awards">
            Awards
          </Nav.Link>
          <Nav.Link className="mx-3" href="/blogs">
            Blogs
          </Nav.Link>
          <Nav.Link className="mx-3" href="/whoweare">
            About Us
          </Nav.Link>
          <Nav.Link className="mx-3" href="/whoweare">
            Donate
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
