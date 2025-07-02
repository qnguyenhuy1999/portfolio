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

// Floating animation variants
const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

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
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        }}
        className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
      >
        Nguyen Quang Huy
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-1 flex-wrap px-4 sm:px-8 py-2 bg-gradient rounded-2xl shadow-lg text-white mt-4 mb-6 sm:mb-8 max-w-full hover-glow"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl text-center"
          initial="hidden"
          animate="visible"
          variants={child}
        >
          {text.slice(0, visibleCount)}
          <span className="blinking-cursor">|</span>
        </motion.h3>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-2xl text-base sm:text-lg md:text-xl px-4 sm:px-0 leading-relaxed"
      >
        Crafting exceptional banking, fintech, and HR industry experiences with
        clean code and thoughtful design.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center mt-6 sm:mt-8 gap-3 sm:gap-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            className="button flex gap-2 items-center py-2 px-3 sm:px-4 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.2 + index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={16}
                height={16}
              />
            </motion.div>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap"
            >
              {social.name}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
