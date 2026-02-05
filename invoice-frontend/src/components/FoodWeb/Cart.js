import React from "react";
import "../../css/cart.css";
import NavbarFood from "./NavbarFood";
import {Link } from "react-router-dom";
import useCart from "../../customHooks/useCart";

const Cart = ({ itemList ,charges,selectedOffer}) => {
  
 const {subTotal} =useCart(itemList);
 
  let discount=0;
  if(selectedOffer && subTotal>=selectedOffer.elegiLityCreteria)
  {
    discount=selectedOffer.Discount;
  }
  const grandTotal = subTotal + charges.deliveryCharges + charges.govCharges-discount;

  return (
    <>
      <NavbarFood />

      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {itemList.map(
            item =>
              item.qty > 0 && (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.cost}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.cost * item.qty}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
<Link to="/Offers" className="applyVoucher"  >
  <span>Apply Voucher</span>
</Link>

      <div className="footerSubtotal"> 
        <div>
          <span>SubTotal</span>
          <span>₹{subTotal}</span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>₹{charges.deliveryCharges}</span>
        </div>
        <div>
          <span>Gov Charges</span>
          <span>₹{charges.govCharges}</span>
        </div>
        <hr />
        <div>
          <span>Discout</span>
          <span>₹{discount}</span>
        </div>
        <hr />
        <div className="grandTotal">
          <strong>Total</strong>
          <strong>₹{grandTotal}</strong>
        </div>
      </div>
    </>
  );
};

export default Cart;
