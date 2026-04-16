

// function AboutPage() {
//   return (
//     <div className="p-10 justify-center text-center">
//       <h1 className="text-4xl font-bold mb-4">About Me</h1>
//       <p>I am a frontend developer...</p>
//     </div>
//   );
// }

// export default AboutPage;



export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Image */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg overflow-hidden">
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-full h-full object-cover object-[50%_30%]"
            />
          </div>
        </div>

        {/* 🔹 Right Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-indigo-500">Me</span>
          </h1>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I am a passionate Frontend Developer who loves building modern, 
            responsive and user-friendly websites using React, Next.js and Tailwind CSS.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I enjoy learning new technologies and improving my skills every day.
            My goal is to become a professional software engineer and work on real-world projects.
          </p>

          {/* 🔥 Skills */}
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-600/20 border border-indigo-500 px-4 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}