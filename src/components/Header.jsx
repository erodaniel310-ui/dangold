import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.JPG";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "What We Do", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Testimonials", href: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header className="relative bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Dangold Logo" className="h-14 w-auto md:h-18" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-gray-900 text-white text-sm font-medium tracking-wider px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            CONTACT
          </button>

          {/* Hamburger (mobile only) */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg md:hidden z-40"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close menu"
              >
                ×
              </button>
              <nav className="flex flex-col px-4 py-2 pt-20">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 py-3 border-b border-gray-100 last:border-none transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  className="mt-3 mb-3 bg-gray-900 text-white text-sm font-medium tracking-wider px-5 py-2.5 rounded-lg w-full hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
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