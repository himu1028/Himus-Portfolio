import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-10 w-11/12 mx-auto py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm text-gray-500 mb-2">Welcome to My Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I am <span className="text-gray-900">Abuzar Hasan Himu</span><br />
            <span className="text-pink-600">a Professional MERN Stack Developer.</span>
          </h1>
          <p className="text-gray-600 mb-6">
            I have been working since 2024. I am proficient in react based web development, user experience, research.
          </p>

          {/* Social & Skills */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Social Icons */}
            <div>
              <p className="font-semibold mb-2 text-gray-700">Find with me</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="#" className="text-white bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                  <FaInstagram />
                </a>
                {/* <a href="#" className="text-white bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition">
                  <FaDribbble />
                </a> */}
              </div>
            </div>

            

            {/* Skills Logos */}
            {/* <div>
              <p className="font-semibold mb-2 text-gray-700">Best skill on</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Figma" className="h-10 w-10" />
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Adobe XD" className="h-10 w-10" />
                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Photoshop" className="h-10 w-10" />
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2   flex justify-center">
          <img
            src="https://i.ibb.co/Kpr72B8S/abuzar.jpg" 
            alt="Himu"
            className="w-72 md:w-96 rounded-xl"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;