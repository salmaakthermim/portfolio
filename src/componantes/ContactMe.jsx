import React, { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-16 px-6 md:px-12  text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#c084fc]" data-aos="fade-up">
        Contact Me
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Contact Form */}
      <div className="mt-10 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
        <form>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input type="text" placeholder="Your Name" className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border-none outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input type="email" placeholder="Your Email" className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border-none outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white border-none outline-none" required></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 py-3 rounded-lg text-white font-bold hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="600">
        <a href="mailto:your.email@example.com" className="text-purple-400 text-2xl hover:text-purple-300 transition">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 text-2xl hover:text-blue-300 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourgithub" className="text-gray-400 text-2xl hover:text-gray-300 transition">
          <FaGithub />
        </a>
        <a href="tel:+1234567890" className="text-green-400 text-2xl hover:text-green-300 transition">
          <FaPhone />
        </a>
      </div>
    </section>
  );
}
