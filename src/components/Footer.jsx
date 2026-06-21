import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© {new Date().getFullYear()} Aitzaz Munir Shaikh</p>
      <div className="footer-links">
        <a href="mailto:ams845@cornell.edu">Email</a>
        <span className="footer-divider">·</span>
        <a href="https://linkedin.com/in/aitzaz-munir-shaikh" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span className="footer-divider">·</span>
        <a href="https://github.com/aitzaz-web" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
