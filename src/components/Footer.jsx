import { motion } from "framer-motion";
import logo from "../assets/logo.png";

void motion;

const footerSections = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "Our Team", href: "#our-team" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
    ],
  },

  {
    heading: "Support",
    paragraph: [
      "Phone Number: 08037485595",
      "Whatsapp Number: 08037485595",
      "Email Address: dangoldmultiservices@hotmail.com",
      "Address: Dangold Building, Desalu Street Odo Ona Apata Ibadan, Oyo State",
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.6 0-4.2 1.6-4.2 4.5V11H7.5v3H10v7h3.5Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M18.9 7.1c.8-.1 1.5-.5 2.1-1.1-.3.8-.9 1.5-1.7 1.9.7 0 1.3-.2 1.9-.5-.5.7-1.1 1.3-1.8 1.8v.5c0 5-3.8 10.8-10.8 10.8-2.1 0-4.1-.6-5.8-1.7h.8c1.8 0 3.5-.6 4.8-1.7-1.7 0-3.1-1.2-3.6-2.7h.7c.3 0 .7 0 1-.1-1.8-.4-3.1-2-3.1-3.9v-.1c.5.3 1.1.5 1.8.5-1.1-.7-1.8-1.9-1.8-3.3 0-.7.2-1.4.5-2 .2.3 1.8 2.8 6.7 3-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.7-1.7 2.2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.9 8.7A1.9 1.9 0 1 1 7 5a1.9 1.9 0 0 1-.1 3.7ZM5.2 9.9h3.4V19H5.2V9.9Zm5.5 0H14v1.2h.1c.5-.9 1.6-1.5 3.1-1.5 3.3 0 3.9 2.1 3.9 4.8V19h-3.4v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V19h-3.4V9.9Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1Zm0 1.7A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <img src={logo} alt="Dangold logo" className="h-16 w-auto" />
            <p className="mt-4 text-sm leading-7 text-gray-400">
              One Brand. Many Services. Exceptional Results. We deliver
              professional event planning, security services, and business
              promotion you can trust.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, color: "#fff" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {section.heading}
              </h3>
              {section.links ? (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4, color: "#fff" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3 text-sm leading-6 text-gray-400">
                  {section.paragraph.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

     
      </div>
    </footer>
  );
}
