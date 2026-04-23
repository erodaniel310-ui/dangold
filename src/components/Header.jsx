import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

void motion;

const navLinks = [
  { label: "Home", targetId: "home" },
  { label: "What We Do", targetId: "what-we-do" },
  { label: "About", targetId: "about" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "Blog", targetId: "blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      navLinks.forEach(({ targetId }) => {
        const section = document.getElementById(targetId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = targetId;
        }
      });

      setActiveSection(currentSection);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.reload();
  };

  const handleNavClick = (targetId) => {
    const section = document.getElementById(targetId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(targetId);
    setIsOpen(false);
  };

  const getNavLinkClassName = (targetId, mobile = false) => {
    const baseClassName = mobile
      ? "text-md font-medium py-3 border-b border-gray-100 last:border-none transition-colors text-left"
      : "text-md font-medium transition-colors tracking-wide";

    return `${baseClassName} ${
      activeSection === targetId
        ? "text-gray-900"
        : "text-gray-500 hover:text-gray-900"
    }`;
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isMobile
          ? "rgba(255, 255, 255, 1)"
          : isScrolled
            ? "rgba(255, 255, 255, 0.78)"
            : "rgba(255, 255, 255, 0.95)",
      }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-none md:backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          <div className="flex-shrink-0">
            <button type="button" onClick={handleLogoClick} className="block">
              <img
                src={logo}
                alt="Dangold Logo"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-24 w-auto cursor-pointer sm:h-28 md:h-32"
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center text-md gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                className={getNavLinkClassName(link.targetId)}
                onClick={() => handleNavClick(link.targetId)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="hidden md:block bg-gray-900 text-white text-sm font-medium tracking-wider px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => handleNavClick("contact")}
          >
            CONTACT
          </button>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 border border-gray-200 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-[1px] md:hidden z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-40 w-64 border-l border-gray-200 bg-white shadow-2xl md:hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close menu"
              >
                ×
              </button>
              <nav className="flex h-full flex-col bg-white px-4 py-2 pt-20">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    className={getNavLinkClassName(link.targetId, true)}
                    onClick={() => handleNavClick(link.targetId)}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  className="mt-3 mb-3 bg-gray-900 text-white text-sm font-medium tracking-wider px-5 py-2.5 rounded-lg w-full hover:bg-gray-700 transition-colors"
                  onClick={() => handleNavClick("contact")}
                >
                  CONTACT
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </motion.header>
  );
}
