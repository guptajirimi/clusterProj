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
      document.querySelector(".mainResumeBoxHeaderImg").style.backgroundImage=`url(${reader.result})`
    };
    reader.readAsDataURL(file);

  }


}

const[expList,setExpList]=useState([]);


const addDynamicLiSecForExp=()=>
{
  setExpList([...expList,""]);
}

const[educationList,setEducationList]=useState([]);
const addDynamicLiSecForEducation=()=>
{
  setEducationList([...educationList,""]);
}
const addSkills=()=>
{
  setEducationList([...educationList,""]);
}
const addPersonalproject=()=>
{
  setEducationList([...educationList,""]);
}
const addAchivement=()=>
{
  setEducationList([...educationList,""]);
}
const addLanguage=()=>
{
  setEducationList([...educationList,""]);
}

  return (
    <div className="mainResumeBox">

      <div className="mainResumeBoxHeader">

        <div className="mainResumeBoxHeaderImg">
          <input type="file" accept="image/*" onChange={imageHandle}   name="img" id="img" style={{ display: "none" }}/> 
          <label htmlFor="img" style={{ cursor: "pointer" }}> Browse</label>
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
            <ul>
               {expList.map((item,index)=>(
                  <li key={index}>
                      <input placeholder="Enter Experience"/>
                  </li>
               ))}
            </ul>
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
            <ul>
               {educationList.map((item,index)=>
               (
                <li key={index}>
                  <input placeholder="Enter Education" />
                </li>
               ))}
            </ul>
            <i className="fa fa-plus" onClick={addDynamicLiSecForEducation}></i>
          </div>
        </div>

      </div>

      <div className="mainResumeBoxRightSec">
        {/* skill-personalproject-achivement-lang*/}
        <h3>Skill</h3>
        <div className="RightSecSkill"> 

                <i className="fa fa-plus" onClick={addSkills}></i>
        </div>
        <div className="RightSecPersonalproject"> 
               <ul>

               </ul>
               <i className="fa fa-plus" onClick={addPersonalproject}></i>
        </div>
        <div className="RightSecAchivement"> 
                <ul>
                  
               </ul>
               <i className="fa fa-plus" onClick={addAchivement}></i>
        </div>
        <div className="RightSecLang"> 
               <i className="fa fa-plus" onClick={addLanguage}></i>
        </div>
      </div>

    </div>
  );
}

export default ResumeBuilder;
