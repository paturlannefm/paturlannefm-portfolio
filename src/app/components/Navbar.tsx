"use client";

import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
const Fade = require("react-reveal/Fade");

const NavbarComponent = () => {
  const changeBackground = () => {
    let header = document.getElementsByClassName("header-nav")[0];
    if (window.scrollY < 200) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar className="header-nav" fixed="top" collapseOnSelect expand="lg">
        <Fade left cascade>
          <Navbar.Brand href="#home" className="brand-name ms-5">
            Franco.
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-5 ms-auto">
            <Fade right cascade>
              <Nav.Link className="px-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="px-3" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="px-3" href="#work">
                Experience
              </Nav.Link>
              <Nav.Link className="px-3" href="#project">
                Projects
              </Nav.Link>
              <Nav.Link className="px-3" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link
                className="px-3"
                rel="noopener noreferrer"
                href={
                  "https://drive.google.com/file/d/1sUYO5lTOsOfP7Udks1M12ZNOLffkHw5j/view?usp=drive_link"
                }
                target="_blank"
              >
                <Button variant="outline-success" className="button">
                  Resume
                </Button>
              </Nav.Link>
            </Fade>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
