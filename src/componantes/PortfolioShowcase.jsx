import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaAward } from "react-icons/fa";
import { SiPolywork } from "react-icons/si";
import Project from "./Project"; // Import the project component
import Technologies from "./technologies";


export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b  py-16 px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#c084fc]" data-aos="fade-up">
        Portfolio Showcase
      </h2>
      <p className="text-gray-400 mt-2 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
            activeTab === "projects" ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("projects")}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaCode />
          Projects
        </button>

      
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
            activeTab === "techstack" ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("techstack")}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <SiPolywork />
          Tech Stack
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-12" data-aos="fade-up" data-aos-delay="800">
        {activeTab === "projects" && <Project />} 
        {activeTab === "certificates" && <div className="text-gray-300">📜 Displaying Achievements...</div>}
        {activeTab === "techstack" && <Technologies></Technologies>}
      </div>
    </section>
  );
}
