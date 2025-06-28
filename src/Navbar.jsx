import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 sticky top-0    w-full z-50">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-pink-600">Himu</span>Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
            <a href="#" className=" hover:text-pink-600">
              Home
            </a>
            <a className=" hover:text-pink-600" href="#about">About</a>
            <a className=" hover:text-pink-600" href="#contact">Contact</a>
            <a className=" hover:text-pink-600" href="#projects">My Projects</a>
            <a className=" hover:text-pink-600" >Resume</a>
        
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <a href='#contact' className="bg-pink-600 text-white px-4 py-2 rounded-md shadow hover:bg-pink-700 transition">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block text-pink-600">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Service
          </a>
          <a href="#" className="block">
            Portfolio
          </a>
          <a href="#" className="block">
            Blog
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="w-full mt-2 bg-pink-600 text-white py-2 rounded-md shadow hover:bg-pink-700 transition">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
