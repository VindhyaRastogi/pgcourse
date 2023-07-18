import React from 'react';

const CourseCards = ({ title, topics }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-10 my-5 w-80">
            <h3 className="text-xl mb-2 font-bold">{title}</h3>
            <ul className="list-disc ml-4">
                {topics.map((item, index) => (
                    <li className = "mb-2" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCards;