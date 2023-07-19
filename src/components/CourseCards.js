import React from 'react';

const CourseCards = ({ title, topics }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-10 my-5 sm:9/12 md:w-4/5 lg:w-2/5">
            <h3 className="lg:text-xl md:text-base sm:text-[0.5rem] mb-2 font-bold">{title}</h3>
            {/* <div class="text-lg  lg:text-sm">Responsive Text</div> */}
            <ul className="list-disc ml-4">
                {topics.map((item, index) => (
                    <li className = "mb-2" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCards;