import React from 'react';

const FacultyCards = ({ name, department, specialization }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-10 my-5 text-center w-80">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-700 mt-2">{department}</p>
            <div className="mt-4">
                <p className="text-sm text-gray-500">{specialization}</p>
            </div>
        </div>
    );
};

export default FacultyCards;