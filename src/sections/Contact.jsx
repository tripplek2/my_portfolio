const email = "kibetkelvin222@gmail.com";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="section-kicker">Get in touch</p>
      <h2 id="contact-title">Let’s connect.</h2>

      <p>
        For opportunities, collaborations, or conversations about software and
        agriculture, feel free to reach out.
      </p>

      <a className="contact-email" href={`mailto:${email}`}>
        {email}
      </a>

      <div className="contact-links">
        <a
          href="https://github.com/tripplek2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kelvinkorir/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}