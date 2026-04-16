





export default function SkillsPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "Node.js"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* 🔥 Title */}
        <h1 className="text-4xl font-bold mb-4">
          My <span className="text-indigo-500">Skills</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Here are the technologies I work with
        </p>

        {/* 💡 Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 hover:border-indigo-500 transition"
            >
              <h2 className="text-lg font-semibold">{skill}</h2>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


