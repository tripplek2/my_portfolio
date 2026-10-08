export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <a className="footer-brand" href="#home">
          Kelvin Korir
        </a>

        <p>Software developer · Kenya</p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>

        <small>© {new Date().getFullYear()} Kelvin Korir</small>
      </div>
    </footer>
  );
}