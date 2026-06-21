const projects = [
  {
    title: "Carolyn",
    dates: "Technical Co-founder · Ithaca, NY · March 2026 – Present",
    category: "Startup",
    description:
      "Co-founded an AI personal stylist and social fashion platform with size-aware virtual try-on and custom fit calibration on Google Cloud Vertex AI. Reached 450 users and 100K cross-platform viewers within five days of launch.",
    tools: "Google Cloud Vertex AI, Swift, React, AI/ML, Virtual Try-On",
    links: [
      { label: "Website", href: "http://meetcarolyn.com" },
      { label: "App Store", href: "https://apps.apple.com/us/app/carolyn/id6777786510" },
    ],
  },
  {
    title: "GPal",
    subtitle: "Smart Google Calendar Extension",
    category: "Product",
    description:
      "Shipped a monetized Chrome extension that parses highlighted text with engineered AI prompts and adds events to Google Calendar in one click—saving users 30+ seconds per event across 100+ active users.",
    tools: "JavaScript, Node.js, Express, Chrome APIs, Google Calendar API, OpenAI API, Stripe",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=0gKXgGBN6tM" },
      { label: "GitHub", href: "https://github.com/aitzaz-web/gcal_chrome_extension" },
    ],
  },
  {
    title: "RISC-V AI Kernel Simulator",
    category: "Systems",
    description:
      "Built a RISC-V CPU simulator with in-order, pipelined, and out-of-order execution—modeling register renaming, issue queues, functional units, and L1/L2 caches to analyze IPC and memory stalls on AI-kernel traces.",
    tools: "C++, Python, CMake, Matplotlib",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/riscv-ai-kernel-sim" }],
  },
  {
    title: "QuantGrid",
    subtitle: "Distributed Backtesting Platform",
    category: "Systems",
    description:
      "Engineered a distributed backtesting platform that schedules large-scale parallel trading strategy sweeps across Ray workers, with FastAPI experiment APIs, PostgreSQL persistence, and Dockerized deployment.",
    tools: "Python, FastAPI, Ray, PostgreSQL, Docker",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/QuantGrid" }],
  },
  {
    title: "Distributed Event Processing System",
    category: "Systems",
    description:
      "Scalable event ingestion pipeline in Go with Kafka, Redis, and Postgres. Idempotent consumers, horizontal scaling, production-grade logging, rate limiting, and containerized deployment.",
    tools: "Go, Kafka, Redis, PostgreSQL, Docker",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/Distributed_Event_Processing_System" }],
  },
  {
    title: "FileSense",
    subtitle: "AI Storage Optimizer for macOS",
    category: "Product",
    description:
      "Privacy-preserving macOS app that analyzes file metadata, duplicate versions, caches, and stale downloads to recommend safe, reversible storage cleanup using on-device AI.",
    tools: "Python, Electron, SQLite, OpenAI API",
    links: [
      { label: "Website", href: "https://filesense.ai" },
      { label: "GitHub", href: "https://github.com/aitzaz-web/filesense.ai" },
    ],
  },
  {
    title: "Aegis Mesh",
    subtitle: "Zero-Trust Identity System",
    category: "Systems",
    description:
      "Zero-trust mTLS PKI identity system for cloud microservices—custom Root/Intermediate CA, RA API, certificate rotation agents, and CRL-based revocation across C++ and Java services.",
    tools: "Go, C++, Java, OpenSSL, Docker",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/Zero-Trust-Identity-System" }],
  },
  {
    title: "RapidRho",
    dates: "May 2025 – Present",
    category: "ML / Finance",
    description:
      "Real-time ML pipeline recovering latent asset correlations with 90%+ accuracy, replacing expensive numerical inversion in pricing workflows. Full-stack system spanning training, serving, and financial data integration.",
    tools: "Python, PyTorch, NumPy, Pandas, Flask, Firebase, React, TypeScript",
    links: [],
  },
  {
    title: "Writing Pilot AI",
    category: "Product",
    description:
      "AI-powered Chrome extension providing context-aware writing suggestions that adapt to user style, built for performance and cross-browser compatibility.",
    tools: "JavaScript, React, Browser Extensions, NLP",
    links: [{ label: "Website", href: "https://writingpilot.ai" }],
  },
  {
    title: "AI Customer Support System",
    category: "ML / AI",
    description:
      "RAG-based customer support system with vector search and context-aware retrieval. Scalable serving infrastructure with error handling and monitoring for enterprise use.",
    tools: "Next.js, React, AWS, OpenAI API, Pinecone, RAG",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web" }],
  },
  {
    title: "Cornell PSA Portal",
    subtitle: "Students & Alumni Networking",
    category: "Full-Stack",
    description:
      "Networking platform for 500+ Pakistani students and alumni at Cornell—event management, member directories, and community engagement tools.",
    tools: "React, Tailwind CSS, Flask, Firebase",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/psa-portal" }],
  },
  {
    title: "Flaky Test Analysis",
    category: "ML / Tools",
    description:
      "Static analysis tool for ML test suites using AST-based inspection to detect approximate assertions and non-deterministic patterns in large codebases.",
    tools: "Python, TensorFlow, AST Analysis",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/flaky_test_exp" }],
  },
  {
    title: "OCryptor",
    category: "Systems",
    description:
      "Command-line encryption tool supporting RSA, AES, SHA-256, ECC, and Blowfish—built in OCaml with secure key management and comprehensive unit testing.",
    tools: "OCaml, Dune, OUnit, Cryptography",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/OCryptor" }],
  },
  {
    title: "Pantry Tracker",
    category: "Full-Stack",
    description:
      "AI-powered pantry tracker with inventory management and usage suggestions. Clean UI with real-time updates to help reduce food waste.",
    tools: "Next.js, Firebase, Vercel, OpenAI API",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/pantry_tracker" }],
  },
  {
    title: "ChaiOrSleep",
    category: "Mobile",
    description:
      "iOS app using on-device ML to recommend chai intake based on sleep cycles—lightweight models with an approachable everyday UX.",
    tools: "SwiftUI, Core ML, Create ML",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/ChaiOrSleep" }],
  },
  {
    title: "WeSplit",
    category: "Mobile",
    description:
      "iOS bill-splitting app with an intuitive interface for tracking shared expenses, built with clean SwiftUI architecture.",
    tools: "SwiftUI",
    links: [{ label: "GitHub", href: "https://github.com/aitzaz-web/WeSplit" }],
  },
];

export default projects;
