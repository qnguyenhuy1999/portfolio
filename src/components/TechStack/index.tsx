"use client";

import { motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "Backend", "Frontend", "Database", "Cloud & DevOps"];
const stackItems = [
  {
    category: "Backend",
    name: "Node.js",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Backend",
    name: "NodeJS",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Backend",
    name: "ExpressJS",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Backend",
    name: "Socket.io",
    level: "Intermediate",
    years: "2 years exp",
  },
  {
    category: "Frontend",
    name: "React",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Frontend",
    name: "Next.js",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Frontend",
    name: "TypeScript",
    level: "Expert",
    years: "4 years exp",
  },
  {
    category: "Frontend",
    name: "JavaScript",
    level: "Expert",
    years: "5 years exp",
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    level: "Expert",
    years: "3 years exp",
  },
  {
    category: "Database",
    name: "PostgreSQL",
    level: "Intermediate",
    years: "3 years exp",
  },
  {
    category: "Database",
    name: "Redis",
    level: "Intermediate",
    years: "2 years exp",
  },
  {
    category: "Database",
    name: "Prisma",
    level: "Intermediate",
    years: "2 years exp",
  },
  {
    category: "Cloud & DevOps",
    name: "AWS",
    level: "Intermediate",
    years: "2 years exp",
  },
  {
    category: "Cloud & DevOps",
    name: "Firebase",
    level: "Intermediate",
    years: "2 years exp",
  },
  {
    category: "Cloud & DevOps",
    name: "Docker",
    level: "Basic",
    years: "1 years exp",
  },
  {
    category: "Cloud & DevOps",
    name: "Git",
    level: "Expert",
    years: "5 years exp",
  },
];

export default function TechStack() {
  const [active, setActive] = useState("All");
  const items =
    active === "All"
      ? stackItems
      : stackItems.filter((item) => item.category === active);

  return (
    <section id="tech-stack" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technology Stack
        </motion.h2>
        <motion.p
          className="mb-8 sm:mb-10 text-base sm:text-lg font-semibold text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies I use to bring ideas to life
        </motion.p>

        {/* Filter buttons - scrollable on mobile */}
        <motion.div
          className="flex overflow-x-auto pb-2 mb-6 sm:mb-8 gap-2 sm:gap-4 px-4 sm:px-0 scrollbar-hide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                active === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <div className="px-4 sm:px-0">
          <motion.p
            className="mb-3 text-base sm:text-lg font-bold capitalize"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={active}
          >
            {active}
          </motion.p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex flex-col items-center px-3 py-4 sm:px-4 sm:py-6 shadow rounded-2xl card-background hover-lift"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                layout
              >
                <motion.h3
                  className="mb-1 font-semibold text-sm sm:text-base text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                >
                  {item.level}
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm text-center text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  {item.years}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
