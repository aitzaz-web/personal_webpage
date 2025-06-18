import "./Sections.css";

export default function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Writing Pilot AI <a href="https://writingpilot.ai" target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px', fontSize: 'small'}}>Website</a></h3>
          <p>
            Collaborating with a 4-member team to build a browser extension that leverages AI to accelerate and enhance writing across the web. Writing Pilot AI provides intelligent, context-aware suggestions, adapts to your unique style, and integrates seamlessly into your browser to save time and boost productivity.
          </p>
          <p className="tools">Tools: AI/ML, Browser Extension, JavaScript, React.js</p>
        </div>

        <div className="project-card">
          <h3>GPal (Smart Chrome Extension for Google Calendar)
            <a href="https://www.youtube.com/watch?v=0gKXgGBN6tM" target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px', fontSize: 'small'}}>
              Demo
            </a>
            <span style={{marginLeft: '5px', fontSize: 'small'}}>| GitHub Link unavailable due to user privacy</span>
          </h3>
          <p>
            Built a monetized Google Chrome extension that parses text using carefully engineered AI prompts and adds events to Google Calendar in one click, saving users 30+ seconds per event and streamlining productivity.
          </p>
          <p className="tools">
            Tools: JavaScript, Node.js, Express, Chrome Extension API, Google Calendar API, OpenAI API, Stripe
          </p>
        </div>

        <div className="project-card">
          <h3>RapidRho</h3>
          <p>
            Building a full-stack ML pipeline that trains a neural network to recover latent asset correlation with 90%+ accuracy, replacing slow numerical inversion with fast, real-time prediction for pricing and risk workflows.
          </p>
          <p className="tools">
            Tools: Python, PyTorch, NumPy, Pandas, Flask, Firebase, React.js
          </p>
          <p className="project-dates"><em>May 2025 - Present</em></p>
        </div>

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
          <h3>Expense Tracker</h3>
          <p>
            An application that tracks users' expenses with SwiftUI. Currently
            implementing budget optimization concepts using Lagrange
            multipliers.
          </p>
          <p className="tools">Tools: SwiftUI</p>
        </div>
      </div>
    </section>
  );
}
