import { useState } from "react";
import { motion } from "framer-motion";
import eventImage from "../assets/event.jpg";
// 1. Import EmailJS
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateReservation: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  // 2. Added loading state for the button
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Updated handleSubmit for EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual IDs from EmailJS
    const serviceID = "service_zbfdh0f";
    const templateID = "template_jflwboh";
    const publicKey = "4aJe11CNzGN1ttfYU";

    // Send the state object directly as template parameters
    emailjs.send(serviceID, templateID, form, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center overflow-hidden scroll-mt-24 px-4 py-14 md:px-6 md:py-16"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={eventImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          sizes="100vw"
          className="h-full w-full object-cover"
          animate={{ scale: [1, 1.08, 1], x: ["0%", "-2%", "0%"], y: ["0%", "2%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.74),rgba(30,64,175,0.72),rgba(14,165,233,0.58))]" />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 24%), radial-gradient(circle at 80% 30%, rgba(96,165,250,0.22), transparent 26%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.18), transparent 22%)",
          backgroundSize: "140% 140%",
        }}
      />

      <motion.div
        className="absolute left-8 top-4 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 left-24 h-32 w-32 rounded-full bg-blue-700/20 blur-2xl"
        animate={{ x: [0, -12, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 top-6 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, 22, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 mb-8 text-xl font-semibold tracking-wide text-white"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        className="z-10 w-full max-w-md rounded-[28px] border border-white/20 bg-white/92 p-6 backdrop-blur-md md:p-8"
        style={{ boxShadow: "0 30px 80px rgba(15, 23, 42, 0.22)" }}
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#3a8fd6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Message sent!</p>
            <p className="text-sm text-gray-400 mt-1">We'll get back to you soon.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  fullName: "",
                  email: "",
                  phoneNumber: "",
                  dateReservation: "",
                });
              }}
              className="mt-6 text-sm text-blue-500 hover:underline"
            >
              BOOK US 
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Phone Number</label>
              <input
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                placeholder="08012345678"
                className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Date Reservation</label>
              <input
                name="dateReservation"
                type="date"
                value={form.dateReservation}
                onChange={handleChange}
                required
                className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            {/* 4. Updated button logic */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 py-2 px-6 rounded text-white text-sm font-medium self-start"
              style={{ 
                background: "#3a8fd6",
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer" 
              }}
            >
              {loading ? "Sending..." : "BOOK US"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
