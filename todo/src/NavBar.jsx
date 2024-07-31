import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">ToDo</div>
      <div className="navItems">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contract">Contract</a>
      </div>
    </nav>
  );
}
