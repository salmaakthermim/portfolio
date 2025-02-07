import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Online Group-Study',
        description: 'Time to get productive! Our study with me live app has everything you need to manage your workload and have more efficient study sessions.',
        image: 'https://i.ibb.co.com/DccdxZg/Screenshot-9.png',
        demoLink: '#', 
        detailsLink: '#', 
    },
    {
        title: 'DONATE BLOOD',
        description: 'We welcome you to learn more about eligibility and benefits of donating blood with a trusted organization like us. Find out more about local blood drives.',
        image: 'https://i.ibb.co.com/SXt8WGdf/Screenshot-8.png',
        demoLink: '#',
        detailsLink: '#',
    },
    {
        title: 'Crowdcube: A Crowdfunding Application',
        description: 'Crowdcube is a responsive, user-friendly platform for hosting and supporting...',
        image: 'https://i.ibb.co.com/p6kpZNBL/Screenshot-7.png',
        demoLink: '#',
        detailsLink: '#',
    },
    {
        title: 'Peddy - Pet Adoption',
        description: 'Peddy is an intuitive platform that allows users to browse and adopt pets. The platform provides detailed information about each pet, making it easier for potential',
        image: 'https://i.ibb.co.com/zVVqDQTG/Screenshot-10.png',
        demoLink: '#', 
        detailsLink: '#', 
    },
    {
        title: 'BPL-DREAM 11',
        description: 'BPL-DREAM 11 is an interactive web application where users can select and manage cricket players for their dream team. Inspired by fantasy leagues, this project allows ',
        image: 'https://i.ibb.co.com/mVVnhycQ/Screenshot-11.png',
        demoLink: '#',
        detailsLink: '#',
    },
    {
        title: 'GadgetHaven - E-Commerce Platform',
        description: 'GadgetHaven is an e-commerce platform for gadget lovers! This platform is designed to provide a seamless experience for users to browse, add to cart, and wishlist ',
        image: 'https://i.ibb.co.com/99pSL7nc/Screenshot-12.png',
        demoLink: '#',
        detailsLink: '#',
    },
];

const Project = () => {
    return (
        <div className="flex justify-around flex-wrap" data-aos="fade-up">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    demoLink={project.demoLink}
                    detailsLink={project.detailsLink}
                />
            ))}
        </div>
    );
};

export default Project;
