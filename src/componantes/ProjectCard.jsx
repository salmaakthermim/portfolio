import React from "react";

const ProjectCard = ({ title, description, image, demoLink, detailsLink }) => {
  return (
    <div className=" mt-20 text-white rounded-lg shadow-lg  p-5 m-4 w-80 " data-aos="zoom-in">
      <img src={image} alt={title} className="rounded-lg w-full  h-40 object-cover" />
      <h3 className="text-lg font-bold mt-3">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <div className="mt-4 flex justify-between">
        <a href={demoLink} className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={detailsLink} className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Details</a>
      </div>
    </div>
  );
};

export default ProjectCard;
