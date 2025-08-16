import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4 mt-15 space-y-8">
      {/* Profile Card */}
      <div className="w-full h-[55vh] bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
        <div className="flex justify-center">
          <Image
            src="/WhatsApp Image 2025-04-22 at 9.10.05 PM.jpeg" // Must be in public folder
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-indigo-500 shadow-xl hover:shadow-2xl transition-shadow duration-1000"
          />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-800">Mohit Patil</h1>
        <p className="text-gray-500">Full Stack Developer</p>
        <p className="text-gray-500">Problem Solver</p>
      </div>

      {/* About Section */}
      <div id="about" className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
        <p className="text-gray-600">
          I&apos;m Mohit Patil currently pursuing a Bachelor of Technology in Computer Engineering at R. C. Patel Institute of Technology, Shirpur. I&apos;m a passionate and enthusiastic developer who enjoys building web applications that are scalable, efficient, and user-friendly. I specialize in both frontend and backend technologies, and I love solving complex problems with clean, maintainable code.
        </p>
      </div>

      {/* Frontend */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Frontend</h2>

        <div className="flex flex-wrap justify-center gap-8 p-4">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
            HTML5
          </button>
          <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-teal-200 transition">
            TailwindCSS
          </button>
          <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-200 transition">
            CSS
          </button>
          <button className="bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-purple-200 transition">
            Bootstrap
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
            Jquery
          </button>
          <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-teal-200 transition">
            React
          </button>
        </div>
      </div>

      {/* Backend Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Backend</h2>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
            Node JS
          </button>
          <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-teal-200 transition">
            Next JS
          </button>
          <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-200 transition">
            Express
          </button>
          <button className="bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-purple-200 transition">
            EJS
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
            MongoDB
          </button>
          <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-teal-200 transition">
            SQL
          </button>
          <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-200 transition">
            Restful Api
          </button>
        </div>
      </div>

      {/* Languages */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Languages</h2>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
            C
          </button>
          <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-teal-200 transition">
            C++
          </button>
          <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-200 transition">
            Java
          </button>
          <button className="bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-purple-200 transition">
            Python
          </button>
        </div>
      </div>

      {/* Project Section */}
      <div id="project" className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Projects</h2>
        <div className="flex flex-wrap justify-around ">

          {/* Project 1 */}
          <div className="w-72 h-90 bg-amber-50 text-black rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
            <Image src="/Famer.png" alt="Farmer App" width={80} height={80} className="mb-3" />
            <h1 className="font-bold text-lg mb-1">Farmer&apos;s Solution</h1>
            <p className="text-gray-600 text-center">
              A website connect Farmer using Login signup page, Profile of Farmer, Crop Monitoring
            </p>
            <h1 className="font-bold text-lg mb-1">Technologies Used:</h1>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-purple-200 transition">
                Next JS
              </button>
              <button className="bg-teal-100 text-teal-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-teal-200 transition">
                TailwindCSS
              </button>
            </div>
            <div className="flex gap-4 p-3">
              <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
                MongoDB
              </button>
              <button className="bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-purple-200 transition">
                Next Auths
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-72 h-90 bg-amber-50 text-black rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
            <Image src="/todo.png" alt="ToDo App" width={80} height={80} className="mb-3" />
            <h1 className="font-bold text-lg mb-1">ToDo List</h1>
            <p className="text-gray-600 text-center">A platform to add your daily tasks</p>
            <h1 className="font-bold text-lg mb-1">Technologies Used:</h1>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-purple-200 transition">
                React+Vite
              </button>
              <button className="bg-teal-100 text-teal-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-teal-200 transition">
                TailwindCSS
              </button>
            </div>
            <div className="flex gap-4 p-3">
              <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
                Javascript
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-72 h-90 bg-amber-50 text-black rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
            <Image src="/Agecalculator.png" alt="AgeCalculator App" width={80} height={80} className="mb-3" />
            <h1 className="font-bold text-lg mb-1">Age Calculator</h1>
            <p className="text-gray-600 text-center">A platform to Calculate Your Age.</p>
            <h1 className="font-bold text-lg mb-1">Technologies Used:</h1>
            <div className="flex gap-4">
              <button className="bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-purple-200 transition">
                Javascript
              </button>
              <button className="bg-teal-100 text-teal-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-teal-200 transition">
                CSS
              </button>
            </div>
            <div className="flex gap-4 p-3">
              <button className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-200 transition">
                HTML5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
        <h3 className="text-xl text-black font-extrabold pt-4">Contact Information</h3>
        <div className="text-gray-600 flex flex-col gap-2 items-center mt-4">
          <span className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            mohitpatil9881@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <FaLinkedin className="text-xl" />
            <a href="https://www.linkedin.com/in/mohit-patil-76147131b/" target="_blank" rel="noopener noreferrer">
              Mohit Patil
            </a>
          </span>
          <span className="flex items-center gap-2">
            <FaGithub className="text-xl" />
            <a href="https://github.com/MohitPatil24" target="_blank" rel="noopener noreferrer">
              MohitPatil24
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
