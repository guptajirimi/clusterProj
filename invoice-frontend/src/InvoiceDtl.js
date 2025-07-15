import React, { useState } from "react";
import './InvoiceDtl.css';
import { useEffect } from "react/cjs/react.production";

const InvoiceDtl = () => {

	const [storeName, setStoreName] = useState("");
	const [issuerName, setIssuerName] = useState("");
	const [address, setAddress] = useState("");
	const [phonenumber, setPhonenumber] = useState("");
	const [costomerName, setCostomerName] = useState("");
	const [totalAmount, setTotalAmount] = useState(0);

	const [items, setItems] = useState(
		[
			{ itemName: "", quantity: "", rate: "", total: "" },

		]
	);
	const handleItemChange = (index, e) => {
		const updatedItems = [...items];
		updatedItems[index][e.target.name] = e.target.value;
		setItems(updatedItems);
	}
	const removeItem = (index) => {
		const updatedItems = items.filter(function(item, i) {
			return i !== index;
		});
		setItems(updatedItems);


	}
	const addItem = () => {
		setItems([...items, { itemName: "", quantity: "", rate: "", total: "" }]);
	}

	useEffect(() => {
		const total = items.reduce((sum, item) => {
			const qty = parseFloat(item.quantity) || 0;
			const rate = parseFloat(item.rate) || 0;
			return sum + qty * rate;
		}, 0);
		setTotalAmount(total.toFixed(2));
	}, [items]);

	const handleSubmit = async () => {
		const invoiceData = {
			strStoreName: storeName,
			strIssuerName: issuerName,
			strAddress: address,
			strPhonenumber: phonenumber,
			strCostomerName: costomerName,
			strInvoiceDate: new Date().toLocaleDateString(),
			strTotalAmount: totalAmount,
			items,


		}
		try {
			const response = await fetch("http://localhost:90/api/invoice/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(invoiceData),
			});
			if (response.ok) {
				alert("Invoice saved successfully!");
			} else {
				alert("Error saving invoice.");
			}
		} catch (err) {
			console.error("Error:", err);
			alert("Server error.");
		}
	}

	return (
		<div className="container">
			{/* First row */}
			<div className="row">
				<div>
					<input type="text" placeholder="Enter Store Name" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
					<input type="text" placeholder="Enter Issuer Name" value={issuerName} onChange={(e) => setIssuerName(e.target.value)} />
				</div>
			</div>

			{/* Second row */}
			<div className="row">
				<div>
					<input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
					<input type="text" placeholder="Enter Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
				</div>
			</div>
			{/* Third row */}
			<div className="row">
				<div>
					<input type="text" placeholder="Enter Address" value={costomerName} onChange={(e) => setCostomerName(e.target.value)} />
					<label >  Invoice Date: {new Date().toLocaleDateString()} </label>
					<lebel>Total Amount:${totalAmount}</lebel>
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
						{items.map((item, idx) => (
							<tr key={idx}>
								<td><input name="itemName" value={item.itemName} onChange={(e) => handleItemChange(idx, e)} /></td>
								<td><input name="quantity" value={item.quantity} onChange={(e) => handleItemChange(idx, e)} /></td>
								<td><input name="rate" value={item.rate} onChange={(e) => handleItemChange(idx, e)} /></td>
								<td><input name="total" value={item.total} onChange={(e) => handleItemChange(idx, e)} /></td>
								<td>
									<button onClick={() => removeItem(idx)}>Remove</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div>
					<button onClick={addItem}>Add Item</button>
					<button onClick={handleSubmit}>Submit Invoice</button>
				</div>
			</div>
		</div>
	);
};

export default InvoiceDtl;
