import React from "react";
import './InvoiceDtl.css';

const InvoiceDtl = () => {
  return (
    <div className="container">
      {/* First row */}
      <div className="row">
        <div>
            <input type="text" placeholder="Enter Store Name" />
        </div>
        <div>
            <input type="text" placeholder="Enter Issuer Name" />
        </div>
      </div>

      {/* Second row */}
      <div className="row">
        <div>
           <input type="text" placeholder="Enter Address" />
        </div>
        <div>
           <input type="text" placeholder="Enter Phone Number" />
        </div>
      </div>

      {/* Item Table */}
      <div className="table-space">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Item 1" /></td>
              <td><input type="number" placeholder="Qty" /></td>
              <td><input type="number" placeholder="Rate" /></td>
              <td><input type="number" placeholder="Total" /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Item 2" /></td>
              <td><input type="number" placeholder="Qty" /></td>
              <td><input type="number" placeholder="Rate" /></td>
              <td><input type="number" placeholder="Total" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceDtl;
