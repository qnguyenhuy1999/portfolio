const projects = [
  {
    title: "Checkersvip.com",
    subtitle: "Professional Online Checkers Platform",
    category: "Web Application",
    timeframe: "6 months",
    industry: "Gaming Industry",
    repo: "https://github.com/mramazan1/checkersvip",
    demo: "https://checkersvip.com",
    features: [
      "Real-time multiplayer gameplay with WebSocket technology",
      "Advanced drag-and-drop game mechanics using DnDKit",
      "Live chat system with emoji support and moderation",
      "Player ranking and tournament management system",
      "Spectator mode with real-time game observation",
      "Mobile-responsive design for cross-platform play",
      "Game replay and analysis tools",
      "Social features including friend lists and challenges",
    ],
    deliverables: [
      "Fully functional web application deployed on production",
      "Real-time multiplayer game engine",
      "User authentication and profile management",
      "Admin dashboard for game moderation",
      "Tournament management system",
      "Mobile-optimized responsive interface",
      "Integration with payment systems for premium features",
    ],
    tech: [
      "Next.js",
      "NextUI",
      "Tailwind CSS",
      "DnDKit",
      "Fastify",
      "Redis",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "JWT Authentication",
      "Stripe API",
    ],
  },
  {
    title: "AskRudy.ai",
    subtitle: "AI-Powered Document Intelligence Platform",
    category: "AI Platform",
    timeframe: "8 months",
    domain: "EdTech & Enterprise",
    repo: "https://github.com/mramazan1/askrudy",
    demo: "https://askrudy.ai",
    features: [
      "RAG (Retrieval-Augmented Generation) architecture for accurate responses",
      "Multi-format document support (PDF, DOCX, TXT, images)",
      "OpenAI GPT-4 Vision integration for screenshot analysis",
      "Real-time multilingual translation (50+ languages)",
      "Intelligent document chunking and vector embeddings",
      "Conversational AI with context-aware responses",
      "Document highlighting and annotation tools",
      "Export capabilities for translations and summaries",
      "Collaborative workspace for team document analysis",
    ],
    deliverables: [
      "Production-ready AI chatbot platform",
      "Document processing pipeline with OCR capabilities",
      "Multi-language translation engine",
      "User dashboard with document management",
      "Subscription management with Stripe integration",
      "API documentation and integration guides",
      "Mobile-responsive Progressive Web App",
      "Analytics dashboard for usage tracking",
    ],
    tech: [
      "Next.js",
      "NextUI",
      "Vercel AI SDK",
      "React-PDF",
      "Firebase",
      "LangChain",
      "OpenAI GPT-4",
      "Pinecone",
      "Stripe",
      "Tesseract.js",
      "PDF.js",
      "Zustand",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text">
          Featured Projects
        </h2>
        <p className="mb-8 sm:mb-10 text-base sm:text-lg font-semibold text-center px-4">
          Discover my latest work in web development, AI integration, and
          digital innovation
        </p>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 sm:p-8 rounded-2xl card-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="mb-2 text-xl sm:text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mb-3 text-sm sm:text-base text-gray-300">
                {project.subtitle}
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-secondary">
                  {project.category}
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  {project.timeframe}
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  {project.industry || project.domain}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-sm sm:text-base text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
                >
                  View Repository →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm sm:text-base text-green-400 hover:text-green-300 hover:underline transition-colors duration-300"
                >
                  Live Demo →
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3 font-semibold text-base sm:text-lg">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                    {project.features.map((feat, i) => (
                      <li key={i} className="leading-relaxed">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-base sm:text-lg">
                    Deliverables
                  </h4>
                  <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                    {project.deliverables.map((del, i) => (
                      <li key={i} className="leading-relaxed">
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-semibold text-base sm:text-lg">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
