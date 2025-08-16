import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center px-4 pt-20 space-y-8">
      
      {/* Profile Card */}
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
        <div className="flex justify-center">
          <Image
            src="/WhatsApp Image 2025-04-22 at 9.10.05 PM.jpeg"
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-500 shadow-xl hover:shadow-2xl transition-shadow duration-1000"
          />
        </div>
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-800">Mohit Patil</h1>
        <p className="text-gray-500 text-sm sm:text-base">Full Stack Developer</p>
        <p className="text-gray-500 text-sm sm:text-base">Problem Solver</p>
      </div>

      {/* About Section */}
      <div id="about" className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">About</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          I&apos;m Mohit Patil currently pursuing a Bachelor of Technology in Computer Engineering at 
          R. C. Patel Institute of Technology, Shirpur. I&apos;m a passionate and enthusiastic developer 
          who enjoys building web applications that are scalable, efficient, and user-friendly.
        </p>
      </div>

      {/* Frontend Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Frontend</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {["HTML5", "TailwindCSS", "CSS", "Bootstrap", "Jquery", "React"].map((tech) => (
            <button
              key={tech}
              className="bg-indigo-100 text-indigo-700 text-sm sm:text-base font-semibold px-3 py-2 rounded-full shadow hover:bg-indigo-200 transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Backend Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Backend</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {["Node JS", "Next JS", "Express", "EJS", "MongoDB", "SQL", "Restful API"].map((tech) => (
            <button
              key={tech}
              className="bg-teal-100 text-teal-700 text-sm sm:text-base font-semibold px-3 py-2 rounded-full shadow hover:bg-teal-200 transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Languages</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {["C", "C++", "Java", "Python"].map((lang) => (
            <button
              key={lang}
              className="bg-purple-100 text-purple-700 text-sm sm:text-base font-semibold px-3 py-2 rounded-full shadow hover:bg-purple-200 transition"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="project" className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        
        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible pb-4">
          {[
            { title: "Farmer's Solution", img: "/Famer.png", tech: ["Next JS", "TailwindCSS", "MongoDB", "Next Auth"] },
            { title: "ToDo List", img: "/todo.png", tech: ["React+Vite", "TailwindCSS", "JavaScript"] },
            { title: "Age Calculator", img: "/Agecalculator.png", tech: ["JavaScript", "CSS", "HTML5"] },
          ].map((proj) => (
            <div key={proj.title} className="min-w-[16rem] sm:w-72 bg-amber-50 text-black rounded-xl shadow-lg p-4 flex flex-col items-center">
              <Image src={proj.img} alt={proj.title} width={80} height={80} className="mb-3" />
              <h1 className="font-bold text-lg mb-1">{proj.title}</h1>
              <p className="text-gray-600 text-sm text-center">Technologies Used:</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {proj.tech.map((t) => (
                  <button key={t} className="bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold px-2 py-1 rounded-full shadow hover:bg-indigo-200 transition">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
        <div className="text-gray-600 flex flex-col gap-3 items-center mt-4 text-sm sm:text-base">
          <span className="flex items-center gap-2"><MdEmail className="text-lg sm:text-xl" /> mohitpatil9881@gmail.com</span>
          <span className="flex items-center gap-2"><FaLinkedin className="text-lg sm:text-xl" /><a href="https://www.linkedin.com/in/mohit-patil-76147131b/" target="_blank" rel="noopener noreferrer">Mohit Patil</a></span>
          <span className="flex items-center gap-2"><FaGithub className="text-lg sm:text-xl" /><a href="https://github.com/MohitPatil24" target="_blank" rel="noopener noreferrer">MohitPatil24</a></span>
        </div>
      </div>
    </main>
  );
}
