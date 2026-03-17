import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../../css/Myaccount.css";
import { useNavigate } from "react-router-dom";
  
const MyAccount = () => {
 const navigate=useNavigate();
  const [yourOdersList, setYourOdersList] = useState([]);
    useEffect(()=>{
         console.log("MyAccount page loaded");
    $.ajax({
      url:"http://localhost:90/foodAppList/yourOdersList",
      type:"GET",
      contentType:"JSON",
      xhrFields: {
        withCredentials: true
      },
      success: function(responce){
         const data = responce.map(item => ({
    id: item[1],
    name: item[3],
    image: item[5],
    qty: item[2],
    total:item[0],
    date:item[4]
  }));
         setYourOdersList(data);
      },
      error:function(responce){
        console.log("error");
      }

    })
  },[]);
  const handelReorder=(id)=>
    {
        navigate(`/Items?itemId=${id}`)
    }
  return (
    <> 
      <div className="yourOdersCard">

        {yourOdersList.map((item, index) => (
          
          <div className="orderCard" key={index}>

  <div className="imgSec">
    <img src={item.image} alt={item.name} />
  </div>

  <div className="itemList">
    {item.name} x{item.qty}
  </div>

  <div className="orderDateTotal">
    <span className="date">{item.date}</span>
    <span className="total">₹{item.total}</span>
  </div>
       <button 
  className="primary reorderBtn" 
  onClick={() => handelReorder(item.id)}
>
  <i className="fa fa-undo"></i>
  <span>Reorder</span>
</button>
</div>

        ))}

      </div>
    </>
  );
};

export default MyAccount;