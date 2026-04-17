import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M3 10h18M6 6h12M9 14h6M10 18h4"/>
      </svg>
    ),
    accent: "from-blue-600 to-indigo-700",
    title: "Event Planning & Coordination",
    description:
      "We plan and coordinate seamless events from concept to completion, including weddings, corporate functions, and private celebrations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    accent: "from-purple-600 to-pink-600",
    title: "Event Security Services",
    description:
      "Professional security personnel, crowd control, VIP protection, and venue safety coordination for safe and successful events.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M3 11l18-5-5 18-4-7-9-6z"/>
      </svg>
    ),
    accent: "from-orange-500 to-yellow-500",
    title: "Business Promotion & Marketing",
    description:
      "We help brands grow visibility through social media promotion, flyer design, and strategic marketing campaigns.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M4 4h16v16H4z"/>
        <path d="M4 9h16"/>
      </svg>
    ),
    accent: "from-cyan-500 to-blue-500",
    title: "Vendor Coordination",
    description:
      "We manage vendors efficiently to ensure smooth collaboration and flawless execution of your event.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    accent: "from-emerald-500 to-teal-600",
    title: "Event Setup & Stage Design",
    description:
      "Professional stage setup and venue arrangement tailored to create visually stunning and well-organized events.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    accent: "from-rose-500 to-red-500",
    title: "Consultancy & Growth Support",
    description:
      "Expert advice and practical strategies to help businesses and event vendors grow and position themselves effectively.",
  },
];

export default function WhatWeDo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen py-14 px-6 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div 
      
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight mb-4">
           What We Do
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Professional event solutions, security services, and business promotion designed to deliver exceptional results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gray-200 border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.1] hover:-translate-y-1">
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {service.icon}
                  </div>
                  {/* Icon glow */}
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-gray-800 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white group/link"
                >
                  <span>Learn more</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500 rounded-tr-2xl`} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <span>Explore All Services</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              whileHover={{ x: 4 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
