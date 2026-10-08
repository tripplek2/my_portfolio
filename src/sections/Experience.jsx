import { education, experience } from "../data/experience.js";

function TimelineColumn({ title, items }) {
  return (
    <div className="timeline-column">
      <h3>{title}</h3>

      <ol className="timeline-list">
        {items.map((item) => {
          const heading = item.role || item.qualification;
          const organization = item.organization || item.institution;
          const description = item.description || item.details;

          return (
            <li className="timeline-item" key={item.id}>
              <div className="timeline-item-heading">
                <h4>{heading}</h4>
                <span>{item.period}</span>
              </div>

              <p className="timeline-organization">{organization}</p>

              {description && (
                <p className="timeline-description">{description}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <p className="section-kicker">Background</p>
      <h2 id="experience-title">Experience &amp; education</h2>

      <div className="experience-grid">
        <TimelineColumn title="Experience" items={experience} />
        <TimelineColumn title="Education" items={education} />
      </div>
    </section>
  );
}