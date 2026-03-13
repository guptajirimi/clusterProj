import React from "react";
import "../../css/homeFood.css";

const FoodPopularCard=({id,title,image,onClick})=>{
return(
    <>
        <div className="foodPopularCard" onClick={onClick}>
            <img src={image} alt="title"/>
        </div>
    </>
)
}

export default FoodPopularCard;