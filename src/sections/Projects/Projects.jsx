
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div>
            <span className="projects-eyebrow">FEATURED PROJECTS</span>
            <h2>Some of My Recent Work</h2>
          </div>

          <a href="#projects" className="projects-view-all">
            View All Projects
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a
                className="project-image-wrap"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} website`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-image"
                  loading="lazy"
                />
              </a>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.demo}
                    className="project-btn project-btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={project.details}
                    className="project-btn project-btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
