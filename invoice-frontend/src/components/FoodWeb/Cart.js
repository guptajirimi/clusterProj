import React from "react";

const Cart = ({ itemList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {itemList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>₹{item.cost}</td>
            <td>{item.qty}</td>
            <td>₹{item.cost * item.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
