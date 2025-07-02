const testimonials = [
  {
    quote:
      "Ramzan is great! He is very skillful and fast learner, just what you need in a developer.",
    name: "Mohammed Swellam",
    title: "CEO at Geeky Air",
  },
  {
    quote:
      "Ramzan produced some really amazing work on the backend. He demonstrated his proficiency and efficiency by using Node.js and Javascript to successfully import a very large dataset into a MySQL database.",
    name: "Arnel Bisnar",
    title: "Product Manager, Solid Lift Parts Inc",
  },
  {
    quote:
      "It's been great to work with him! Fast, active and hardworking! Ramzan architected checkersvip.com from ground up with great attention to detail and great design. He is a great team player and a great developer.",
    name: "Gilberto Cisneros",
    title: "CEO, Checkersvip.com",
  },
  {
    quote:
      "We had a fantastic experience working with him on a recent project. He consistently delivered high-quality work, showed exceptional attention to detail, and communicated effectively throughout the process.",
    name: "Jacek Jllaskowski",
    title: "Project Manager, Golem",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl card-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-400 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm sm:text-base leading-relaxed italic text-gray-300">
                  {test.quote}
                </p>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-sm sm:text-base">
                  {test.name}
                </p>
                <p className="text-sm text-gray-400">{test.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
