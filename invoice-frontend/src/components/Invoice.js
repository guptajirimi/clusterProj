import React from "react";
import "../css/invoice.css";
import { useState } from "react";

function Invoice() {

	const [itemList, setItemList] = useState([
		{
			snNo: "",
			Qty: "",
			Rack: "",
			Product: "",
			Batch: "",
			Exp: "",
			HSN: "",
			MRP: "",
			Rate: "",
			Dis: "",
			SGST: "",
			CGST: "",
			Amount: ""
		}
	]);

	const addDynamicList = () => {
		setItemList([
			...itemList,
			{
				snNo: "",
				Qty: "",
				Rack: "",
				Product: "",
				Batch: "",
				Exp: "",
				HSN: "",
				MRP: "",
				Rate: "",
				Dis: "",
				SGST: "",
				CGST: "",
				Amount: ""
			}
		]);
	};

	const [invoiceFormData, setinvoiceFormData] = useState([
		{
			IssuerSign: "",
			receiverSign: "",
			duedateTillPayment: "",
			dateEntry: "",
			invoiceNo: "",
			salesMan: "",
			dlno: "",
			emailOfIssuer: "",
			gstinNo: "",
			invoiceGeneratorName: "",
			invoiceToName: "",
			invoiceGeneratorAdress: "",
			invoiceGeneratorPhno: ""
		}
	]);

	const handelChange = (e) => {
		var name = e.target.name;
		var value = e.target.value;

		setinvoiceFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	
	const subtotal=itemList.redude((sum,item)=>
		{
			return sum + (Number(item.Amount) || 0);
		}, 0);
		 

  var sgst;
var cgst;
$.ajax({
	url:'http://localhost:90/invoice/getGST',
	contentType:"application/json",
	type:"GET",
	data:JSON.stringify(),
	success:function(responce){
		sgst=responce;
		cgst=responce;
	},
	error:function(responce){
			toast.error("Error Occured");
	}
	
})  

	return (
		<>
			<div className="invoiceMainContainer">

				{/* Header */}
				<div className="headerSection">
					<input
						name="invoiceGeneratorName"
						id="invoiceGeneratorName"
						placeholder="Generator Name"
						onChange={handelChange}
						value={invoiceFormData.invoiceGeneratorName}
					/>
					<input
						name="invoiceToName"
						id="invoiceToName"
						placeholder="Invoice To"
						onChange={handelChange}
						value={invoiceFormData.invoiceToName}
					/>
					<input
						name="invoiceGeneratorAdress"
						id="invoiceGeneratorAdress"
						placeholder="Address"
						onChange={handelChange}
						value={invoiceFormData.invoiceGeneratorAdress}
					/>
					<input
						name="invoiceGeneratorPhno"
						id="invoiceGeneratorPhno"
						maxLength={10}
						placeholder="Phone No"
						onChange={handelChange}
						value={invoiceFormData.invoiceGeneratorPhno}
					/>
				</div>

				{/* GST Section */}
				<div className="GST-section">

					<div className="gstDetailsSecOne">
						<input
							name="dlno"
							id="dlno"
							placeholder="DL No"
							onChange={handelChange}
							value={invoiceFormData.dlno}
						/>
						<input
							name="emailOfIssuer"
							id="emailOfIssuer"
							placeholder="Email"
							onChange={handelChange}
							value={invoiceFormData.emailOfIssuer}
						/>
						<input
							name="gstinNo"
							id="gstinNo"
							placeholder="GSTIN"
							onChange={handelChange}
							value={invoiceFormData.gstinNo}
						/>
					</div>

					<div className="gstDetailsSecTwo">
						<h3>GST Invoice</h3>
					</div>

					<div className="gstDetailsSecThree">

						<div className="gstInsideFlexOne">
							<input
								name="invoiceNo"
								id="invoiceNo"
								placeholder="Invoice No"
								onChange={handelChange}
								value={invoiceFormData.invoiceNo}
							/>
							<input
								name="salesMan"
								id="salesMan"
								placeholder="Salesman"
								onChange={handelChange}
								value={invoiceFormData.salesMan}
							/>
						</div>

						<div className="gstInsideFlexTwo">
							<input
								type="date"
								name="dateEntry"
								id="dateEntry"
								onChange={handelChange}
								value={invoiceFormData.dateEntry}
							/>
							<input
								type="date"
								name="duedateTillPayment"
								id="duedateTillPayment"
								onChange={handelChange}
								value={invoiceFormData.duedateTillPayment}
							/>
						</div>

					</div>
				</div>

				{/* Dynamic Item List */}
				<div className="dynamicList">
					<table>
						<thead>
							<tr>
								<th>Sn No.</th>
								<th>Qty</th>
								<th>Pack</th>
								<th>Product</th>
								<th>Batch</th>
								<th>Exp</th>
								<th>HSN</th>
								<th>MRP</th>
								<th>Rate</th>
								<th>Dis</th>
								<th>SGST</th>
								<th>CGST</th>
								<th>Amount</th>
							</tr>
						</thead>

						<tbody>
							{itemList.map((item, index) => (
								<tr key={index}>
									<td><input value={item.snNo} placeholder="Sn No"
										onChange={(e) => {
											const update = [...itemList];
											update[index].snNo = e.target.value;
											setItemList(update);
										}
										} /></td>
									<td><input value={item.Qty} placeholder="Qty"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Qty = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.Rack} placeholder="Pack"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Rack = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.Product} placeholder="Product Name"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Product = e.target.value;
											setItemList(update);
										}}
				  /></td>
									<td><input value={item.Batch} placeholder="Batch No"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Batch = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.Exp} placeholder="MM/YY"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Exp = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.HSN} placeholder="HSN Code"
										onChange={(e) => {
											const update = [...itemList];
											update[index].HSN = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.MRP} placeholder="MRP"
										onChange={(e) => {
											const update = [...itemList];
											update[index].MRP = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.Rate} placeholder="Rate"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Rate = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.Dis} placeholder="Discount"
										onChange={(e) => {
											const update = [...itemList];
											update[index].Dis = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.SGST} placeholder="SGST %"
										onChange={(e) => {
											const update = [...itemList];
											update[index].SGST = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.CGST} placeholder="CGST %"
										onChange={(e) => {
											const update = [...itemList];
											update[index].CGST = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td>
										<input value={item.Amount} placeholder="Amount"
											onChange={(e) => {
												const update = [...itemList];
												update[index].Amount = e.target.value;
												setItemList(update);
											}}
										/>
										<i className="fa fa-plus" onClick={addDynamicList}></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Totals */}
				<div className="totalAmountSec">
					<p>Sub Total :{subtotal}</p>
					<p>With SGST :</p>
					<p>With CGST :</p>
					<p>Total Amount :</p>
				</div>

				{/* Signature */}
				<div className="signatureSection">
					<input
						name="receiverSign"
						onChange={handelChange}
						value={invoiceFormData.receiverSign}
					/>
					<input
						name="IssuerSign"
						onChange={handelChange}
						value={invoiceFormData.IssuerSign}
					/>
				</div>

			</div>
		</>
	);
}

export default Invoice;
