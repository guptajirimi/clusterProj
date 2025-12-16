
function Invoice() {

	const [itemList, setItemList] = useState({
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
	});

	const addDynamicList = () => {
		setItemList([...itemList, ""]);
	}
	
	const[invoiceFormData,setinvoiceFormData]=useState({
		IssuerSign:"",
		receiverSign:"",
		duedateTillPayment:"",
		dateEntry:"",
		invoiceNo:"",
		salesMan:"",
		dlno:"",
		emailOfIssuer:"",
		gstinNo:"",
		invoiceGeneratorName:"",
		invoiceToName:"",
		invoiceGeneratorAdress:"",
		invoiceGeneratorPhno:""
	});
	const handleChange=(e)=>{
		var name=e.target.name;
		var value=e.terget.value;
		setinvoiceFormData[prev=>({
			...prev,
			[name]:value
		})]
	}
	return (
		<>
			<div className="invoiceMainContainer">
				<div className="headerSection">
					<input name="invoiceGeneratorName" id="invoiceGeneratorName" placeholder="Generator Name" onChange={handelChange} value={invoiceFormData.invoiceGeneratorName} />
					<input name="invoiceToName" id="invoiceToName" placeholder="Invoice To" onChange={handelChange} value={invoiceFormData.invoiceToName}/>
					<input name="invoiceGeneratorAdress" id="invoiceGeneratorAdress" placeholder="Address" onChange={handelChange} value={invoiceFormData.invoiceGeneratorAdress}/>
					<input name="invoiceGeneratorPhno" id="invoiceGeneratorPhno" maxLength={10} placeholder="Phone No" onChange={handelChange} value={invoiceFormData.invoiceGeneratorPhno}/>
				</div>
				<div className="GST-section">
					<div className="gstDetailsSecOne">
						<input name="dlno" id="dlno" placeholder="DL No" onChange={handelChange} value={invoiceFormData.dlno}/>
						<input name="emailOfIssuer" id="emailOfIssuer" placeholder="Email" onChange={handelChange} value={invoiceFormData.emailOfIssuer}/>
						<input name="gstinNo" id="gstinNo" placeholder="GSTIN" onChange={handelChange} value={invoiceFormData.gstinNo}/>
					</div>
					<div className="gstDetailsSecTwo">
						<h3>GST Invoice</h3>
					</div>
					<div className="gstDetailsSecThree">
						<div className="gstInsideFlexOne">
							<input name="invoiceNo" id="invoiceNo" placeholder="Invoice No" onChange={handelChange} value={invoiceFormData.invoiceNo}/>
							<input name="salesMan" id="salesMan" placeholder="Salesman" onChange={handelChange} value={invoiceFormData.salesMan}/>
						</div>
						<div className="gstInsideFlexTwo">
							<input type="date" name="dateEntry" id="dateEntry" placeholder="Invoice Date" onChange={handelChange} value={invoiceFormData.dateEntry}/>
							<input type="date" name="duedateTillPayment" id="duedateTillPayment" placeholder="Due Date" onChange={handelChange} value={invoiceFormData.duedateTillPayment}/>
						</div>
					</div>
				</div>
				<div className="dynamicList">
					<table>
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
						<tbody>
							{itemList.map((item, index) => (
								<tr key={index}>
									<td><input name="item" id="Sn No." value={item.snNo} placeholder="Sn No" /></td>
									<td><input name="Qty" id="Qty" value={item.Qty} placeholder="Qty" /></td>
									<td><input name="Pack" id="Pack" value={item.Rack} placeholder="Pack" /></td>
									<td><input name="Product" id="Product" value={item.Product} placeholder="Product Name" /></td>
									<td><input name="Batch" id="Batch" value={item.Batch} placeholder="Batch No" /></td>
									<td><input name="Exp" id="Exp" value={item.Exp} placeholder="MM/YY" /></td>
									<td><input name="HSN" id="HSN" value={item.HSN} placeholder="HSN Code" /></td>
									<td><input name="MRP" id="MRP" value={item.MRP} placeholder="MRP" /></td>
									<td><input name="Rate" id="Rate" value={item.Rate} placeholder="Rate" /></td>
									<td><input name="Dis" id="Dis" value={item.Dis} placeholder="Discount" /></td>
									<td><input name="SGST" id="SGST" value={item.SGST} placeholder="SGST %" /></td>
									<td><input name="CGST" id="CGST" value={item.CGST} placeholder="CGST %" /></td>
									<td><input name="Amount" id="Amount" value={item.Amount} placeholder="Amount" />
										<i className="fa fa-plus" onClick={addDynamicList}></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="footerSection"></div>
					<div className="totalAmountSec">
								<p> Sub Total :</p>
								<p> With SGST :</p>
								<p> With CGST :</p>
								<p> Total Amount:</p>
								
					</div>
					<div className="signatureSection">
									 <input tpye="textArea" name="receiverSign" onChange={handelChange} value={invoiceFormData.receiverSign}/>
									 <input tpye="textArea" name="IssuerSign" onChange={handelChange} value={invoiceFormData.IssuerSign}/>		
					</div>
				<div></div>
			</div>
		</>
	);
}



