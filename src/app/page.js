
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-400 mb-2"
          >
            <span className="text-2xl">Hi, I'm</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Rezae Rabby
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 mb-6"
          >
            Frontend Developer | Next.js Learner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 mb-8 max-w-md"
          >
            I build modern, responsive and user-friendly websites using 
            React.js, Next.js and Tailwind CSS.
          </motion.p>

          {/* 🔘 Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl transition shadow-lg hover:scale-105"
            >
              Contact Me
            </Link>

            <Link
              href="/skills"
              className="border border-gray-500 hover:border-white px-6 py-3 rounded-xl transition hover:scale-105"
            >
              View Skills
            </Link>

          </motion.div>
        </motion.div>

        {/* 🔹 Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-2xl overflow-hidden"
          >
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-full h-full object-cover object-[50%_30%]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

