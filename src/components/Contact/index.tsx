export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text">
          Let&apos;s Work Together
        </h2>
        <p className="mb-8 sm:mb-10 text-base sm:text-lg font-semibold text-center px-4 leading-relaxed">
          Ready to bring your ideas to life? I&apos;m always excited to work on
          interesting projects and collaborate with amazing people. Let&apos;s
          create something extraordinary together.
        </p>

        <form
          action="mailto:qnguyenhuy1999@gmail.com"
          method="POST"
          className="flex flex-col space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm sm:text-base font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm sm:text-base font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm sm:text-base font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100 text-sm sm:text-base resize-vertical"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mx-auto w-fit bg-gradient button hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
          >
            Send Message →
          </button>
        </form>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-sm sm:text-base text-gray-200 mb-4">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <div className="button hover:scale-105 transition-transform duration-300">
              <a
                href="mailto:qnguyenhuy1999@gmail.com"
                className="font-bold text-white hover:underline text-sm sm:text-base"
              >
                Send Email
              </a>
            </div>
            <div className="button hover:scale-105 transition-transform duration-300">
              <a
                href="/CV.pdf"
                target="_blank"
                className="text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
