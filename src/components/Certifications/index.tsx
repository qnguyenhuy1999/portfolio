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
    <section id="certifications" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          Certifications
        </h2>
        <p className="mb-10 text-lg font-semibold text-center">
          Professional certifications and credentials that validate my expertise
          in modern technologies and development practices.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-6 shadow rounded-2xl card-background">
              <h3 className="mb-2 text-xl font-semibold">{cert.title}</h3>
              <p className="mb-1">
                {cert.provider} &mdash; {cert.platform}
              </p>
              <p className="mb-2">Issued: {cert.issued}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-secondary hover:underline"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
