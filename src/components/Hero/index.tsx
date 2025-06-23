"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/qnguyenhuy1999",
    src: "/icons/GitHub_dark.svg",
  },
  {
    name: "Gitlab",
    url: "https://gitlab.com/qnguyenhuy1999",
    src: "/icons/gitlab.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/huynq-2912",
    src: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto:qnguyenhuy1999@gmail.com",
    src: "/icons/gmail.svg",
  },
];

const container: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.08, // Delay between each character (in seconds)
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1.3 },
  },
};

const fixedText = [
  "Software Engineer",
  "Full Stack Developer",
  "Web Developer",
];

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [text, setText] = useState(fixedText[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | string | number | undefined = undefined;

    if (visibleCount < text.length) {
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 70);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisibleCount(0);
        const currentIndex = fixedText.indexOf(text);
        setText(
          currentIndex === fixedText.length - 1
            ? fixedText[0]
            : fixedText[currentIndex + 1]
        );
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [text, visibleCount]);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-5xl font-extrabold text-white"
      >
        Nguyen Quang Huy
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-1 flex-wrap px-8 py-2 bg-gradient rounded-2xl shadow-lg text-white mt-4 mb-8"
      >
        <motion.h3
          className="text-2xl"
          initial="hidden"
          animate="visible"
          variants={child}
        >
          {text.slice(0, visibleCount)}
          <span className="blinking-cursor">|</span>
        </motion.h3>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-2xl text-xl"
      >
        Crafting exceptional banking, fintech, and HR industry experiences with
        clean code and thoughtful design.
      </motion.p>

      <div className="flex mt-6 space-x-4">
        {socials.map((social) => (
          <motion.div
            key={social.name}
            className="button flex gap-2 items-center py-2! "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image src={social.src} alt={social.name} width={16} height={16} />
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              {social.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
