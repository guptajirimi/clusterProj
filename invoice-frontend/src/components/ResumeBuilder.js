import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Input } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    address: "",
    phoneNo: "",
    experience: "",
    education: "",
    project: "",
    hobbies: "",
    skills: "",
  });

  const clearPage = () => {
    setResume({
      name: "",
      email: "",
      address: "",
      phoneNo: "",
      experience: "",
      education: "",
      project: "",
      hobbies: "",
      skills: "",
    });
  };

  const Download = () => {
     const input=document.getElementById("resume-content");
     html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save(`${resume.name}_Resume.pdf`);
  });
  };

  const save = () => {
    toast.success("Saved Successfully");
  };

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "20px" }}  id="resume-content">
      <ToastContainer />
      <h2 className="text-center mb-4">Resume Builder</h2>

      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="mb-2"
        value={resume.name}
        onChange={handleChange}
      />

      <h4>Personal Details</h4>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        className="mb-2"
        value={resume.email}
        onChange={handleChange}
      />
      <Input
        type="textarea"
        name="address"
        placeholder="Address"
        className="mb-2"
        value={resume.address}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="phoneNo"
        placeholder="Phone number"
        className="mb-4"
        value={resume.phoneNo}
        onChange={handleChange}
      />
      

      <h4>Experience</h4>
      <Input
        type="textarea"
        name="experience"
        placeholder="Your work experience"
        className="mb-2"
        value={resume.experience}
        onChange={handleChange}
      />

      <h4>Education</h4>
      <Input
        type="textarea"
        name="education"
        placeholder="Your educational background"
        className="mb-2"
        value={resume.education}
        onChange={handleChange}
      />

      <h4>Project</h4>
      <Input
        type="textarea"
        name="project"
        placeholder="Your projects"
        className="mb-2"
        value={resume.project}
        onChange={handleChange}
      />

      <h4>Skills</h4>
      <Input
        type="textarea"
        name="skills"
        placeholder="List your skills"
        className="mb-2"
        value={resume.skills}
        onChange={handleChange}
      />

      <h4>Hobbies</h4>
      <Input
        type="textarea"
        name="hobbies"
        placeholder="Your hobbies"
        className="mb-4"
        value={resume.hobbies}
        onChange={handleChange}
      />

      <div className="text-center">
        <Button color="primary" className="me-2" onClick={save}>
          Save
        </Button>
        <Button color="warning" className="me-2" onClick={clearPage}>
          Clear
        </Button>
        <Button color="info" onClick={Download}>
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

export default ResumeBuilder;
