export default function ProjectCard({ project }) {
  const displayTitle = project.subtitle
    ? `${project.title} — ${project.subtitle}`
    : project.title;

  return (
    <article className="project-card">
      <div className="project-card-header">
        {project.category && <span className="project-category">{project.category}</span>}
        <h3>{displayTitle}</h3>
        {project.dates && (
          <p className="project-dates">
            <em>{project.dates}</em>
          </p>
        )}
      </div>

      {project.links.length > 0 && (
        <div className="card-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <p className="project-description">{project.description}</p>
      <p className="tools">{project.tools}</p>
    </article>
  );
}
