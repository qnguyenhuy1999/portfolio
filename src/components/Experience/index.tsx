"use client";

import { motion } from "motion/react";

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
      "Built responsive UI using ReactJS and TypeScript for ACB Bank's Vendor Management System",
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
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="mb-8 sm:mb-10 text-base sm:text-lg font-semibold text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey and the impact I&apos;ve made across different
          domains
        </motion.p>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl card-background hover-lift"
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {exp.title} - {exp.company}
              </motion.h3>
              <motion.p
                className="mb-4 font-semibold text-secondary text-sm sm:text-base"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {exp.date}
              </motion.p>

              <motion.div
                className="mb-4 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                {exp.description.map((desc, i) => (
                  <motion.p
                    key={i}
                    className="mb-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.2 + i * 0.1,
                    }}
                  >
                    {desc}
                  </motion.p>
                ))}
              </motion.div>

              <motion.h4
                className="mb-2 text-base sm:text-lg font-semibold"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                Key Achievements
              </motion.h4>
              <motion.ul
                className="mb-4 list-disc list-inside text-sm sm:text-base space-y-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              >
                {exp.achievements.map((ach, i) => (
                  <motion.li
                    key={i}
                    className="leading-relaxed"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 1.0 + index * 0.2 + i * 0.1,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {ach}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h4
                className="mb-2 text-base sm:text-lg font-semibold"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
              >
                Technologies & Skills
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="chip text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 1.3 + index * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
