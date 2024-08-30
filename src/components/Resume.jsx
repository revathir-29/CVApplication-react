import CVHeaderSection from "./CVHeaderSection";
import CVEducationSection from "./CVEducationSection";
import CVWorkSection from "./CVWorkSection";
import "../styles/Resume.css";

export default function Resume({ personalInfo, educationArray, workArray }) {
  return (
    <div className="resume-container">
      <CVHeaderSection personalInfo={personalInfo} />
      <div className="cv-content">
        <CVEducationSection educationArray={educationArray} />
        <CVWorkSection workArray={workArray} />
      </div>
    </div>
  );
}