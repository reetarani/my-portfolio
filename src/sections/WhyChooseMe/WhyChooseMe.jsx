
import {
  FaCode,
  FaClock,
  FaChartBar,
  FaCommentAlt,
} from "react-icons/fa";

import "./WhyChooseMe.css";

const reasons = [
  {
    title: "Quality Development",
    description: "Clean, scalable and maintainable code.",
    icon: FaCode,
  },
  {
    title: "On-Time Delivery",
    description: "Commitment to deadlines.",
    icon: FaClock,
  },
  {
    title: "SEO & Performance",
    description: "Fast, SEO-friendly websites.",
    icon: FaChartBar,
  },
  {
    title: "Clear Communication",
    description: "Regular updates and collaboration.",
    icon: FaCommentAlt,
  },
];

function WhyChooseMe() {
  return (
    <section className="why-section" id="why-work-with-me">
      <div className="why-container">
        <span className="why-eyebrow">WHY WORK WITH ME</span>

        <div className="why-grid">
          {reasons.map((reason) => {
            const ReasonIcon = reason.icon;

            return (
              <article className="why-card" key={reason.title}>
                <div className="why-icon">
                  <ReasonIcon aria-hidden="true" />
                </div>

                <div className="why-card-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
