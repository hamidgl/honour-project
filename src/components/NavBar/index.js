import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = ({ bagLength }) => {
  const location = useLocation()
  const path = location.pathname;

  return (
    <div>
      <div className="container">
        <div className="top-nav">
          <h1><strong>Food Ordering</strong></h1>
          <input id="search" type="text" name="q" placeholder="Search for a meal"></input>
          <Link to="/login">Login/Register</Link>
        </div>

      </div>
      <nav>
        <div className="container">
          <div className="nav-content">
            <Link className={path === "/" ? "active" : ""} to="/">Home</Link>
            
            <Link className={path === "/ContactUs" ? "active" : ""} to="/ContactUs">Contact Us</Link>

            <Link className={path === "/ShoppingBag" ? "active" : ""} to="/ShoppingBag">Shopping Bag<span>{bagLength}</span></Link>
            <Link className={path === "/AboutUs" ? "active" : ""} to="/AboutUs">About Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;