import React from 'react';

const TechnologyCard = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-2">{icon}</div>
            <span className="font-semibold text-white">{label}</span>
        </div>
    );
};

export default TechnologyCard;