import React from "react";

const Header = () => {
  const headerStyle = {
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center"
  };

  const navStyle = {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none"
  };

  return (
    <header style={headerStyle}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about" style={navStyle}>About</a>
        <a href="#projects" style={navStyle}>Projects</a>
        <a href="#contact" style={navStyle}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
