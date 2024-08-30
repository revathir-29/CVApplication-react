import "../styles/CVHeaderSection.css";

export default function CVHeaderSection({ personalInfo }) {
  return (
    <div className="cv-header-container">
      <h1 className="header-name">{personalInfo.name}</h1>
      <div className="subsection">
        <div className="email">Email: {personalInfo.email}</div>
        <div className="phone-number">Ph No: {personalInfo.phoneNumber}</div>
        <div className="location">Loc: {personalInfo.location}</div>
      </div>
    </div>
  );
}