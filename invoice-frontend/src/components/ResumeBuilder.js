import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Input } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../css/resume.css";
import $ from "jquery";

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

const[expList,setExpList]=useState([""]);


const addDynamicLiSecForExp=()=>
{
  setExpList([...expList,""]);
}
const deleteDynamicLiSecForExp=(index)=>
{
    const update=[...expList];
    update.splice(index,1);
    setExpList(update);

}
const[educationList,setEducationList]=useState([]);
const addDynamicLiSecForEducation=()=>
{
  setEducationList([...educationList,""]);
}

const[personalprojectList,setPersonalprojectList]=useState([]);
const[achivementList,setAchivementList]=useState([]);
const addPersonalproject=()=>
{
  setPersonalprojectList([...personalprojectList,""]);
}
const addAchivement=()=>
{
  setAchivementList([...achivementList,""]);
}
const [skillList,setSkillList]=useState([]);
const [languageList,setLanguageList]=useState([]);
const addSkillBubble =()=>
{
  setSkillList([...skillList,""]);
}
const removeSkillbubble=(index)=>{
  const update=[...skillList];
  update.splice(index,1);
  setSkillList(update);
}
const addLanguage=()=>
{
  setLanguageList([...languageList,""]);
}
const removeLanguageList=(index)=>
{
    const update=[...languageList];
    update.splice(index,1);
    setLanguageList(update);
}

const [newExpAddOnList,setNewExpAddOnList]=useState([]);
const addNewExpAddOnList=()=>
{
  setNewExpAddOnList([...newExpAddOnList,""]);
}
const downlodePDF = () => {
  const input = document.querySelector(".mainResumeBox");

  // Hide unnecessary stuff before PDF
  const plusIcons = input.querySelectorAll(".fa-plus");
  const deleteIcons = input.querySelectorAll(".fa-times");
  const browseLabel = input.querySelector("label[for='img']");

  plusIcons.forEach(el => el.style.display = "none");
  deleteIcons.forEach(el => el.style.display = "none");
  if (browseLabel) browseLabel.style.display = "none";

  // Remove borders from inputs and textareas for clean PDF
  const allInputs = input.querySelectorAll("input, textarea");
  allInputs.forEach(el => {
    el.style.border = "none";
    el.style.background = "transparent";
    el.style.outline = "none";
  });

  // Generate PDF
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");

    // Restore original styles after PDF
    plusIcons.forEach(el => el.style.display = "");
    deleteIcons.forEach(el => el.style.display = "");
    if (browseLabel) browseLabel.style.display = "";
    allInputs.forEach(el => {
      el.style.border = "";
      el.style.background = "";
      el.style.outline = "";
    });
  });
};
const[resumeFormData,setResumeData]=useState({
  nameHolder:"",
  shortNote:"",
  Email:"",
  address:"",
  phone:""
  
})


const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setResumeData(prev=>({
        ...prev,
        [name]:value
    })

    )

}



const saveToDatabase=()=>
{
const finalData=({
  ...resumeFormData,
  expList,
  educationList,
  skillList,
  personalprojectList,
  achivementList,
  languageList,
})
 


  $.ajax({
  url: "http://localhost:90/resumeBuilder/insert",
  type: "POST",
  contentType: "application/json",
  data: JSON.stringify(finalData),
  success: function () {
    console.log("SUCCESS");
  },
  error: function (err) {
    console.log("ERROR", err);
  }
});


}
const clearAllFeilds=()=>
{
    <ResumeBuilder/>
}

  return (
    <>
    
    <div className="mainResumeBox">

      <div className="mainResumeBoxHeader">

        <div className="mainResumeBoxHeaderImg">
          <input type="file" accept="image/*" onChange={imageHandle}   name="img" id="img" style={{ display: "none" }}/> 
          <label htmlFor="img" style={{ cursor: "pointer" }}> Browse</label>
        </div>

        <div className="mainResumeBoxHeaderIntro">
          <div>
            <input placeholder="Enter Name" name="nameHolder" id="nameHolder" onChange={handleChange} value={resumeFormData.nameHolder} />
          </div>

          <div>
            <textarea placeholder="Short Note" name="shortNote" id="shortNote" onChange={handleChange} value={resumeFormData.shortNote}></textarea>
          </div>
        </div>

      </div>

      <div className="addressCityPhoneSec">
        <span><i class="fa fa-map-marker" ></i><input placeholder="Enter Address" name="address" id="address"  onChange={handleChange} value={resumeFormData.address}/></span>
        <span><i class='fa fa-envelope'  ></i><input placeholder="Enter Email" name="Email" id="Email"  onChange={handleChange} value={resumeFormData.Email}/></span>
        <span><i class="fa fa-phone"  ></i><input placeholder="Enter Phone" name="phone" id="phone"  onChange={handleChange} value={resumeFormData.phone}/></span>
      </div>

      <div className="mainResumeBoxLeftSec">
        {/* exp-education */}
        <div className="sectionHeader">
        <h3>Experience</h3>
         <i className="fa fa-plus" onClick={addNewExpAddOnList}></i>
         </div>
         {newExpAddOnList.map((item,index)=>(  
          <div className="leftSecExpSec" key={index}>
          <div className="organisationAndJoinStatuusExp" key={index}>
          <div className="orgaisationExp" key={index}>
            <input placeholder="Enter Orgainisation"></input>
          </div>
          <div className="joinStatsExp" key={index}>
            <input placeholder="Enter Date of joining" type="date" name="joiningDate" id="joiningDate" />
              <span className="dateDash">–</span>
            <input type="date"/>
            {/* <input type="checkbox" name="checkCurrentstatus" id="checkCurrentStatus" /> */}
          </div>
        </div>
          <div className="dynamicLiSection" key={index}>
            <ul>
               {expList.map((item,index)=>
               (
                  <li key={index}>
                      <input placeholder="Accomplishment/Responsibility/Task" 
                       onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();  
            addDynamicLiSecForExp();
          }
          if(e.key==="Delete"){
               e.preventDefault();  
               deleteDynamicLiSecForExp(index);
          }
        }}
                    
                     />
                  </li>
               ))}
            </ul>
             
          </div>
        </div>))
}




      <div className="sectionHeader"><h3>Education</h3> <i className="fa fa-plus" onClick={addDynamicLiSecForEducation}></i></div>
      {educationList.map((item,index)=>
      (

      
        <div className="leftSecEducationSec" key={index}>
          <div className="educationOrganisatioAndDates"  >
          <div className="orgaisationExp">
            <input placeholder="Enter Orgainisation"></input>
          </div>
          <div className="JoiandEndates"> 
            <input placeholder="Enter Date of joining" type="date" name="joiningDate2"   />
              <span className="dateDash">–</span>
            <input placeholder="Enter Date of Over" type="date" name="endingDate"  />
          </div>
</div>
          <div className="dynamicLiSection">
           <ul> 
            <li>
                  <input placeholder="Enter Course" />
                </li>
             </ul>
           </div>
        </div>
)
      )
}





      </div>

      <div className="mainResumeBoxRightSec">
        {/* skill-personalproject-achivement-lang*/}
       <div className="sectionHeader"><h3>Skill</h3> <i className="fa fa-plus" onClick={addSkillBubble}></i></div>
<div className="RightSecSkill"> 
  {skillList.map((item, index) => 
  (
    <span className="skillBubble" key={index}>
      <input
        value={item}
        placeholder="Skill" maxLength={15}   style={
          {
            width:`${Math.max(item.length, 5)}ch`
            
          }
        }
        onChange={(e) => {
          const updated = [...skillList];
          updated[index] = e.target.value;
          setSkillList(updated);
        }}
      />
      <i class="fa fa-times" aria-hidden="true" onClick={()=>removeSkillbubble(index)}></i>
    </span>
  ))}

  
</div>
        <div className="RightSecPersonalproject"> 
          <div className="sectionHeader">
          <h3>Project</h3><i className="fa fa-plus" onClick={addPersonalproject}></i></div>
               <ul>
                  {personalprojectList.map((item,index)=>
                  (
                      <li key={index}>
                        <input placeholder="Enter Personal Projects" />
                      </li>
                  ))}
               </ul>
               
        </div>

        <div className="RightSecAchivement">
           <div className="sectionHeader"><h3>Achivement</h3> <i className="fa fa-plus" onClick={addAchivement}></i></div>
                <ul>
                      {achivementList.map((item,index)=>
                      (
                      <li key={index}>
                        <input placeholder="Enter Achivement" />
                      </li>
                  ))}
               </ul>
               
        </div>
        <div className="RightSecLang"> 
         <div className="sectionHeader"><h3>Intrest</h3>           
             <i className="fa fa-plus" onClick={addLanguage}></i>
</div>
<br/>
{languageList.map((item, index) => (
  <span key={index} className="skillBubble">
    <input
      placeholder="Intrest" style={{
        width:`${Math.max(item.length,7)}ch`
      }}
      value={item}
      onChange={(e) => {
        const updated = [...languageList];
        updated[index] = e.target.value;
        setLanguageList(updated);
      }}
    />
     <i class="fa fa-times" aria-hidden="true" onClick={()=>removeLanguageList(index)}></i>

  </span>
))}

        </div>
      </div>
   
    </div>
    <div className="bttonSectionOutside">
  <Button className="btn-primary" outline onClick={downlodePDF}><span>Download</span></Button>
  <Button className="btn-success" outline onClick={saveToDatabase}><span>Save</span></Button>
  <Button className="btn-danger" outline onClick={clearAllFeilds}><span>Clear</span></Button>
</div>
    </>
  );
}

export default ResumeBuilder;
