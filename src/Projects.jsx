import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Projects = () => {
  const technologies = (
    <div className="flex flex-wrap items-center gap-2 mt-2 text-xl text-pink-600">
      <FaHtml5 title="HTML" />
      <FaCss3Alt title="CSS" />
      <FaJs title="JavaScript" />
      <FaReact title="React" />
      <SiVite title="Vite" />
      <SiTailwindcss title="Tailwind CSS" />
    </div>
  );

  const imageSlides = (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded"
          src="https://i.ibb.co/b5Q7rnsg/Screenshot-30.png"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded"
          src="https://i.ibb.co/JF0N7Rmf/Screenshot-31.png"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded"
          src="https://i.ibb.co/ZRwRY3fZ/Screenshot-32.png"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );

  return (
    <div id="projects" className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl text-center font-bold mb-6">My Projects</h2>
      <div className="w-16 h-1 bg-black mx-auto mt-2 mb-8 rounded"></div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Project One */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition duration-300">
          {imageSlides}
          <h3 className="text-2xl font-semibold my-2">Recipe Book</h3>
          <p className="text-gray-600">
            Ipen o ipsum dolor sit, amet with sutrange to din.uding
          </p>
          {technologies}
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://recipe-book-7d4bb.web.app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 cursor-pointer rounded transition">Live Demo</a>
            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 cursor-pointer rounded transition">Code</button>
          </div>
        </div>

        {/* Project Two */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition duration-300">
          {imageSlides}
          <h3 className="text-2xl font-semibold my-2">English Janala</h3>
          <p className="text-gray-600">
            Ameri ipsum dolor anit may amet connot e t an.cesian al,
          </p>
          {technologies}
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://exquisite-cuchufli-cbacf4.netlify.app" className="bg-blue-600 hover:bg-blue-700 text-white px-4 cursor-pointer py-2 rounded transition">Live Demo</a>
            <button className="bg-gray-200 hover:bg-gray-300 text-black cursor-pointer px-4 py-2 rounded transition">Code</button>
          </div>
        </div>

        {/* Project Three */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition duration-300">
          {imageSlides}
          <h3 className="text-2xl font-semibold my-2">Hero Restaurant</h3>
          <p className="text-gray-600">
            Lorem ipsum doloransi anc amet commodoler.
          </p>
          {technologies}
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://herorestaurant-1d197.web.app" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2 rounded transition">Live Demo</a>
            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 cursor-pointer py-2 rounded transition">Code</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;