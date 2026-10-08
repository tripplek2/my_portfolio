import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <p className="section-kicker">Selected work</p>
        <h2 id="projects-title">Projects &amp; experiments</h2>
        <p className="section-intro">
          A growing collection of practical software projects. I’ll add to it
          as I build and learn.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}