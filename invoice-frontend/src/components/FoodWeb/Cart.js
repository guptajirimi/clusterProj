import React from "react";
import "../../css/cart.css";
import NavbarFood from "./NavbarFood";
import {Link, useLocation} from "react-router-dom";

const Cart = ({ itemList }) => {
const location=useLocation();
const selectedOffer=location.state?.selectedOffer || null;

  const subTotal=itemList.reduce(
    (sum,item)=>sum +item.cost*item.qty,0
  )

  const deliveryCharges = subTotal > 0 ? 30 : 0;
  const govCharges = subTotal > 0 ? Math.round(subTotal * 0.05) : 0;
  let discount=0;
  if(selectedOffer && subTotal>=selectedOffer.elegiLityCreteria)
  {
    discount=selectedOffer.Discount;
  }
  const grandTotal = subTotal + deliveryCharges + govCharges-discount;

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
<Link to="/Offers" className="applyVoucher" state={{grandTotal}}>
  <span>Apply Voucher</span>
</Link>

      <div className="footerSubtotal"> 
        <div>
          <span>SubTotal</span>
          <span>₹{subTotal}</span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>₹{deliveryCharges}</span>
        </div>
        <div>
          <span>Gov Charges</span>
          <span>₹{govCharges}</span>
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
