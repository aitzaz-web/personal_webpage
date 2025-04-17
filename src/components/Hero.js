import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>
          Hello, I’m <span className="name-highlight">Aitzaz</span>
        </h1>
        <p className="subtitle">
          I am a student at Cornell University majoring in Computer Science and
          Mathematics, with a minor in Physics.
        </p>
        <p className="description">
          I'm passionate about <strong>Full Stack Development</strong> and{" "}
          <strong>Machine Learning</strong>. I enjoy modeling real-world
          processes through simulations and building useful tools with code.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/aitzaz-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/aitzaz-munir-shaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |<a href="mailto:ams845@cornell.edu">Email</a>
        </div>
      </div>
    </section>
  );
}
