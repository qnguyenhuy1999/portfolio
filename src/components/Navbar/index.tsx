import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#hero" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  // { label: "Projects", href: "#projects" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 bg-opacity-50">
      <div className="py-2 m-auto rounded-full bg-gray-100/60 px-7 w-fit backdrop-blur-3xl">
        <ul className="flex items-center justify-center space-x-6">
          <li key="#">
            <Link href="#hero" className="text-xl font-bold gradient-text">
              QH
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-white transition-colors duration-300 cursor-pointer hover:text-green-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
