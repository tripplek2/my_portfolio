export default function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      aria-labelledby="hero-title"
    >
      <p className="hero-kicker">
        Software developer · Full-stack · Agtech
      </p>

      <p className="hero-name">Hi, I’m Kelvin Korir.</p>

      <h1 id="hero-title">Building useful software for the real world.</h1>

      <p className="hero-description">
        I build web applications and backend systems with Python, Flask, React,
        and SQL. My background in horticultural production gives me a practical
        perspective on the problems technology can help solve.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my projects
        </a>
        <a className="button button-secondary" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}