// Home.jsx
import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="hero-section">
          <Hero />
        </div>
        <div className="action-section">
          <h3>Explore My Work</h3>
          <p>Discover my latest projects and professional experience in software engineering and AI/ML.</p>
          <a href="/projects" className="action-btn projects-btn">
            View Projects
          </a>
          <a href="/experience" className="action-btn experience-btn">
            View Experience
          </a>
        </div>
      </div>
    </div>
  );
}
