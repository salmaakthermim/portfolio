import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from 'lottie-react'
import LottieJSON from '../assets/loty/davlopar.json'
import { FaFacebook, FaGithub, FaLinkedinIn,  } from "react-icons/fa";


export default function Hero() {

    const socialMedia = [
        { icon: <FaGithub />, link: "https://github.com/salmaakthermim" },
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/salma-akther-mim-a3828534b/" },
        { icon: <FaFacebook />, link: "https://web.facebook.com/SunHee85" },
    ];
    return (
        <div>
            <div className="min-h-screen py-40 ">
                <div className=" lg:flex items-center gap-20 justify-center px-6">
                <div className="max-w-4xl ">
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-block bg-purple-900/20 px-4 mt-10 rounded-full text-purple-500 font-semibold text-sm"
                    >
                        🚀 Ready to Innovate
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
                        <span className="">Frontend</span>{" "}
                        <br />
                        <span className="text-purple-500">Developer</span>
                    </h1>

                    {/* Typing Animation */}
                    <TypeAnimation
                        sequence={["SEO Specialist", 2000, "Web Developer", 2000, "React Expert", 2000]}
                        speed={50}
                        wrapper="h2"
                        className="text-2xl text-gray-400 mt-4"
                        repeat={Infinity}
                    />

                    {/* Description */}
                    <p className="mt-4 text-gray-300 text-2xl">
                        Crafting innovative, functional, and user-friendly websites for seamless digital solutions.
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap  gap-3">
                        {["React", "Tailwind", "Firebase", "Node.js", "MongoDB"].map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex  gap-4">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="px-6 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2"
                        >
                            Resume
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2"
                        >
                            Contact
                        </motion.a>
                    </div>


                </div>
                {/* Floating Image */}
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={LottieJSON}></Lottie>
                </div>
                </div>
                <div className="flex gap-6  mt-8">
                {socialMedia.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-gray-300 text-2xl transition hover:text-white"
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
         

            </div>
         
        </div>
    );
}
