import React, { useEffect, useState } from "react";
import "../../css/homeFood.css";
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import FoodCategoriesCard from "./FoodCategoriesCard";
import NavbarFood from "./NavbarFood";
import useCart from "../../customHooks/useCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FoodPopularCard from "./FoodPopularCard";
import $ from "jquery";
function HomeFood({categoryList}) {
   const[hotListFoodItem,setHotListFoodItem]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    $.ajax({
      url:"http://localhost:90/foodAppList/hotListFoodItem",
      type:"GET",
      contentType:"JSON",
      success: function(responce){
          const data= responce.map(item=>({
            id:item.id,
            name:item.name
         }))
         setHotListFoodItem(data);
      },
      error:function(responce){
        console.log("error");
      }

    })
  },[]);
   return (
    <>
    <NavbarFood />
      {/* Hero Section */}
      <div className="hero-container">

        {/* Left Content */}
        <div className="sideDescription">
          <span className="tagline">Fast • Fresh • Delicious</span>

          <h1>
            Your Favourite Food <br />
            <span>Delivered Hot</span>
          </h1>

          <p>
            Order from top restaurants and get your meals delivered to your
            doorstep in minutes.
          </p>

          <button className="hero-btn">Explore Menu</button>
        </div>

        {/* Right Carousel */}
        <div className="carousel">
          <div className="carousel-track">
            <img src={food1} alt="food1" />
            <img src={food2} alt="food2" />
            <img src={food3} alt="food3" />
          </div>
        </div>

      </div>

      {/* =====================
          Food Categories Section
          ===================== */}
      <div className="foodCategorySection">

        <h2 className="sectionHeading">
          Explore by <span>Category</span>
        </h2>

        <div className="foodCards">
          {categoryList.map((item)=>(
             <FoodCategoriesCard  key={item.id} title={item.categoryName} onClick={() => navigate(`/Items?category=${item.categoryName}&id=${item.id}`)}/>
          ))}
           

        </div>
         

      </div>


      {/* =====================
          Most Demanded items
          ===================== */}
          <div className="foodCategoryPopularSection">
              {hotListFoodItem.map((item)=>(
                <FoodPopularCard key={item.id} title={item.name}/>
              ))}
          </div>
    </>
  );
}

export default HomeFood;
