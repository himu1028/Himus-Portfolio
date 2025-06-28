import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2023–2027",
      title: " Running Bachelor’s Degree",
      institution: "Gopalganj Science & Technology University",
      location: "Gopalganj,Bangladesh",
    },
    {
      year: "2021–2022",
      title: "Higher Secondary Education",
      institution: "Shyamnagar Mohsin College",
      location: "Shyamnagar,Satkhira",
    },
    {
      year: "2019-2020",
      title: "Secondary Education",
      institution: "Kashimari Ideal School & College ",
      location: "Shyamnagar,Satkhira",
    },
  ];

  return (
    <section className="  py-10 px-4 md:px-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Education
        </h2>
        {/* Top Divider */}
        <div className="w-16 h-1 bg-black mx-auto mt-2 mb-8 rounded"></div>

        <div className="space-y-6 ">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white hover:bg-pink-300 p-6 rounded-2xl shadow-sm border flex items-start gap-6"
            >
              {/* Time Section with Right Border */}
              <div className="w-32 h-20 border-r-2 border-gray-300 pr-4 text-gray-600 font-medium text-2xl">
                {edu.year}
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;