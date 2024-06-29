import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [isRed, setIsRed] = useState(true);

    // Function to toggle the text color between red and white
    const toggleColor = () => {
        setIsRed((prevIsRed) => !prevIsRed);
    };

    // Use useEffect to handle the color toggle every 1 second (1000 ms)
    useEffect(() => {
        const interval = setInterval(toggleColor, 500);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="mt-4 w-full transition-colors py-2 bg-teal-500 flex items-center justify-center text-lg font-bold flex-col">
            {/* <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Selection process has ended</p>
            <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Successful applicants have been informed about their admission.</p> */}
            {/* <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Classes begin in September 2023.</p> */}
            {/* <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Applications are under review</p> */}
            <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Applications open from 5th July 2024 to 31st July 2024</p>
            <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Selected candidates must pay the online fee by 21st August 2024.</p>
            <p className={isRed ? 'text-red-600 mx-16' : 'text-white mx-16'} >Classes begin on 1st September 2024.</p>

        </div>
    );
};

export default Banner;
