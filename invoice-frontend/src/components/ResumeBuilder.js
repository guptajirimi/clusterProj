import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { Button, Container, Input } from "reactstrap";

function ResumeBuilder() {
    const [resume,setResume]=useState({
         name:"",
        email:"",
        address:"",
        phoneNo:"",
        experience:"",
        education:"",
        project:"",
        hobbies:"",
        skills:""
    });


    const clearPage=()=>{
        setResume({ name:"",
        email:"",
        address:"",
        phoneNo:"",
        experience:"",
        education:"",
        project:"",
        hobbies:"",
        skills:""});
    }
    const Downlode=()=>
    {

    }
    const save=()=>
    {
        toast.success("Saved Susseccefully");
    }

  return (
    <Container style={{ maxWidth: "600px", marginTop: "20px" }}>
        <ToastContainer/>

      <h2 className="text-center mb-4">Resume Builder</h2>

      <Input type="text" placeholder="Enter your name" className="mb-2"  value={resume.name} />

      <h4>Personal Details</h4>
      <Input type="email" placeholder="Email" className="mb-2" value={resume.email} />
      <Input type="textarea" placeholder="Address" className="mb-2"  value={resume.address}/>
      <Input type="text" placeholder="Phone number" className="mb-4" value={resume.phoneNo}/>

      <h4>Experience</h4>
      <Input
        type="textarea"
        placeholder="Your work experience"
        className="mb-2" value={resume.experience}
      />

      <h4>Education</h4>
      <Input
        type="textarea"
        placeholder="Your educational background"
        className="mb-2" value={resume.education}
      />

      <h4>Project</h4>
      <Input type="textarea" placeholder="Your projects" className="mb-2" value={resume.project}/>

      <h4>Skills</h4>
      <Input type="textarea" placeholder="List your skills" className="mb-2" value={resume.skills} />

      <h4>Hobbies</h4>
      <Input type="textarea" placeholder="Your hobbies" className="mb-4" value={resume.hobbies}/>

      <div className="text-center">
        <Button color="primary" className="me-2" onClick={save}>
          Save
        </Button>
        <Button color="warning" className="me-2" onClick={clearPage}>
          Clear
        </Button>
        <Button color="info" onClick={Downlode}>Download Resume</Button>
      </div>
    </Container>
  );
}

export default ResumeBuilder;
