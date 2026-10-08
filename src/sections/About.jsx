export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <p className="section-kicker">About me</p>

      <h2 id="about-title">
        I bring a hands-on perspective to building software.
      </h2>

      <div className="about-layout">
        <p>
          I’m focused on full-stack development, building web applications and
          backend systems with React, Python, Flask, and SQL.
        </p>

        <p>
          Before focusing on software, I studied horticultural production and
          worked in rose and greenhouse operations. That experience shapes how
          I approach practical problems and the digital tools built to solve
          them.
        </p>
      </div>
    </section>
  );
}