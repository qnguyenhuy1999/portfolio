"use client";

import { motion } from "motion/react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Silicon Stack",
    date: "May 2025 — Present",
    description: [
      "Project: Carexpert — Automotive Marketplace Platform serving ~100,000 users, focused on scalable backend architecture and high-performance frontend experiences.",
    ],
    achievements: [
      "Contributed to a scalable NestJS backend within a monorepo-based multi-service system, enabling modular service development with shared configuration standards",
      "Optimized PostgreSQL performance for high-traffic marketplace search by implementing indexing strategies and connection pooling, improving throughput and response consistency under load",
      "Developed custom NestJS interceptors and middleware for caching, validation, and cross-cutting concerns, improving API performance and system stability",
      "Enhanced frontend performance using Next.js SSR and optimized data-fetching, improving TTFB and accelerating initial load for search and listing pages",
      "Refactored client-side state management to handle large automotive datasets while minimizing unnecessary re-renders and preserving UI responsiveness",
      "Contributed to architectural discussions within an 8-member Agile team, supporting long-term maintainability and performance optimization",
    ],
    skills: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Monorepo",
      "Microservices",
    ],
  },
  {
    title: "Software Engineer",
    company: "DXC Technology",
    date: "June 2022 — May 2025",
    description: [
      "Project: OCBC Bank Teller System — enterprise banking modules built on a scalable micro-frontend architecture for transaction-heavy workflows.",
    ],
    achievements: [
      "Designed and implemented a scalable micro-frontend architecture using React.js and Redux to support modular deployment and long-term maintainability of enterprise banking teller modules",
      "Built reusable, high-performance component libraries and optimized state management patterns to improve UI consistency and responsiveness across transaction-heavy workflows",
      "Conducted deep performance profiling on legacy banking modules, resolving rendering bottlenecks and improving stability during long-running teller sessions",
      "Engineered a centralized Redux store architecture to manage complex transactional states across distributed modules, ensuring predictable state transitions",
      "Collaborated with Singapore-based stakeholders to align UI solutions with enterprise banking standards and compliance requirements",
      "Mentored junior engineers on modern React practices and structured code review processes to improve overall frontend code quality",
    ],
    skills: [
      "React.js",
      "Redux",
      "TypeScript",
      "Micro Frontend",
      "Jest",
    ],
  },
  {
    title: "Software Developer",
    company: "CARPTECH CORP",
    date: "June 2020 — June 2022",
    description: [
      "Projects: ACB Bank Vendor Management System, CII D-INVEST Investment Platform, and Qualee Technology HR Management Platform — full-stack delivery across banking, fintech, and HR domains.",
    ],
    achievements: [
      "Defined the initial frontend architecture and integrated with a microservice-based ExpressJS backend to support scalable investment data processing for CII D-INVEST",
      "Developed high-performance financial dashboards using Next.js and TypeScript, enabling responsive cross-device investment tracking experiences",
      "Optimized client-side data fetching for complex financial projections, reducing latency and improving rendering stability",
      "Implemented ExpressJS middleware to manage secure data exchange and asynchronous transaction processing for high-volume financial workflows",
      "Built full-stack HR management features for Qualee using Next.js, Express.js, and PostgreSQL, supporting employee onboarding and engagement workflows",
      "Designed real-time chat and notification systems and improved API throughput through SQL query optimization and caching strategies",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Express.js",
      "Node.js",
      "PostgreSQL",
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
