import React from 'react';
import iiitd_buiilding from "../assets/iiitd_building.jpg"
const Fees = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <div className="relative flex flex-col items-center justify-center w-screen">
                <div className="absolute z-10 bg-gray-900 bg-opacity-90 justify-center">
                    <ul className="list-disc mx-10 text-2xl font-bold text-white m-5">
                        <li className= "ml-8 my-5 text-base lg:text-base md:text-sm">Rs. 25000 for one year program (highly subsidized for only the first two years).</li>
                        <li className= "ml-8 my-5 text-base lg:text-base md:text-sm">Includes access to library resources and other course material.</li>
                        <li className= "ml-8 my-5 text-base lg:text-base md:text-sm">Inclusion into the IIITD alumni network upon completion of the course.</li>
                    </ul>
                </div>
                <img src={iiitd_buiilding} alt="" className="w-screen h-[30rem] object-cover" />
            </div>
        </div >
    );
};

export default Fees;