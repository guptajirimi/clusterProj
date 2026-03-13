import React, { useState } from "react";
import "../../css/cart.css";
import NavbarFood from "./NavbarFood";
import { Link } from "react-router-dom";
import useCart from "../../customHooks/useCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";

const Cart = ({ itemList, charges, selectedOffer }) => {

  const { subTotal } = useCart(itemList);
  const [flyPlane, setFlyPlane] = useState(false);

  let discount = 0;
  if (selectedOffer && subTotal >= selectedOffer.elegiLityCreteria) {
    discount = selectedOffer.Discount;
  }

  const grandTotal =
    subTotal +
    charges.deliveryCharges +
    charges.govCharges -
    discount;

  const handelPlaceOrder = () => {

    const orderItem = itemList.filter(item => item.qty > 0);

    if (orderItem.length === 0) {
      toast.error("Cart is empty");
      return;
    }
if(subTotal < 150){
    toast.warning("Minimum order value must be ₹150 to place order");
    return;
  }
    setFlyPlane(true);

    const orderData = {
      items: orderItem.map(item => ({
        itemId: item.id,
        name: item.name,
        cost: item.cost,
        qty: item.qty,
        total: item.cost * item.qty,
        image: item.image
      })),
      subTotal: subTotal,
      deliveryCharges: charges.deliveryCharges,
      govCharges: charges.govCharges,
      discount: discount,
      grandTotal: grandTotal
    };

    $.ajax({
      url: "http://localhost:90/foodAppList/insertOrder",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(orderData),

      success: function (response) {

        setTimeout(() => {
          toast.success("Order Placed Successfully 🎉");
          setFlyPlane(false);
        }, 2000);

        console.log(response);
      },

      error: function (err) {
        toast.error("Error Occurred");
        setFlyPlane(false);
        console.log(err);
      }
    });

  };

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

      <Link to="/Offers" className="applyVoucher">
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
          <span>Discount</span>
          <span>₹{discount}</span>
        </div>

        <hr />

        <div className="grandTotal">
          <strong>Total</strong>
          <strong>₹{grandTotal}</strong>
        </div>

      </div>

      <div className="placeOrder">
        <button className="place-order-btn" onClick={handelPlaceOrder}>
          Place Order
        </button>
      </div>

      {/* ✈️ Airplane Animation */}
      {flyPlane && (
        <div className="planeAnimation">
          ✈️
        </div>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default Cart;