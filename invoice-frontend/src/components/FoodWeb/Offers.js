import React from "react";
import "../../css/Offer.css";
import NavbarFood from "./NavbarFood";
import { Link, useLocation } from "react-router-dom";

function Offers({ offers }) {
  const location = useLocation();
  const subtotal = location.state?.grandTotal ?? null;

  return (
    <>
      <NavbarFood />

      <div className="offerPage">
        <div className="offerHeader">
          <h2>Available Offers</h2>
        </div>

        <div className="offerWrapper">
          {offers.map((item) => {
          const isEligible =
      subtotal !== null && subtotal >= item.elegiLityCreteria;
          
          return(
          
            <Link
              to="/Cart"
              state={{ selectedOffer: item }}
              className={isEligible ? "offerTagsEnabled" : "offerTagsDisabled"}
              key={item.id}
            >
              <span>Offer: ₹{item.Discount} OFF</span>
              <p>Applicable on cart above ₹{item.elegiLityCreteria}</p>
            </Link>
          )
        })};
        </div>

        <div className="offerFooter">
          * Offers are automatically applied at checkout
        </div>
      </div>
    </>
  );
}

export default Offers;
