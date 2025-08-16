'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // hamburger & close icons

const titles = ['I am Frontend Developer', 'I am Backend Developer'];

const Navbar = () => {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          setDeleting(true);
        }
      } else {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <nav className="bg-black fixed top-0 w-full z-50 shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo & Animated Title */}
        <div className="flex items-center text-white space-x-2">
          <span className="text-2xl font-bold">Mohit Patil</span>
          <span className="hidden sm:inline text-xl font-extrabold text-blue-400 h-5 transition-all">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
          <li><Link href="#about" className="hover:text-white transition-colors duration-200">About</Link></li>
          <li><Link href="#project" className="hover:text-white transition-colors duration-200">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
          <li>
            <a
              href="/Mohit-Patil-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-300 font-medium flex flex-col items-start">
          <Link href="/" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#project" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-200" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a
            href="/Mohit-Patil-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
