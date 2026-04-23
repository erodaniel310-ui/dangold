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
      {
        label: "Phone Number",
        value: "08052334031",
        href: "tel:+2348052334031",
      },
      {
        label: "Whatsapp Number",
        value: "08037485595",
        href: "https://wa.me/2348037485595",
      },
      {
        label: "Email Address",
        value: "dangoldmultiservices@hotmail.com",
        href: "mailto:dangoldmultiservices@hotmail.com",
      },
      {
        label: "Address",
        value: "Dangold Building, Desalu Street Odo Ona Apata Ibadan, Oyo State",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/171iLTgMUN/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.6 0-4.2 1.6-4.2 4.5V11H7.5v3H10v7h3.5Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/rotimiobe",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M18.9 7.1c.8-.1 1.5-.5 2.1-1.1-.3.8-.9 1.5-1.7 1.9.7 0 1.3-.2 1.9-.5-.5.7-1.1 1.3-1.8 1.8v.5c0 5-3.8 10.8-10.8 10.8-2.1 0-4.1-.6-5.8-1.7h.8c1.8 0 3.5-.6 4.8-1.7-1.7 0-3.1-1.2-3.6-2.7h.7c.3 0 .7 0 1-.1-1.8-.4-3.1-2-3.1-3.9v-.1c.5.3 1.1.5 1.8.5-1.1-.7-1.8-1.9-1.8-3.3 0-.7.2-1.4.5-2 .2.3 1.8 2.8 6.7 3-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.7-1.7 2.2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rotimi-obe-bsc-crim-css-mniis-17a856206?utm_source=share_via&utm_content=profile&utm_medium=member_android ‎",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.9 8.7A1.9 1.9 0 1 1 7 5a1.9 1.9 0 0 1-.1 3.7ZM5.2 9.9h3.4V19H5.2V9.9Zm5.5 0H14v1.2h.1c.5-.9 1.6-1.5 3.1-1.5 3.3 0 3.9 2.1 3.9 4.8V19h-3.4v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V19h-3.4V9.9Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "http://www.instagram.com/dangolddigitals",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1Zm0 1.7A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@dangolddigitals",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M16.8 3c.3 1.9 1.4 3.5 3.2 4.3v2.8a8.2 8.2 0 0 1-3.2-.8v5.5c0 3.4-2.8 6.2-6.2 6.2S4.4 18.2 4.4 14.8s2.8-6.2 6.2-6.2c.3 0 .7 0 1 .1v3.1a3.4 3.4 0 0 0-1-.2 3.1 3.1 0 1 0 3.1 3.1V3h3.1Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <img
              src={logo}
              alt="Dangold logo"
              loading="lazy"
              decoding="async"
              className="h-28 w-auto sm:h-32 md:h-36"
            />
            <p className="mt-4 text-md leading-7 text-white">
              <span className="rounded-md px-1 py-0.5 transition-all duration-300 hover:bg-white/10 hover:text-yellow-300">
                One Brand. Many Services. Exceptional Results. We deliver
                professional event planning, security services, and business
                promotion you can trust.
              </span>
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, color: "#fff" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-white transition-colors hover:border-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h3 className="text-md font-semibold uppercase tracking-[0.2em] text-white">
                {section.heading}
              </h3>
              {section.links ? (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block rounded-md px-2 py-1 text-md text-white transition-all duration-300 hover:bg-white/10 hover:text-yellow-300"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3 text-md leading-6 text-white">
                  {section.paragraph.map((item) => (
                    item.href ? (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="block rounded-md px-2 py-1 transition-all duration-300 hover:bg-white/10 hover:text-yellow-300"
                      >
                        <span className="font-medium">{item.label}:</span>{" "}
                        {item.value}
                      </motion.a>
                    ) : (
                      <p
                        key={item.label}
                        className="rounded-md px-2 py-1 transition-all duration-300 hover:bg-white/10 hover:text-yellow-300"
                      >
                        <span className="font-medium">{item.label}:</span>{" "}
                        {item.value}
                      </p>
                    )
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
