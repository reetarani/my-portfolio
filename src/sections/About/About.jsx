
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./About.css";

const highlights = [
  "Custom WordPress theme & plugin development",
  "WooCommerce customization",
  "MERN stack web application development",
  "Performance optimization & SEO",
  "API integration and third-party services",
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-layout">
          <div className="about-image-wrap">
            <img
              src={`${import.meta.env.BASE_URL}images/about-workspace.jpg`}
              alt="Developer workspace with a laptop"
              className="about-image"
            />

          </div>

          <div className="about-main">
            <SectionHeading
              eyebrow="ABOUT ME"
              title="Turning Ideas into Powerful Web Experiences"
            />

            <p className="about-description">
              I'm a Full Stack Developer with 11+ years of experience,
              specializing in WordPress development and modern web
              technologies. I love creating clean, scalable, and
              high-performing websites and web applications that help
              businesses grow.
            </p>

            <ul className="about-highlights-list">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <span className="about-check" aria-hidden="true">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-feature">
            <div className="about-feature-star" aria-hidden="true">✦</div>
            <div className="about-feature-card">
              <span className="about-feature-icon" aria-hidden="true">☼</span>
              <h3>Clean Code</h3>
              <h3>Better Websites</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
