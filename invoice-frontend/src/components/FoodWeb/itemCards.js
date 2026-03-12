import React from "react";
 
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../css/Items.css";

function ItemCards({ id, name, cost, qty, onChange ,image }) {
 
  return (
    <div className="itemsfood">
     <img src={image} alt={name} />
      <div className="item-info">
        <span className="item-title">{name}</span>
        <span className="item-cost">₹{cost}</span>
      </div>

      <FaPlus onClick={()=>onChange(id,"INCREMENT_QTY")} />
      {qty}
      <FaMinus onClick={()=>onChange(id,"DECREMENT_QTY")} />
    </div>
  );
}

export default ItemCards;
