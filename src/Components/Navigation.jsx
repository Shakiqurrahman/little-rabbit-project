import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", scrollHeandler);

  return (
    <Navbar
      expand="lg"
      className={
        scroll ? "navbar navbar-expand-lg nav-bg" : "navbar navbar-expand-lg "
      }
    >
      <div className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Creative Campus" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mint">Tokenomics</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#artworks">Collection</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>

            <Nav.Link href="#question">Question</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex icon-contact-wrapper" >
          <div className="nav-icon-wrapper d-flex" >
            <div className="nav-icon">
            <a target='blank' href="https://twitter.com/LTRBTtwt"><FaTwitter/></a>
            </div>
            <div className="nav-icon">
            <a target='blank' href="https://t.me/littlerabbitchat"><FaTelegramPlane /></a>
            </div>
          </div>
          <div className="connect-wrapper" >
            <a target="blank" href="https://littlerabbitswap.com/ " className="btn" >Connect wallet</a>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
