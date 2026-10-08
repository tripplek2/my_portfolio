export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <img
          className="project-card__image"
          src={project.image}
          alt={project.imageAlt || `${project.title} preview`}
          loading="lazy"
        />
      ) : (
        <div className="project-card__image-placeholder" aria-hidden="true">
          Project preview
        </div>
      )}

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>

        <div className="project-card__heading">
          <h3>{project.title}</h3>
          {project.status && (
            <span className="project-card__status">{project.status}</span>
          )}
        </div>

        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="project-card__links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}