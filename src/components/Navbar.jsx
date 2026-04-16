// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="flex items-center justify-between p-5 bg-gray-800 text-white">
//       <div >
//         <h1 className="text-2xl font-bold">Rezae Rabby</h1>
//       </div>

//       <div>

//     <nav className="flex gap-6 p-5 bg-gray-800 text-white">
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/skills">Skills</Link>
//       <Link href="/contact">Contact</Link>
//     </nav>

//       </div>
//     </div>




    
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between p-5 max-w-7xl mx-auto">
        
        {/* 🔹 Logo */}
        <h1 className="text-2xl font-bold">Rezae Rabby</h1>

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* 🔹 Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-5 bg-gray-800">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

