import "./Hero.css";

const interests = [
  "Agentic Systems",
  "High-Performance Computing",
  "Scalable Systems",
];

const skillGroups = [
  {
    label: "Languages",
    items: "Java, Python, Julia, OCaml, JavaScript, TypeScript, Go, SQL, Swift, MATLAB",
  },
  {
    label: "Frameworks",
    items: "React, Next.js, Flask, Node.js, TensorFlow, PyTorch, JAX, NumPy, Tailwind CSS",
  },
  {
    label: "AI / ML",
    items: "OpenAI API, RAG, Pinecone, Core ML, Scikit-Learn",
  },
  {
    label: "Infrastructure",
    items: "AWS, Docker, Kafka, Redis, PostgreSQL, Firebase, Stripe, Vercel",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Software Engineer · Cornell University</p>
        <h1>
          Hi, I&apos;m <span className="name-highlight">Aitzaz</span>
        </h1>
        <p className="subtitle">
          Computer Science &amp; Mathematics · Physics Minor
        </p>
        <p className="description">
          I build production-ready systems at the intersection of AI and infrastructure—from
          agentic tools and distributed pipelines to research-grade simulators and shipped products.
        </p>

        <div className="interest-tags">
          {interests.map((interest) => (
            <span key={interest} className="interest-tag">
              {interest}
            </span>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <span className="skill-label">{group.label}</span>
              <span className="skill-items">{group.items}</span>
            </div>
          ))}
        </div>

        <div className="hero-contact">
          <div className="hero-contact-links">
            <a href="mailto:ams845@cornell.edu" className="hero-contact-link">
              Email
            </a>
            <a
              href="https://linkedin.com/in/aitzaz-munir-shaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aitzaz-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
