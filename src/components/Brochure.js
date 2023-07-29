import React from 'react'
import brochure_pdf from './brochure.pdf'
export default function Brochure() {
    return (

        <a href={brochure_pdf} target="_blank">
            <div className="z-20 -translate-x-[3.6rem] fixed top-1/2 left-0 rotate-[90deg] translate-y-1/2 p-4 rounded-t-lg bg-teal-500 text-white ">
                Download Brochure
            </div>
        </a>
    );

}
