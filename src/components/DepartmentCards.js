import React from 'react';
import FacultyCards from './FacultyCards';
const DepartmentCards = ({ title,facultyMembers }) => {
    return (
        <div className="container bg-gray-100 shadow-md rounded-lg p-6 mx-10 my-5 text-center w-1/5">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex flex-wrap justify-center">
                {facultyMembers.map((card) => (
                    <FacultyCards

                        name={card.name}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default DepartmentCards;