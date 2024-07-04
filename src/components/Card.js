import React from 'react';

const Card = ({ text, subtext }) => {
  return (
    <div className="bg-white h-[22rem] shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-xl italic mb-8 text-justify">{text}</h2>
      <p className="text-gray-600 text-right">{subtext}</p>
    </div>
  );
};

export default Card;
