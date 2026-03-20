import React, { useEffect, useState } from "react"
import "../../css/Myaccount.css";
import $ from "jquery";
import NavbarFood from "./NavbarFood";
const WishList=()=>{
    const [wishList,setWishList]=useState([]);
    useEffect(()=>{
    $.ajax({
      url:"http://localhost:90/foodAppList/getWishListUserWise",
      type:"GET",
      contentType:"JSON",
       xhrFields: {
    withCredentials: true
  },
      success: function(responce){
         const data = responce.map(item => ({
    id: item[0],
    name: item[1],
    image: item[2],
    date:item[3]
  }));
         setWishList(data);
      },
      error:function(responce){
        console.log("error");
      }

    })
  },[]);

    return(
    <> 
    <NavbarFood/> 
      <div className="yourOdersCard">

        {wishList.map((item, index) => (
          
          <div className="orderCard" key={index}>

  <div className="imgSec">
    <img src={item.image} alt={item.name} />
  </div>

  <div className="itemList">
    {item.name}  
  </div>

  <div className="orderDateTotal">
    <span className="date">{item.date}</span>
    
  </div>
        
</div>

        ))}

      </div>
    </>
   )
}
export default WishList;