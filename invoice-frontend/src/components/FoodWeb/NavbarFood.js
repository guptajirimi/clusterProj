import React, { useState } from "react";
import "../../css/navbarfood.css";

import {
  FaHome,
  FaUtensils,
  FaSearch,
  FaShoppingCart,
  FaClipboardList,
  FaTags,
  FaUserShield,
  FaUser,
  FaReact
} from "react-icons/fa";
 
import {Link, Navigate, useNavigate} from "react-router-dom";

function NavbarFood(props) {
 const openTime = "9am";
const closeTime = "12pm";
const isloggedIn=true;
function convertTo24Hour(timeStr) {
   
  let time = parseInt(timeStr);
  if (timeStr.toLowerCase().includes("pm") && time !== 12) {
    time += 12;
  }
  if (timeStr.toLowerCase().includes("am") && time === 12) {
    time = 0;
  }
  return time;
}

const openCloseStatus = function () {
  const now = new Date();
  const currentHour = now.getHours();

  const openHour = convertTo24Hour(openTime);
  const closeHour = convertTo24Hour(closeTime);

  if (currentHour >= openHour && currentHour < closeHour) {
    return "Open";
  } else {
    return "Closed";
  }
};

const[search,setSearch]=useState("");
 
const navigate=useNavigate();

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <FaUtensils className="logo-icon" />
        <span>FoodApp</span>
       <span className={`openCloseStatus ${openCloseStatus() === "Open" ? "open" : "closed"}`}>
        {openCloseStatus()}
      </span>
      </div>
<div className="nav-item search-box">
  <input
    type="text"
    placeholder="Search items..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        navigate(`/Items?search=${search}`);
      }
    }}
  />

  <FaSearch
    className="search-icon"
    onClick={() => navigate(`/Items?search=${search}`)}
  />
</div>

      {/* Menu Items */}
      
      <div className="navbar-menu">
        
        <div className="nav-item">
          <Link to="/home" >
          <FaHome />
          <span>Home</span>
          </Link>
        </div>

        <div className="nav-item">
          <FaUtensils />
          <Link to="/Items">
          <span>Menu</span>
          </Link>
        </div>

        

        <div className="nav-item">
          <Link to="/Cart">
          <FaShoppingCart />
          <span>Cart {props.count}</span>
          </Link>
        </div>

       

        <div className="nav-item">
          <FaTags />
          <Link to="/Offers">
          <span>Offers</span>
          </Link>
        </div>

         
        {isloggedIn ? (
  <button onClick={() => navigate("/login")}>Logout</button>
) : (
  <button onClick={() => navigate("/login")}>Login</button>
)}


         
      </div>
    </div>
  );
}

export default NavbarFood;
