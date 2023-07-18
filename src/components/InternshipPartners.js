import React from 'react'
import artpark from "../assets/artpark_logo.png"
import jpal from "../assets/jpal_logo.png"
export default function InternshipPartners() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Internship Partners</h1>
            <div className="internpartners">
                <div className="flex flex-wrap justify-center">
                    <div className="m-10 w-1/2">
                        <img
                            src={artpark}
                            alt="Left Image"
                           
                        />
                    </div>
                    <div className="m-10 w-1/3">
                        <img
                            src={jpal}
                            alt="Right Image"
                         
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
