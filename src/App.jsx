import "./App.css";
import uniqid from "uniqid";
import EducationForm from "./components/EducationForm.jsx";
import Header from "./components/Header.jsx";
import PersonalInformationForm from "./components/PersonalInformationForm.jsx";
import Resume from "./components/Resume.jsx";
import WorkExperienceForm from "./components/WorkExperienceForm.jsx";
//import ProjectForm from "./components/ProjectForm.jsx";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const [currentEducation, setCurrEducation] = useState({
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
    grade: "",
    id: uniqid(),
  });
  const [workExperienceArray, setWorkExperienceArray] = useState([]);
  const [currentWork, setCurrWork] = useState({
    position: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    id: uniqid(),
  });

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setCurrEducation((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleAddEducation(event) {
    event.preventDefault();
    setEducationArray([...educationArray, currentEducation]);
    setCurrEducation({
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
      grade: "",
      id: uniqid(),
    });
  }

  function handleWorkExperienceChange(event) {
    const { name, value } = event.target;
    setCurrWork((prevState) => {
      if (name === "description") {
        const lines = value.split("\n");
        const newValue = lines.join("\n");
        return { ...prevState, [name]: newValue };
      }
      return { ...prevState, [name]: value };
    });
  }

  function handleAddWorkExperience(event) {
    event.preventDefault();
    setWorkExperienceArray([...workExperienceArray, currentWork]);
    setCurrWork({
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      id: uniqid(),
    });
  }

  function handleOnDeleteEducation(id) {
    const arrayWithElementDelete = educationArray.filter(
      (education) => education.id !== id
    );
    setEducationArray(arrayWithElementDelete);
  }

  function handleOnDeleteWork(id) {
    const arrayWithElementDelete = workExperienceArray.filter(
      (work) => work.id !== id
    );
    setWorkExperienceArray(arrayWithElementDelete);
  }

  return (
    <div className="app">
      <Header className="header" />
      <div className="form">
        <PersonalInformationForm
          personalInfo={personalInfo}
          handleFieldChange={handlePersonalInfoChange}
        />
        <EducationForm
          handleFieldChange={handleEducationChange}
          education={currentEducation}
          handleAddEducation={handleAddEducation}
          educationArray={educationArray}
          handleOnDelete={handleOnDeleteEducation}
        />
        <WorkExperienceForm
          handleFieldChange={handleWorkExperienceChange}
          work={currentWork}
          workArray={workExperienceArray}
          handleAddWorkExperience={handleAddWorkExperience}
          handleOnDelete={handleOnDeleteWork}
        />
      </div>
      <div className="cv-container">
        <Resume
          personalInfo={personalInfo}
          educationArray={educationArray}
          workArray={workExperienceArray}
        />
      </div>
    </div>
  );
}