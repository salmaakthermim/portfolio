// import React, { useState, useEffect } from "react";
// import { FaCode } from "react-icons/fa";
// import { SiPolywork } from "react-icons/si";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Project from "./Project";
// import Technologies from "./technologies";


// const Portfolio = () => {
//   const [activeTab, setActiveTab] = useState("projects");

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="py-16 px-6 md:px-12 bg-gray-900 text-white">
//       <h2 className="text-4xl font-bold text-center text-[#c084fc]" data-aos="fade-up">
//         My Work
//       </h2>

//       {/* Buttons */}
//       <div className="flex justify-center mt-8 space-x-4">
//         {/* Projects Tab */}
//         <button
//           className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
//             activeTab === "projects" ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white" : "bg-gray-800 text-gray-400"
//           }`}
//           onClick={() => setActiveTab("projects")}
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <FaCode />
//           Projects
//         </button>

//         {/* Tech Stack Tab */}
//         <button
//           className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
//             activeTab === "techstack" ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white" : "bg-gray-800 text-gray-400"
//           }`}
//           onClick={() => setActiveTab("techstack")}
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           <SiPolywork />
//           Tech Stack
//         </button>
//       </div>

//       {/* Content */}
//       <div className="mt-12">
//         {activeTab === "projects" ? <Project /> : <Technologies />}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
