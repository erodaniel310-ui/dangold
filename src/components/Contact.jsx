import { useState } from "react";
import { motion } from "framer-motion";

void motion;

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-4 py-14 md:px-6 md:py-16 overflow-hidden scroll-mt-24"
      style={{ background: "linear-gradient(135deg, #60b8e8 0%, #3a8fd6 50%, #5bc8e8 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-4 left-8 w-48 h-48 rounded-full opacity-30"
        style={{ background: "#2277cc" }}
      />
      <div
        className="absolute bottom-8 left-24 w-32 h-32 rounded-full opacity-20"
        style={{ background: "#1a66bb" }}
      />
      <div
        className="absolute top-6 right-10 w-40 h-40 rounded-full opacity-20"
        style={{ background: "#2288dd" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-semibold text-xl mb-8 tracking-wide"
      >
        Contact Us
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="z-10 w-full max-w-md rounded-lg bg-white p-6 md:p-8"
        style={{ boxShadow: "0 4px 32px rgba(30,80,160,0.10)" }}
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
              onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" }); }}
              className="mt-6 text-sm text-blue-500 hover:underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name row */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-1">
                <label className="text-xs text-gray-400">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <label className="text-xs text-gray-400">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Smith"
                  className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="w-full min-w-0 rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Leave us a message here..."
                className="w-full min-w-0 resize-none rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 py-2 px-6 rounded text-white text-sm font-medium self-start"
              style={{ background: "#3a8fd6" }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
