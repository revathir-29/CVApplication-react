
export default function CVWorkSection({ workArray }) {
    return (
      <div className="cv-work-container">
        <h2 className="section-header">WORK EXPERIENCE</h2>
        <div>
          {workArray.map((work) => {
            return (
              <div key={work.id}>
                <h4>
                  {work.position}, {work.company}
                </h4>
                <p>{work.location}</p>
                <p>
                  {work.startDate} - {work.endDate}
                </p>
                <p>
                  <pre>{work.description}</pre>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  