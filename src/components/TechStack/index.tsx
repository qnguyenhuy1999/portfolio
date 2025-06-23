"use client";

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
    <section id="tech-stack" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          Technology Stack
        </h2>
        <p className="mb-10 text-lg font-semibold text-center">
          Technologies I use to bring ideas to life
        </p>
        <div className="flex mb-8 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full ${
                active === cat ? "bg-blue-600 text-white" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="mb-3 text-lg font-bold capitalize">{active}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center px-2 py-4 shadow rounded-2xl card-background"
            >
              <h3 className="mb-1 font-semibold">{item.name}</h3>
              <p className="text-sm">{item.level}</p>
              <p className="text-sm">{item.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
