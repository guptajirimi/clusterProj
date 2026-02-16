import React from "react";

const FoodCategoriesCard=({title,onClick})=>{
return(
    <>
        <div className="foodCard" onClick={onClick}>
            {title}
        </div>
    </>
)
}

export default FoodCategoriesCard;