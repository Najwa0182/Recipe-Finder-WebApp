import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Removed unused imports
import logo from "./../../Assets/main-logo.png";
import { AiOutlineHome } from 'react-icons/ai';
import "./Navbar.css";
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { BsHeart } from "react-icons/bs";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav className={`align-items-center ${isMobileNavOpen ? "mobile-open" : ""}`}>
      <div className="nav-logo d-flex align-items-center">
        <img src={logo} alt="logo" />
      </div>
      <ul className={`nav-links ${isMobileNavOpen ? "mobile-open" : ""}`}>
        <li onClick={ () => navigateTo("/")}>
          <AiOutlineHome />
          Home
        </li>
        <li onClick={ () => navigateTo("/tips")}> 
          <MdOutlineTipsAndUpdates />
          Tips
        </li>
        <li onClick={ () => navigateTo("/favourite")}> 
          <BsHeart />
          View Favorites
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
