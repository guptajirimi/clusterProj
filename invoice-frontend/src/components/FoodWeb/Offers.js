import React from "react";
import "../../css/Offer.css";
import NavbarFood from "./NavbarFood";
import { Link  } from "react-router-dom";

function Offers({ offers,charges,dispatch }) {
  const  grandTotal=charges.subTotal+charges.deliveryCharges+charges.govCharges;
 
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
      grandTotal !== null && grandTotal >= item.elegiLityCreteria;
          
          return(
          
            <Link
              to="/Cart"
              onClick={()=>dispatch({type: "SEL_OFFER",id:item.id})}
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
