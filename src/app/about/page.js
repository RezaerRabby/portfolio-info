



"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
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

        {/* 🔹 Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-indigo-500">Me</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mb-4 leading-relaxed"
          >
            I am a passionate Frontend Developer who loves building modern, 
            responsive and user-friendly websites using React, Next.js and Tailwind CSS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mb-6 leading-relaxed"
          >
            I enjoy learning new technologies and improving my skills every day.
            My goal is to become a professional software engineer and work on real-world projects.
          </motion.p>

          {/* 🔥 Skills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap gap-3"
          >
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map((skill, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                className="bg-indigo-600/20 border border-indigo-500 px-4 py-1 rounded-full text-sm cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}