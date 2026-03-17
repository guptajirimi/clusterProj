import React, { useState } from "react";
 
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../css/Items.css";

function ItemCards({ id, name, cost, qty, onChange ,image ,onWishlist}) {
 const[bounce,setBounce]=useState(false);

  return (
    <div className={`itemsfood ${bounce ? "animate" : ""}`}>
       
     <img src={image} alt={name} />
      <div className="item-info">
        <span className="item-title">{name}</span>
        <span className="item-cost">₹{cost}</span>
      </div>

      <FaPlus onClick={()=>{setBounce(true);onChange(id,"INCREMENT_QTY");setTimeout(() => setBounce(false), 300);}} />
      {qty}
      <FaMinus onClick={()=>onChange(id,"DECREMENT_QTY")} />
        <button className="danger wishlist" onClick={()=>onWishlist(id,"ADD_TO_WISHLIST")}><i class="fa fa-heart" aria-hidden="true"></i></button>
    </div>
  );
}

export default ItemCards;
