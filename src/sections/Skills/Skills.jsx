
import { useState } from "react";
import { skills } from "../../data/skills";
import "./Skills.css";

const categories = ["All", "Frontend", "Backend", "CMS", "Tools"];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-title-group">
            <span className="skills-eyebrow">MY SKILLS</span>
            <h2 className="skills-heading">Technologies I Work With</h2>
          </div>

          <div className="skills-filters" aria-label="Filter skills">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`skills-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <div className="skill-card" key={skill.name}>
                <SkillIcon
                  className="skill-icon"
                  style={{ color: skill.color }}
                  aria-hidden="true"
                />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
