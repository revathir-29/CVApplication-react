export default function CVEducationSection({ educationArray }) {
    return (
      <div className="cv-education-container">
        <h2 className="section-header">EDUCATION</h2>
        <div>
          {educationArray.map((education) => {
            return (
              <div key={education.id}>
                <h4>
                  {education.degree}, {education.school}{" "}
                </h4>
                <p>{education.location}</p>
                <p>{education.startDate + " - " + education.endDate} </p>
                <p>{education.grade}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }