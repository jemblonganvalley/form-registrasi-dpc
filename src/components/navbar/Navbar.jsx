import React from "react";
import {} from "antd";
import logo from "../../assets/logopdi.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="logo pdiperjuangan"
        style={{
          height: "70%",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/ ";
        }}
      />
      <h3 style={{ color: "white", marginLeft: "8px" }}>PDI PERJUANGAN</h3>
    </nav>
  );
};

export default Navbar;
