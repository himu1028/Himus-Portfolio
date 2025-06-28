import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiDaisyui, SiMongodb,  SiExpress } from "react-icons/si";

const CardSection = () => {
  const cards = [
    { id: 1, title: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { id: 2, title: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { id: 3, title: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { id: 4, title: "Daisy UI", icon: <SiDaisyui className="text-purple-500 text-5xl" /> },
    { id: 5, title: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { id: 6, title: "Vite", icon: <SiVite className="text-yellow-400 text-5xl" /> },
    { id: 7, title: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { id: 8, title: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    // { id: 9, title: "VS Code", icon: <SiVisualstudiocode className="text-blue-600 text-5xl" /> },
    { id: 10, title: "GitHub", icon: <FaGithub className="text-black text-5xl" /> },
    { id: 11, title: "Node.js", icon: <FaNodeJs className="text-green-700 text-5xl" /> },
    { id: 12, title: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
  ];

  return (
    <section className="py-10 w-11/12 mx-auto px-4 ">
      <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        className="space-x-6"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-40 flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-4 mx-3"
          >
            <div className="mb-2">{card.icon}</div>
            <p className="text-gray-500 text-sm">{card.title}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default CardSection;