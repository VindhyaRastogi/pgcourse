import React from 'react';
import iiitd_buiilding from "../assets/iiitd_building.jpg"
const Fees = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <div className="relative flex flex-col items-center justify-center w-screen">
                <div className="absolute mx-20 z-10 bg-gray-900 bg-opacity-90 justify-center">
                    <ul className="list-disc text-2xl font-bold text-white m-5">
                        <li className= "ml-8 my-5 text-base min-[550px]:pr-2 min-[550px]:pl-2 min-[550px]:text-3xl text-sm">Rs. 25000 for one year program (highly subsidized for only the first two years).</li>
                        <li className= "ml-8 my-5 text-base min-[550px]:pr-2 min-[550px]:pl-2 min-[550px]:text-3xl text-sm">Includes access to library resources and other course material.</li>
                        <li className= "ml-8 my-5 text-base min-[550px]:pr-2 min-[550px]:pl-2 min-[550px]:text-3xl text-sm">Inclusion into the IIITD alumni network upon completion of the course.</li>
                        <li className= "ml-8 my-5 text-base min-[550px]:pr-2 min-[550px]:pl-2 min-[550px]:text-3xl text-sm">Last date to submit the fees is 21st August 2024</li>
                    </ul>
                </div>
                <img src={iiitd_buiilding} alt="" className="w-screen h-[30rem] object-cover" />
            </div>
        </div >
    );
};

export default Fees;