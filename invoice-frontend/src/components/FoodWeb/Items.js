import React, { useState } from "react";
import ItemCards from "./itemCards";  
import NavbarFood from "./NavbarFood";
import "../../css/Items.css";
import { useLocation } from "react-router-dom";
 

function Items({itemList,setItemList}) {

  const location=useLocation();
const query=new URLSearchParams(location.search);
const searchTerm=query.get("search") || "";
 
 const filteredItems = itemList.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
 
  const updateQtyCounter = (id, qty) => {
    

    setItemList(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, qty }
        : item
    )
  );
};
    
 

  let totalCartValue = 0;
  Object.values(itemList).forEach(item => {
    totalCartValue += item.qty;
  });

  return (
    <>
      <NavbarFood count={totalCartValue} />
      
      <div className="items-container">
        {filteredItems.map(item => (
          <ItemCards
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            qty={item.qty}
            onChange={updateQtyCounter}
          />
        ))}
      </div>
    </>
  );
}

export default Items;
