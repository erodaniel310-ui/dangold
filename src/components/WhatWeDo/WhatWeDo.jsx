import { motion } from "framer-motion";
import Cards from "./Cards";

void motion;

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
      id="what-we-do"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-14 pb-6 px-6 overflow-hidden scroll-mt-24"
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
          className="text-center mb-2"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight mb-4">
           What We Do
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
           
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              At Dangold Multi-Services, we provide professional planning, coordination, security, and promotion
              support to ensure every event is organized, memorable, and successfully executed from start to finish.
            </p>
          </div>
        </motion.div>
        </div>


       <Cards/>
      
    </motion.section>
  );
}
