import React, { useState } from "react";
import { toast } from "react-toastify";


function Demand()
{

const [poRegisterFB,setPoRegisterFB]=useState(
    {
        strCircleId: "",
        strDistrictId : "",
        strDistrictStoreId :""
    }
)
const onLoad=()=>{
    $.ajax({
        url:"`http://localhost:90/",
        contentType:"application/json",
        type:"GET",
        data:JSON.stringify(),
        success:function(responsce){
               strCircleCombo=responsce;
        },
        error:function(){
            toast.warning("Unable to load circle list");
        }
        
    })
}
const getDistrictCombo=()=>
{

}
const getStoreCmb=()=>
{

}
const getProgrammeCombo=()=>
{

}
    return(

      
	<div className="data-table-area mg-b-15">
        
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="single-pro-review-area" 
						id="div1">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="product-payment-inner-st" >
									 
										<legend className="scheduler-border">PO Register </legend>

										<form modelAttribute="poRegisterFB"
											method="post" name="formobj" id="myForm">
											 
											 
											<br/>
											
											<div className="form-group-inner">
												<div className="row">
													<div className="col" id="circleTrId">
														<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
															<label className="pull-right"><font color="red">*</font>Circle
																Name:</label>
														</div>
														<div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
															<div className="form-select-list">
																<div id="circleCmbDivId" align="left">
																	<select className='form-control-custom-select-value'
																		name="strCircleId" tabindex="1"
																		onChange={getDistrictCombo}>
																		{poRegisterFB.strCircleCombo}
																	</select>
																</div>
															</div>
														</div>
													</div>


													<div className="col" id="districtTrId">
														<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
															<label className="pull-right"><font color="red">*</font>State:</label>
														</div>
														<div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
															<div className="form-select-list">
																<div id="districtCmbDivId">
																	<select name="strDistrictId"
																		className="form-control-custom-select-value"
																		onChange={getStoreCmb}>
																		{poRegisterFB.strDistrictCombo}
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="col" id="districtDrugWarehouseDivId">
														<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
															<label className="pull-right"><font color="red">*</font>Warehouse
																Name:</label>
														</div>
														<div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
															<div className="form-select-list">
																<div id="strStoreDivId">
																	<select name="strDistrictStoreId"
																		className="form-control-custom-select-value"
																		onChange={getProgrammeCombo}>
																		{poRegisterFB.strDistrictStoreValues}
																	</select>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>

										
													

										</form>
									 
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}
export default Demand;