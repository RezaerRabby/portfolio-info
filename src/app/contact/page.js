


"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Side (Contact Info) */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-indigo-500">Me</span>
          </h1>

          <p className="text-gray-400 mb-6">
            Feel free to reach out to me. I’m always open to discussing new projects or opportunities.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 Email: rezaerrabby@gmail.com</p>
            <p>📍 Location: Bangladesh</p>
            <p>📞 Phone: +8801760137770</p>
          </div>
        </div>

        {/* 🔹 Right Side (Form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col gap-5"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:outline-none focus:border-indigo-500"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl transition font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}