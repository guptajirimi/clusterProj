import React, { useEffect } from "react";
import "../css/invoice.css";
import { useState } from "react";
import $ from "jquery";

function Invoice() {
const today = new Date().toISOString().split("T")[0];
 const [sgst, setSgst] = useState(0);
    const [cgst, setCgst] = useState(0);
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

	 
	const [invoiceFormData, setinvoiceFormData] = useState({
    IssuerSign: "",
    receiverSign: "",
    duedateTillPayment: "",
    dateEntry: today,
    invoiceNo: "",
    salesMan: "",
    dlno: "",
    emailOfIssuer: "",
    gstinNo: "",
    invoiceGeneratorName: "",
    invoiceToName: "",
    invoiceGeneratorAdress: "",
    invoiceGeneratorPhno: ""
});


	const handelChange = (e) => {
		var name = e.target.name;
		var value = e.target.value;

		setinvoiceFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	
	const subtotal=itemList.reduce((sum,item)=>
		{
			return sum + (Number(item.Amount) || 0);
		}, 0);
		 

 

useEffect(()=> {
    // Call once when page loads
    $.ajax({
        url: 'http://localhost:90/invoice/getGST',
        contentType: "application/json",
        type: "GET",
        success: function(response) {
			 response.forEach(function(item){
				if(item.tax_name==="SGST")
				{
					setSgst(item.tax_value);
				}
				else if(item.tax_name==="CGST")
				{
					setCgst(item.tax_value);
				}
			 }

			 )
        },
        error: function(err) {
            console.error("Error fetching GST:", err);
        }
    });
},[]);
useEffect(() => {
    $.ajax({
        url:"http://localhost:90/invoice/getRandomInvoiceNo",
        contentType:"application/json",
        type:"GET",
        success:function(responce){
            setinvoiceFormData(prev => ({
                ...prev,
                invoiceNo: responce
            }));
        },
        error: function(err) {
            console.error("Error fetching Invoice No:", err);
        }
    });
}, []);

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
								value={invoiceFormData.invoiceNo} readOnly
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
									<td><input value={item.SGST} placeholder="SGST %" step={1} min={0} type="number"
										onChange={(e) => {
											const update = [...itemList];
											update[index].SGST = e.target.value;
											setItemList(update);
										}}
									/></td>
									<td><input value={item.CGST} placeholder="CGST %" step={1} min={0} type="number"
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
										
									</td>
								</tr>
							))}<i className="fa fa-plus" onClick={addDynamicList}></i>
						</tbody>
					</table>
				</div>

				{/* Totals */}
				<div className="totalAmountSec">
					<p>Sub Total :{subtotal}</p>
					<p>With SGST{sgst} :</p>
					<p>With CGST{cgst} :</p>
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