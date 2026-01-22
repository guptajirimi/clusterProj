import React from "react";
import itemImage from "../../images/food1.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../css/Items.css";

function ItemCards({ id, name, cost, qty, onChange }) {

  const handleAdd = () => {
    onChange(id, qty + 1);
  };

  const handleRemove = () => {
    if (qty > 0) {
      onChange(id, qty - 1);
    }
  };

  return (
    <div className="itemsfood">
      <img src={itemImage} alt={name} />
      <div className="item-info">
        <span className="item-title">{name}</span>
        <span className="item-cost">₹{cost}</span>
      </div>

      <FaPlus onClick={handleAdd} />
      {qty}
      <FaMinus onClick={handleRemove} />
    </div>
  );
}

export default ItemCards;
