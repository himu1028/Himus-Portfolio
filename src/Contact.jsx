import React from 'react';

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-16 ">
      <h2 className="text-3xl text-center font-bold mb-6">Contact me</h2>
 <div className="w-26 h-1 bg-black mx-auto mt-2 mb-8 rounded"></div>
      {/* Email */}
      <div className="mb-6">
        <input
          type="text"
          value="mdabuzarhasanhimu@gmail.com"
          readOnly
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mb-8">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
          <FaGithub />
        </a>
      </div>

      {/* Contact Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;