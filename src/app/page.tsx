import About from "@components/About";
import Certifications from "@components/Certifications";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import TechStack from "@components/TechStack";

export default function Home() {
  return (
    <div className="blur-bg-custom">
      <div className="blob blob-blue"></div>
      <div className="blob blob-pink"></div>

      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
