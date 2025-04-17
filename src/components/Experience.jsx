import "./Sections.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-list">
        <div className="experience-item">
          <h3>Cornell Symbiotic Engineering and Analysis Lab</h3>
          <h4>Machine Learning Research Assistant</h4>
          <p className="experience-dates">
            <em>Aug 2024 – Present</em>
          </p>
        </div>

        <div className="experience-item">
          <h3>LifeWork</h3>
          <h4>Software Engineer Intern</h4>
          <p className="experience-dates">
            <em>Jan 2025 – Present</em>
          </p>
        </div>

        <div className="experience-item">
          <h3>Mage Data</h3>
          <h4>Software Engineer Intern</h4>
          <p className="experience-dates">
            <em>May 2024 – Aug 2024</em>
          </p>
        </div>

        <div className="experience-item">
          <h3>Systems Limited</h3>
          <h4>Software Engineering Intern</h4>
          <p className="experience-dates">
            <em>Dec 2023 – Jan 2024</em>
          </p>
        </div>
      </div>
    </section>
  );
}
