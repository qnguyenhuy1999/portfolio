const experiences = [
  {
    title: "Software Engineer",
    company: "DXC Technology",
    date: "June 2022 — Present",
    description: [
      "Delivered high-quality projects across diverse domains, including web and mobile applications, API development, and cloud integrations (AWS, GCP).",
    ],
    achievements: [
      "Developed scalable micro frontend using ReactJS and Redux for OCBC Bank Teller",
      "Led a team of 5 developers; managed task distribution and ensured project timelines",
      "Engaged in technical architecture, code reviews, unit testing (Jest), and client communication",
    ],
    skills: ["JavaScript", "ReactJS", "Redux", "Jest", "Micro Frontend"],
  },
  {
    title: "Software Engineer",
    company: "CARPTECH CORP",
    date: "June 2021 — June 2022",
    description: [
      "Spearheaded organizational transformation from paper-based manual systems to completely integrated HIMS and PACS.",
    ],
    achievements: [
      "Built responsive UI using ReactJS and TypeScript for ACB Bank’s Vendor Management System",
      "Developed investment management features for CII D-INVEST, emphasizing UI consistency and backend API integration using NextJS",
    ],
    skills: ["JavaScript", "ReactJS", "TypeScript", "NextJS"],
  },
  {
    title: "Software Engineer",
    company: "FABA TECHNOLOGY",
    date: "June 2020 — June 2021",
    description: [
      "Spearheaded organizational transformation from paper-based manual systems to completely integrated HIMS and PACS.",
    ],
    achievements: [
      "Built web apps for HR management (Qualee) using NextJS, ExpressJS, and TypeScript.",
      "Implemented real-time interactive features such as WebSockets and ensured mobile responsiveness and performance optimization.",
    ],
    skills: [
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "NextJS",
      "ExpressJS",
      "WebSockets",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          Experience
        </h2>
        <p className="mb-10 text-lg font-semibold text-center">
          My professional journey and the impact I&apos;ve made across different
          domains
        </p>

        {experiences.map((exp) => (
          <div key={exp.company} className="mb-12">
            <h3 className="text-2xl font-extrabold">
              {exp.title} - {exp.company}
            </h3>
            <p className="mb-4 font-semibold text-secondary">{exp.date}</p>
            <div className="mb-4 text-lg">
              {exp.description.map((desc, i) => (
                <p key={i} className="mb-2">
                  {desc}
                </p>
              ))}
            </div>
            <h4 className="mb-2 text-lg font-semibold">Key Achievements</h4>
            <ul className="mb-4 list-disc list-inside">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
            <h4 className="mb-2 text-lg font-semibold">
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
