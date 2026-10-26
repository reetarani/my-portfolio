
import { experience } from "../../data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <div>
            <span className="experience-eyebrow">MY JOURNEY</span>
            <h2>Work Experience</h2>
          </div>

          <a
            href="/resume.pdf"
            className="experience-resume-btn"
            download
          >
            View Full Resume
          </a>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-period">
                <span className="experience-dot" />
                <span>{item.period}</span>
              </div>

              <div className="experience-details">
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>

              <ul className="experience-responsibilities">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
