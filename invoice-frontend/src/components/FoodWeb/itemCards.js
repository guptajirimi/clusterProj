import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../css/Items.css";
import $ from "jquery";
import { toast } from "react-toastify";

function ItemCards({ id, name, cost, qty, onChange, image }) {
  const [bounce, setBounce] = useState(false);

  const handleWishlist = (id) => {
    $.ajax({
      url: "http://localhost:90/foodAppList/addToWishList",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ id: id }),
      xhrFields: {
        withCredentials: true
      },
      success: function () {
        toast.success("Added to WishList");
      },
      error: function () {
        console.log("error");
      }
    });
  };

  return (
    <div className={`itemsfood ${bounce ? "animate" : ""}`}>
      <img src={image} alt={name} />

      <div className="item-info">
        <span className="item-title">{name}</span>
        <span className="item-cost">₹{cost}</span>
      </div>

      <FaPlus
        onClick={() => {
          setBounce(true);
          onChange(id, "INCREMENT_QTY");
          setTimeout(() => setBounce(false), 300);
        }}
      />

      {qty}

      <FaMinus onClick={() => onChange(id, "DECREMENT_QTY")} />

      <button
        className="danger wishlist"
        onClick={() => handleWishlist(id)}
      >
        <i className="fa fa-heart" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default ItemCards;