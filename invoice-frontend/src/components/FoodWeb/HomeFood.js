import React from "react";
import "../../css/homeFood.css";
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import FoodCategoriesCard from "./FoodCategoriesCard";
function HomeFood() {
  return (
    <>
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
          <FoodCategoriesCard title="North Indian"/>
          <FoodCategoriesCard title="South Indian"/>
          <FoodCategoriesCard title="Asian"/>
          <FoodCategoriesCard title="Korean"/>
        </div>

      </div>
    </>
  );
}

export default HomeFood;
