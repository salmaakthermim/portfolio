import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf, FaCode } from 'react-icons/fa';

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleDownloadCV = () => {
    // Logic to handle CV download
    window.open('/path/to/your/cv.pdf'); // adjust with the actual CV link
};

  return (
    <section className="about relative bg-gradient-to-b  py-16 px-6 md:px-12">

        <div className=" w-1/3 mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-transparent ml-16 bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="600">About Me</h2>
          <p
            className="text-center md:text-left text-gray-300 mt-2 flex items-center justify-center md:justify-start gap-2"
            data-aos="fade-up" data-aos-duration="130"
          >
            <span>✨</span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
              Transforming ideas into digital experiences
            </span>
            <span>✨</span>
          </p>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div data-aos="fade-right">
          

          <h1
            className="mt-6 text-3xl md:text-4xl font-bold text-center md:text-left text-white"
            data-aos="fade-up"
          >
            Hello, I'm <br />
            <span className=" text-purple-500">Salma Akther Mim</span>
          </h1>

          <p
            className="mt-4 text-gray-400 text-lg leading-relaxed text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A Computer Network and Telecommunications student passionate about
            Front-End development. I specialize in crafting engaging digital
            experiences and consistently strive to deliver the best solutions
            in every project.
          </p>
          <div className="flex space-x-4 mt-6">
            {/* Primary Button for Download CV */}
            <button 
                className="btn btn-primary bg-gradient-to-r from-purple-500 to-blue-500 text-white" 
                onClick={handleDownloadCV}
            >
                <FaFilePdf className="mr-2" />  {/* PDF icon */}
                Download CV
            </button>

            {/* Secondary Button for View Projects */}
            <button 
                className="btn border border-purple-300 text-purple-500 hover:bg-purple-50"
            >
                <FaCode className="mr-2" />  {/* Code icon */}
                View Projects
            </button>
        </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center" data-aos="zoom-in">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/KdQ83Wz/crope-mimpr.png"
              alt="Abdul Jabbar Al Nahid"
              className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
