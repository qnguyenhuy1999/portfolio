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
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          About Me
        </h2>

        <div className="grid grid-cols-[2fr_auto] gap-10">
          <div className="p-8 rounded-2xl card-background">
            <div>
              <div className="main-intro">
                <p className="mb-4 text-xl">
                  A passionate{" "}
                  <span className="font-semibold text-secondary">
                    Full Stack Developer
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-green-300">4+ years</span>{" "}
                  of experience crafting web application experiences that users
                  love.
                </p>

                <hr className="my-4 text-gray-50" />

                <p className="mb-4">
                  I specialize in building scalable web and mobile applications
                  using React, Next.js, TypeScript, and modern development
                  technologies. I thrive on turning complex problems into
                  elegant solutions that users love.
                </p>
                <p className="mb-6">
                  Beyond work, I love exploring emerging technologies,
                  contributing to open-source projects, and mentoring aspiring
                  developers. I believe in continuous learning and staying at
                  the forefront of technological innovation.
                </p>
              </div>

              <hr className="my-4 text-gray-50" />

              <h4 className="mb-4 font-semibold">Core Technologies</h4>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="my-4 font-semibold">Soft Skills</h4>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/30 to-pink-950/30 backdrop-blur-sm  border-gray-700/40 shadow-xl">
              <h4 className="mb-4 font-semibold flex gap-2 items-center">
                <MessageCircleCode size={22} className="text-purple-500" />{" "}
                Let&apos;s Connect
              </h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                  <Mail
                    size={22}
                    className="bg-gradient-to-r from-orange-500 to-red-500 rounded-md p-1"
                  />{" "}
                  qnguyenhuy1999@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Globe
                    size={22}
                    className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                  />{" "}
                  Website
                </li>
                <li className="flex items-center gap-2">
                  <MapPinCheckInside
                    size={22}
                    className="bg-gradient-to-r from-orange-500 to-red-500 rounded-md p-1"
                  />{" "}
                  Ho Chi Minh city, Viet Nam
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl card-background">
              <h4 className="mb-4 font-semibold flex gap-2 items-center">
                <Rocket size={22} className="text-green-500" /> Available for
                Hire
              </h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2">
                  <CircleCheck size={22} className="text-green-500" /> Open to
                  New Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <Earth size={22} className="text-cyan-600" /> Acceptance to
                  freelance job
                </li>
                <li className="flex items-center gap-2">
                  <Clock9 size={22} className="text-blue-500" /> Remote &
                  On-site Available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
