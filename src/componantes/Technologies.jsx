import React from 'react';
import TechnologyCard from './TechnologyCard';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaReact, FaFire, FaDatabase, FaGithubAlt,  } from 'react-icons/fa'; // Example icons

const technologies = [
    { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS' },
    { icon: <FaJs className="text-yellow-500" />, label: 'JavaScript' },
    { icon: <FaNodeJs className="text-green-500" />, label: 'Node JS' },
    { icon: <FaFire className="text-orange-400" />, label: 'Firebase' },
    { icon: <FaDatabase className="text-green-400" />, label: 'MongoDB' },
    { icon: <FaReact className="text-blue-400" />, label: 'ReactJS' },
    { icon: <FaGithubAlt className="text-gray-300" />, label: 'GitHub' },
    // { icon: <FaMaterialize className="text-blue-600" />, label: 'Material UI' },
];

const Technologies = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-10 bg-gray-800">
            {technologies.map((tech, index) => (
                <TechnologyCard key={index} icon={tech.icon} label={tech.label} />
            ))}
        </div>
    );
};

export default Technologies;