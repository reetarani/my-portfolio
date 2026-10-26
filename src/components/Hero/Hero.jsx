
import { FaWordpress, FaBriefcase, FaUsers } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import "./Hero.css";

const technologies = [
  "WordPress",
  "WooCommerce",
  "React.js",
  "Node.js",
  "MongoDB",
];

const stats = [
  {
    value: "11+",
    label: "Years Experience",
    icon: FaBriefcase,
    color: "#20d9cb",
  },
  {
    value: "200+",
    label: "WordPress Projects",
    icon: FaWordpress,
    color: "#20bde8",
  },
  {
    value: "20+",
    label: "Custom Themes/Plugins",
    icon: null,
    symbol: "</>",
    color: "#08d9f5",
  },
  {
    value: "20+",
    label: "Happy Clients",
    icon: FaUsers,
    color: "#20d9cb",
  },
];

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="status-dot" />
            FULL STACK WEB DEVELOPER
          </span>

          <h1>
            Hi, I'm
            <br />
            <span className="hero-name">Reetarani Samal.</span>
          </h1>

          <h2>
            WordPress Expert <span>|</span> MERN Stack Developer
          </h2>

          <p className="hero-description">
            I build high-performance websites and modern web applications,
            combining 11+ years of WordPress expertise with full-stack
            development using React, Node.js, Express, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              className="hero-btn hero-btn-primary"
              download
            >
              Download Resume <span>↓</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-outline">
              Let's Talk <span>↗</span>
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-photo-frame">
            <img
              src={`${import.meta.env.BASE_URL}/images/profile.png`}
              alt="Reetarani Samal, WordPress and MERN Stack Developer"
              className="hero-photo"
            />
            <div className="hero-photo-overlay" />
          </div>

          <div className="hero-floating-card hero-card-wordpress">
            <FaWordpress className="hero-tech-icon wordpress-icon" />
            <strong>WordPress</strong>
          </div>

          <div className="hero-floating-card hero-card-react">
            <SiReact className="hero-tech-icon react-icon" />
            <strong>React.js</strong>
          </div>

          <div className="hero-floating-card hero-card-node">
            <SiNodedotjs className="hero-tech-icon node-icon" />
            <strong>Node.js</strong>
          </div>

          <div className="hero-floating-card hero-card-mongodb">
            <SiMongodb className="hero-tech-icon mongodb-icon" />
            <strong>MongoDB</strong>
          </div>

          <div className="hero-visual-glow" />
        </div>
      </div>

      <div className="hero-stats container">
        {stats.map((stat) => {
          const StatIcon = stat.icon;

          return (
            <div className="hero-stat-card" key={stat.label}>
              <div className="hero-stat-icon">
                {StatIcon ? (
                  <StatIcon
                    style={{ color: stat.color }}
                    aria-hidden="true"
                  />
                ) : (
                  <span style={{ color: stat.color }} aria-hidden="true">
                    {stat.symbol}
                  </span>
                )}
              </div>

              <div className="hero-stat-content">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero-bottom container">
        <span>BASED IN BANGALORE, INDIA</span>
        <a href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
