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
    <section id="testimonials" className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          Client Testimonials
        </h2>

        {testimonials.map((test, i) => (
          <div key={i} className="mb-8">
            <p className="mb-2 italic">{`"${test.quote}"`}</p>
            <p className="font-semibold">
              {test.name}, <span>{test.title}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
