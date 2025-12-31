import React from "react";
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
 
import {Link} from "react-router-dom";

function NavbarFood() {
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

console.log(openCloseStatus()); // "Open" or "Closed"


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
          <FaSearch />
          <span>Search</span>
        </div>

        <div className="nav-item">
          <Link to="/Cart">
          <FaShoppingCart />
          <span>Cart</span>
          </Link>
        </div>

        <div className="nav-item">
          <FaClipboardList />
          <span>Orders</span>
        </div>

        <div className="nav-item">
          <FaTags />
          <span>Offers</span>
        </div>

        <div className="nav-item">
          <FaUserShield />
          <span>Admin</span>
        </div>

        <div className="nav-item">
          <FaUser />
          <span>Profile</span>
        </div>
         {isloggedIn ? (
          <button>Logout</button>):
          (<button>Login</button>)
         }

         
      </div>
    </div>
  );
}

export default NavbarFood;
