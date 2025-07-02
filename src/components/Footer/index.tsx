export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          © {new Date().getFullYear()} Nguyen Quang Huy. Built with Next.js,
          Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
}
