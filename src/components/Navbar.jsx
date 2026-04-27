





"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      
      <div className="flex items-center justify-between p-5 max-w-7xl mx-auto">
        
        {/* 🔹 Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          Rezae Rabby
        </motion.h1>

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          
          <Link className="hover:text-white transition" href="/">
            Home
          </Link>

          <Link className="hover:text-white transition" href="/about">
            About
          </Link>

          <Link className="hover:text-white transition" href="/skills">
            Skills
          </Link>

          <Link className="hover:text-white transition" href="/contact">
            Contact
          </Link>

        </nav>

        {/* 🔹 Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔹 Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-900 text-gray-300"
          >
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

    </header>
  );
}