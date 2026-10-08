import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <p className="section-kicker">Skills &amp; tools</p>
      <h2 id="skills-title">My toolkit</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id}>
            <h3>{group.title}</h3>

            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}