"use client";

import { motion } from "motion/react";

const certifications = [
  {
    title: "Microsoft Azure AI Engineer Associate",
    provider: "Microsoft",
    platform: "Microsoft Azure",
    issued: "November 2024",
    skills: ["AI"],
    link: "https://coursera.org/verify/P67DLWJP2GL7",
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    platform: "Microsoft Azure",
    issued: "November 2024",
    skills: ["AI"],
    link: "https://coursera.org/verify/P67DLWJP2GL7",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="mb-8 sm:mb-10 text-base sm:text-lg font-semibold text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional certifications and credentials that validate my expertise
          in modern technologies and development practices.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="p-6 sm:p-8 shadow rounded-2xl card-background hover-lift"
              initial={{ opacity: 0, y: 50, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + idx * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <motion.h3
                className="mb-2 text-lg sm:text-xl font-semibold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p
                className="mb-1 text-sm sm:text-base text-gray-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
              >
                {cert.provider} &mdash; {cert.platform}
              </motion.p>
              <motion.p
                className="mb-3 text-sm sm:text-base text-gray-400"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.2 }}
              >
                Issued: {cert.issued}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
              >
                {cert.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="chip text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.9 + idx * 0.2 + skillIndex * 0.1,
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
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-secondary hover:text-blue-300 hover:underline transition-colors duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 + idx * 0.2 }}
                whileHover={{
                  x: 5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                View Credential →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
