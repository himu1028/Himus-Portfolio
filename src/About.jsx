import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mt-10 w-full bg-gray-100 py-16">
      <div className="w-11/12 mx-auto gap-10  flex flex-col md:flex-row items-center justify-between ">
        
        {/* Left Image */}
        <div className="shadow-2xl w-[50%] flex justify-center md:justify-start">
          <img
            src="https://i.ibb.co/Kpr72B8S/abuzar.jpg"
            alt="Himu"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className=" text-center md:text-left">
          <p className="uppercase textarea-xs text-gray-500 mb-2">know about me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-gray-900">Who </span> 
            <span className="text-pink-600"> I am ?</span>
          </h1>
          <p className="text-gray-600 mb-2 ">
            👋 Hi, I'm Abuzar Hasan — a passionate MERN Stack Developer with a strong command of MongoDB, Express.js, React, and Node.js.

I specialize in building dynamic, responsive, and fully functional web applications — from front-end interfaces to scalable back-end APIs. With hands-on experience in tools like Tailwind CSS, Vite, GitHub, and REST APIs, I enjoy turning ideas into high-performance products.

 
          </p> 
          <p className="text-gray-600 mb-6">
    
I’m always eager to learn new technologies, take on challenges, and contribute to meaningful projects that make an impact.
          </p>

            <div>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md shadow hover:bg-pink-700 transition">
                    Get My Resume
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;