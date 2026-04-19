import { motion } from "framer-motion";

void motion;

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-blue-100 pt-8 pb-14 px-6 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight">About Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-end"
          >
            {/* Pinned Browser Windows */}
            <div className="relative w-80 h-72">
              {/* Window 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-0 left-4 w-36 h-28 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <div className="h-6 bg-gray-50 rounded-t-lg flex items-center px-2 gap-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-blue-400 rounded w-full"></div>
                  <div className="h-2 bg-blue-300 rounded w-4/5"></div>
                  <div className="h-2 bg-blue-200 rounded w-3/5"></div>
                </div>
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
              </motion.div>

              {/* Window 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 8, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-8 right-4 w-36 h-28 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <div className="h-6 bg-gray-50 rounded-t-lg flex items-center px-2 gap-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
                <div className="p-3 flex justify-center gap-3 pt-4">
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
              </motion.div>

              {/* Window 3 - Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-36 h-28 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <div className="h-6 bg-gray-50 rounded-t-lg flex items-center px-2 gap-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-blue-400 rounded w-full"></div>
                  <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                </div>
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
              </motion.div>

              {/* Person Silhouette */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              >
                {/* Standing Platform */}
                <div className="w-20 h-6 bg-blue-500 rounded-full opacity-80"></div>
                {/* Person */}
                <svg 
                  className="absolute -top-32 left-1/2 -translate-x-1/2 w-16 h-32 text-slate-800"
                  viewBox="0 0 64 128" 
                  fill="currentColor"
                >
                  {/* Head */}
                  <circle cx="32" cy="16" r="12" />
                  {/* Body */}
                  <path d="M20 32 h24 l4 50 h-8 l-4 42 h-8 l-4-42 h-8 z" />
                  {/* Arm reaching up */}
                  <path d="M44 36 l16 -20 l4 4 l-14 20 z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-slate-800"
            >
              Our Mission
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 leading-relaxed"
            >
                 Dangold Multi-Services is a trusted event 
                 and business solutions brand delivering professional, 
                 creative, and reliable services in event planning, security, and business promotion.
            </motion.p>

            {/* Bullet Points */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700"> Business promotion and digital marketing support for growth</span>
              </li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700">Comprehensive event planning and coordination services</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700">Professional security services for all types of events</span>
              </motion.li>
            </motion.ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
