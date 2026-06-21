import "./Sections.css";
import PageHeader from "./PageHeader";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        description="Production systems, research prototypes, and products spanning agentic AI, distributed infrastructure, and full-stack development."
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
