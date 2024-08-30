import Button from "./Button.jsx";
import "../styles/EducationForm.css";

export default function EducationForm({
  education,
  educationArray,
  handleFieldChange,
  handleAddEducation,
  handleOnDelete,
}) {
  return (
    <div className="form-container">
      <h2 className="form-header">Education</h2>
      <div>
        {educationArray.map((education) => {
          return (
            <div className="prev" key={education.id}>
              <p>
                {education.degree}, {education.school}
              </p>

              <Button
                textColor="black"
                backgroundColor="	#ec7063 "
                text="Delete"
                onClick={() => handleOnDelete(education.id)}
              />
            </div>
          );
        })}
      </div>
      <form>
        <label htmlFor="name">Degree Name*</label>
        <input
          type="text"
          placeholder="Bachelor of..."
          onChange={handleFieldChange}
          name="degree"
          value={education.degree}
          required
        />
        <label htmlFor="school">Institute*</label>
        <input
          type="text"
          placeholder="University of..."
          onChange={handleFieldChange}
          name="school"
          value={education.school}
          required
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="City , Country"
          onChange={handleFieldChange}
          name="location"
          value={education.location}
        />
        <label htmlFor="startDate">Start Date*</label>
        <input
          type="date"
          placeholder="dd/mm/yy"
          onChange={handleFieldChange}
          name="startDate"
          value={education.startDate}
          required
        />
        <label htmlFor="endDate">End Date*</label>
        <input
          type="date"
          placeholder="dd/mm/yy."
          onChange={handleFieldChange}
          name="endDate"
          value={education.endDate}
          required
        />
        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          placeholder="eg: 90.6"
          onChange={handleFieldChange}
          name="grade"
          value={education.grade}
        />
        <div className="buttons-container">
          <Button
            text="Save"
            backgroundColor="#85c1e9"
            textColor="black"
            onClick={handleAddEducation}
          />
        </div>
      </form>
    </div>
  );
}