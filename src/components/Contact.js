import "./Sections.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      <ul>
        <li>
          Email: <a href="mailto:ams845@cornell.edu">ams845@cornell.edu</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/aitzaz-munir-shaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            aitzaz-munir-shaikh
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/aitzaz-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            aitzaz-web
          </a>
        </li>
      </ul>
    </section>
  );
}
