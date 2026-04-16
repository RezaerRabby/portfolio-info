






// function Home() {
//     return ( 
//         <div className="p-10 justify-center text-center">
//             <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//             <p>This is the home page of my portfolio website.</p>
//         </div>
//      );
// }

// export default Home;





"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6">
      
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Content */}
        <div className="text-center md:text-left">
          
          <p className="text-indigo-400 mb-2">
            <span className="text-2xl"> Hi, I'm </span> 
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Rezae Rabby
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-400 mb-6">
            Frontend Developer | Next.js Learner
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            I build modern, responsive and user-friendly websites using 
            React, Next.js and Tailwind CSS.
          </p>

          {/* 🔘 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </Link>

            <Link
              href="/skills"
              className="border border-gray-500 hover:border-white px-6 py-3 rounded-xl transition"
            >
              View Skills
            </Link>

          </div>
        </div>

      

       <div className="flex justify-center">
         <div className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg overflow-hidden">
    
        <img
      src="/images/profile.png"
      alt="profile"
      className="w-full h-full object-cover object-[50%_30%]"
      />

      </div>
     </div>

      </div>
    </section>
  );
}

