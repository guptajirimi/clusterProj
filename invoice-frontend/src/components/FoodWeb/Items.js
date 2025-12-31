import React from "react";
import ItemCards from "./itemCards";  
import NavbarFood from "./NavbarFood";
import "../../css/Items.css";
import { useState } from "react";

function Items(){
	
	const [itemsList, setItemsList] = useState([
	    { id: 1, name: "Rice", cost: 50 },
	    { id: 2, name: "Paneer", cost: 100 },
	    { id: 3, name: "Roti", cost: 10 },
	    { id: 4, name: "Dal", cost: 100 },
	    { id: 5, name: "Sweets", cost: 50 }
	  ]);
    const addtoCart=(item)=>
	 {
		setCart(prev => [...prev, item]);
	 }

    return(
        <>
         <NavbarFood />
        <div className="filters">
            <div className="costFilter">
                <select id="costFil" name="costFil">
                    <option>low-high</option>
                    <option>high-low</option>
                </select>
            </div>
            <div className="ratingFilter">
                <select id="ratingFil" name="ratingFil">
                    <option>low-high</option>
                    <option>high-low</option>
                </select>
            </div>
        
        </div>
        <div className="items-container">
        	{itemsList.map((item, index) => (
                <ItemCards
                  key={item.id}
                  title={item.name}
                  cost={item.cost}
                   addtoCart={addtoCart}
                />
              ))}
            </div>
        <div>
            
        </div>
        </>
    )
}
export default Items;