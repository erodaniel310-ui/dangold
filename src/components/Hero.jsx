import { motion } from "framer-motion";
import Heroimg from "../assets/hero.jpg";


export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 relative overflow-hidden"
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
          className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4"
        >
           One Brand. Many Services.
          <br />
          <span className="text-orange-500">Exceptional Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-gray-500 mb-6 text-sm"
        >
          Transforming your ideas into seamless events, secure environments,
          and powerful business visibility all in one place.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
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
          alt="image"
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