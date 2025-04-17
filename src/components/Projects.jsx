import "./Sections.css";

export default function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Cornell PSA Students & Alumni Networking Portal</h3>
          <p>
            Building a centralized web platform for 500+ Pakistani students and
            alumni at Cornell, aiming to boost community engagement through
            event listings, networking tools, and member directories.
          </p>
          <p className="tools">
            Tools: React.js, Tailwind CSS, Flask, Firebase
          </p>
        </div>

        <div className="project-card">
          <h3>Flaky Test Analysis and Instrumentation</h3>
          <p>
            Detected approximate assertions in ML test suites using extracted
            assertions through AST-based static analysis.
          </p>
          <p className="tools">Tools: Python, TensorFlow</p>
        </div>

        <div className="project-card">
          <h3>OCryptor</h3>
          <p>
            Collaborated with a team to develop a file encryption tool with a
            friendly user interface, supporting algorithms such as RSA, AES,
            SHA-256, EC2, and Blowfish.
          </p>
          <p className="tools">Tools: OCaml, Dune, OUnit</p>
        </div>

        <div className="project-card">
          <h3>AI Customer Support</h3>
          <p>
            Collaborated with a 4-membered team to code an AI customer support
            system.
          </p>
          <p className="tools">
            Tools: Next.js, React, AWS, OpenAI, Pinecone, RAG
          </p>
        </div>

        <div className="project-card">
          <h3>Pantry Tracker</h3>
          <p>
            A project to manage pantry items, built with JavaScript, Python, and
            HTML.
          </p>
          <p className="tools">
            Tools: Next.js, React, OpenAI, Firebase, Vercel
          </p>
        </div>

        <div className="project-card">
          <h3>ChaiOrSleep</h3>
          <p>
            An application that informs users of how much chai they should drink
            based on their sleep cycles using SwiftUI, Create ML, and Core ML.
          </p>
          <p className="tools">Tools: SwiftUI, Create ML, Core ML</p>
        </div>

        <div className="project-card">
          <h3>Rock, Paper, Scissors</h3>
          <p>Traditional RPS game built with JavaScript, HTML, and CSS.</p>
          <p className="tools">Tools: JavaScript, HTML, CSS</p>
        </div>

        <div className="project-card">
          <h3>Guess The Flag</h3>
          <p>A game where users guess given flags, built with SwiftUI.</p>
          <p className="tools">Tools: SwiftUI</p>
        </div>

        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>
            An application that tracks users' expenses with SwiftUI. Currently
            implementing budget optimization concepts using Lagrange
            multipliers.
          </p>
          <p className="tools">Tools: SwiftUI</p>
        </div>

        <div className="project-card">
          <h3>Etch-A-Sketch</h3>
          <p>
            A simple sketching game using JavaScript, HTML, CSS, and Flexbox.
          </p>
          <p className="tools">Tools: JavaScript, HTML, CSS, Flexbox</p>
        </div>
      </div>
    </section>
  );
}
