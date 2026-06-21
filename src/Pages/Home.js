import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="hero-section">
          <Hero />
        </div>
        <aside className="action-section">
          <p className="action-eyebrow">Explore</p>
          <h3>Work &amp; Writing</h3>
          <p>
            Systems, startups, and experiments across agentic AI, HPC, and scalable infrastructure.
          </p>
          <div className="action-buttons">
            <a href="/projects" className="action-btn projects-btn">
              View Projects
              <span className="action-btn-arrow">→</span>
            </a>
            <a href="/research" className="action-btn research-btn">
              View Research
              <span className="action-btn-arrow">→</span>
            </a>
            <a href="/blog" className="action-btn blog-btn">
              View Blog
              <span className="action-btn-arrow">→</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
