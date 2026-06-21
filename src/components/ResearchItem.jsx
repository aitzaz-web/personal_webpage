export default function ResearchItem({ item }) {
  return (
    <article className="research-item">
      <p className="research-lab">{item.lab}</p>
      <h3>{item.title}</h3>
      {item.paperTitle && <h4 className="research-paper">{item.paperTitle}</h4>}
      <p className="research-dates">
        <em>{item.dates}</em>
      </p>

      {item.links.length > 0 && (
        <div className="card-links">
          {item.links.map((link) => (
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

      <p className="research-description">{item.description}</p>
      <p className="tools">{item.tools}</p>
    </article>
  );
}
