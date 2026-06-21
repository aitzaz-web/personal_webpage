import "./PageHeader.css";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header" data-aos="fade-up">
      {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}
