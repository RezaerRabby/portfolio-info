



"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-indigo-500">Me</span>
          </h1>

          <p className="text-gray-400 mb-6">
            Feel free to reach out. I’m open to projects and opportunities.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 Email: rezaerrabby@gmail.com</p>
            <p>📍 Location: Bangladesh</p>
            <p>📞 Phone: +8801760137770</p>
          </div>
        </motion.div>

        {/* 🔹 Right Side (Form) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E293B] p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col gap-5"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl transition font-semibold"
          >
            {sent ? "Sending..." : "Send Message "}
          </motion.button>

          {/* Success Message */}
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center"
            >
              ✅ Message Sent Successfully!
            </motion.p>
          )}

        </motion.form>

      </div>
    </section>
  );
}


