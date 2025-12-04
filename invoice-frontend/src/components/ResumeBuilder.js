import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Input } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../css/resume.css";

function ResumeBuilder() {
const imageHandle=(e)=>
{
  const file=e.target.files ? e.target.files[0] :null;

  if(file)
  {
    const reader=new FileReader();
    reader.onload=()=>{
      document.querySelector(".mainResumeBoxHeaderImg").style.backgroungImg=`url(${reader.result})`
    };
    reader.readAsDataURL(file);

  }


}
const addDynamicLiSecForExp=()=>
{

}
const addDynamicLiSecForEducation=()=>
{

}


  return (
    <div className="mainResumeBox">

      <div className="mainResumeBoxHeader">

        <div className="mainResumeBoxHeaderImg">
          <a href="#" onClick={imageHandle} placeholder="Click hear to browse image" name="img" id="img"></a>
        </div>

        <div className="mainResumeBoxHeaderIntro">
          <div>
            <input placeholder="Enter Name" name="nameHolder" id="nameHolder" />
          </div>

          <div>
            <textarea placeholder="Short Note" name="shortNote" id="shortNote"></textarea>
          </div>
        </div>

      </div>

      <div className="addressCityPhoneSec">
        <span><input placeholder="Enter Address" name="address" id="address" /></span>
        <span><input placeholder="Enter City" name="city" id="city" /></span>
        <span><input placeholder="Enter Phone" name="phone" id="phone" /></span>
      </div>

      <div className="mainResumeBoxLeftSec">
        {/* exp-education */}
        <h3>Experiance</h3>
        <div className="leftSecExpSec">
          <div>
            <input placeholder="Enter Date of joining" name="joiningDate" id="joiningDate" />
            <input type="checkbox" name="checkCurrentstatus" id="checkCurrentStatus" />
          </div>

          <div className="dynamicLiSection">
            <i className="fa fa-plus" onClick={addDynamicLiSecForExp}></i>
          </div>
        </div>
      <h3>Education</h3>
        <div className="leftSecEducationSec">
          <div>
            <input placeholder="Enter Date of joining" name="joiningDate2" id="joiningDate2" />
            <input placeholder="Enter Date of Over" name="endingDate" id="endingDate" />
          </div>

          <div className="dynamicLiSection">
            <i className="fa fa-plus" onClick={addDynamicLiSecForEducation}></i>
          </div>
        </div>

      </div>

      <div className="mainResumeBoxRightSec">
        {/* skill-personalproject-achivement-lang-intest */}
      </div>

    </div>
  );
}

export default ResumeBuilder;
