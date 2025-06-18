import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>
          Hello, I'm <span className="name-highlight">Aitzaz</span>
        </h1>
        <p className="subtitle">
          I am a student at Cornell University majoring in Computer Science and
          Mathematics, with a minor in Physics.
        </p>
        <p className="description">
          I'm passionate about <strong>machine learning, artificial intelligence, deep learning, and software engineering</strong>. I enjoy modeling real-world
          processes through simulations and building useful tools with code.
        </p>

        <div className="hero-contact">
          <h4>Let's Connect</h4>
          <div className="hero-contact-links">
            <a href="mailto:ams845@cornell.edu" className="hero-contact-link">
              <span className="contact-icon">✉️</span>
              Email
            </a>
            <a href="https://linkedin.com/in/aitzaz-munir-shaikh" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
              <span className="contact-icon">💼</span>
              LinkedIn
            </a>
            <a href="https://github.com/aitzaz-web" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
              <span className="contact-icon">🚀</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
