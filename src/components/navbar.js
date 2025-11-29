import React from "react";
import "./navbar.css";
import GetStarted from "./getstarted"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">do list</h1>

      <ul className="nav-links">
        <li><a href="#about">About us</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#more">More option</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="auth-section">
        <button className="login-btn">Login</button>
        <GetStarted /> 
      </div>
    </nav>
  );
}

export default Navbar;