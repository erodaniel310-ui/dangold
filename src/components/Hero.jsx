import { motion } from "framer-motion";
import Heroimg from "../assets/1.jpg";

void motion;


export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 relative overflow-hidden scroll-mt-24"
    >

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-md z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-4"
        >
          Professional Event Planning, Security & Wedding Coordination
          <br />
          <span className="text-orange-500"> Services Across Nigeria</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-gray-500 mb-6 text-sm"
        >
      We plan, coordinate and secure events from start to finish — so you enjoy a smooth and stress-free experience
        </motion.p>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToContact}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-200/50"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
        className="relative w-[350px] rounded-lg md:w-[410px] h-[260px] md:h-[280px] mt-10 md:mt-0"
      >
        <motion.img
          src={Heroimg}
          alt="Dangold team coordinating an event"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="(min-width: 768px) 410px, 350px"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="rounded-lg w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
