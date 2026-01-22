import React, { useState } from "react";
import ItemCards from "./itemCards";  
import NavbarFood from "./NavbarFood";
import "../../css/Items.css";
import Cart from "./Cart";

function Items() {

  const [itemList] = useState([
    { id: 1, name: "Rice", cost: 10 ,qty:0},
    { id: 2, name: "Roti", cost: 3 ,qty:0},
    { id: 3, name: "Dal", cost: 25,qty:0 },
    { id: 4, name: "Sabji", cost: 11 ,qty:0},
  ]);

  const [qtyCounter, setQtyCounter] = useState({});

  const updateQtyCounter = (id, qty) => {
    setQtyCounter(prev => ({
      ...prev,
      [id]: qty
    }));
  };

  let totalCartValue = 0;
  Object.values(qtyCounter).forEach(qty => {
    totalCartValue += qty;
  });

  return (
    <>
      <NavbarFood count={totalCartValue} />
      <Cart itemList={itemList}/>
      <div className="items-container">
        {itemList.map(item => (
          <ItemCards
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            qty={qtyCounter[item.id] || 0}
            onChange={updateQtyCounter}
          />
        ))}
      </div>
    </>
  );
}

export default Items;
