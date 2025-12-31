import React from "react";
import itemImage from "../../images/food1.jpg";
import { FaPlus ,FaMinus} from "react-icons/fa";
import "../../css/Items.css";
import { useState } from "react";

function ItemCards(props) {
	const[count,setCount]=useState(0);
	const handelAdd=()=>{
		setCount(count+1);	
    props.addtoCart({
      title:props.title,
      cost:props.cost

    })
	}
	const handelRemove=()=>{
		if(count>0){
		setCount(count-1);	
		}
	}
  
  return (
    <div className="itemsfood">
      <img src={itemImage} alt={props.title} />
      <div className="item-info">
        <span className="item-title">{props.title}</span>
        <span className="item-cost">₹{props.cost}</span>
      </div>
      <FaMinus  className="remove-icon" onClick={handelRemove} />
      <span className="counter">{count}</span>
      <FaPlus className="add-icon" onClick={handelAdd} />
    </div>
  );
}

 


export default ItemCards;
