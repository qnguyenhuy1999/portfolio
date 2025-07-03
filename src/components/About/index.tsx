"use client";

import { ENVIRONMENT_VARIABLES } from "@constants/config";
import {
  CircleCheck,
  Clock9,
  Earth,
  Globe,
  Mail,
  MapPinCheckInside,
  MessageCircleCode,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "JavaScript",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="about-heading"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto] gap-6 lg:gap-10">
          <motion.div
            className="p-6 sm:p-8 rounded-2xl card-background hover-lift"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="main-intro">
                <motion.p
                  className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  A passionate{" "}
                  <span className="font-semibold text-secondary">
                    Full Stack Developer
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-green-300">4+ years</span>{" "}
                  of experience crafting web application experiences that users
                  love.
                </motion.p>

                <hr className="my-4 text-gray-50" />

                <motion.p
                  className="mb-4 text-sm sm:text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I specialize in building scalable web and mobile applications
                  using React, Next.js, TypeScript, and modern development
                  technologies. I thrive on turning complex problems into
                  elegant solutions that users love.
                </motion.p>
                <motion.p
                  className="mb-6 text-sm sm:text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Beyond work, I love exploring emerging technologies,
                  contributing to open-source projects, and mentoring aspiring
                  developers. I believe in continuous learning and staying at
                  the forefront of technological innovation.
                </motion.p>
              </div>

              <hr className="my-4 text-gray-50" />

              <motion.h4
                className="mb-4 font-semibold text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                id="core-technologies"
              >
                Core Technologies
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="chip text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.h4
                className="my-4 font-semibold text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                id="soft-skills"
              >
                Soft Skills
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="chip text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-10">
            <motion.div
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/30 to-pink-950/30 backdrop-blur-sm border-gray-700/40 shadow-xl hover-lift"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                className="mb-4 font-semibold flex gap-2 items-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MessageCircleCode
                  size={20}
                  className="text-purple-500 flex-shrink-0 bounce-gentle"
                />{" "}
                Let&apos;s Connect
              </motion.h4>
              <ul className="flex flex-col gap-4 sm:gap-5">
                {[
                  {
                    icon: Mail,
                    text: ENVIRONMENT_VARIABLES.EMAIL,
                    link: `mailto:${ENVIRONMENT_VARIABLES.EMAIL}`,
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    icon: Globe,
                    text: "Website",
                    link: ENVIRONMENT_VARIABLES.PUBLIC_DOMAIN,
                    gradient: "from-cyan-500 to-blue-500",
                  },
                  {
                    icon: MapPinCheckInside,
                    text: "Ho Chi Minh city, Viet Nam",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-sm sm:text-base"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon
                      size={20}
                      className={`p-1 bg-gradient-to-r ${item.gradient} rounded-md flex-shrink-0`}
                    />{" "}
                    <span className="break-all">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 rounded-2xl card-background hover-lift"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                className="mb-4 font-semibold flex gap-2 items-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Rocket
                  size={20}
                  className="text-green-500 flex-shrink-0 bounce-gentle"
                />{" "}
                Available for Hire
              </motion.h4>
              <ul className="flex flex-col gap-4 sm:gap-5">
                {[
                  {
                    icon: CircleCheck,
                    text: "Open to New Opportunities",
                    color: "text-green-500",
                  },
                  {
                    icon: Earth,
                    text: "Acceptance to freelance job",
                    color: "text-cyan-600",
                  },
                  {
                    icon: Clock9,
                    text: "Remote & On-site Available",
                    color: "text-blue-500",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-sm sm:text-base"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon
                      size={20}
                      className={`${item.color} flex-shrink-0`}
                    />{" "}
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
