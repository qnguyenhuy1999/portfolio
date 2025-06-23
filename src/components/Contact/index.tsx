export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center gradient-text">
          Let&apos;s Work Together
        </h2>
        <p className="mb-10 text-lg font-semibold text-center">
          Ready to bring your ideas to life? I&apos;m always excited to work on
          interesting projects and collaborate with amazing people. Let&apos;s
          create something extraordinary together.
        </p>

        <form
          action="mailto:qnguyenhuy1999@gmail.com"
          method="POST"
          className="flex flex-col"
        >
          <div className="grid grid-cols-2 grid-rows-1 gap-6">
            <div className="flex flex-col gap-2">
              <label aria-required htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label aria-required htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex flex-col col-span-2 gap-2">
              <label aria-required htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="mx-auto w-fit bg-gradient button">
            Send Message →
          </button>
        </form>

        <p className="mt-6 text-center text-gray-200">
          Or reach out directly:{" "}
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="button">
            <a
              href="mailto:qnguyenhuy1999@gmail.com"
              className="font-bold text-white hover:underline"
            >
              Send Email
            </a>
          </div>
          <div className="button">
            <a href="/CV.pdf" target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
