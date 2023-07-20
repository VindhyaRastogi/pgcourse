import React from 'react';

const FacultyCards = ({ name, department, specialization, link, imageOfProf }) => {
    return (
        <div className="bg-white items-center shadow-md rounded-lg p-6 mx-10 my-5 flex flex-col text-center justify-center w-80 hover:shadow-xl">
            <a href={link} target="_blank">
                <img className="mb-2 center h-24" src={imageOfProf} alt="" />
            </a>
            <a href={link} target="_blank">

                {!(department) && <h3 className="text-sm font-bold">{name}</h3>}
                {(department) && <h3 className="text-lg font-bold">{name}</h3>}

                {department && <p className="text-gray-700 mt-2">{department}</p>}
                {specialization && <div className="mt-4">
                    <p className="text-sm text-gray-500">{specialization}</p>
                </div>}

            </a>
        </div>
    );
};

export default FacultyCards;