import React from 'react'
import artpark from "../assets/artpark_logo.png"
export default function InternshipPartners() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Internship Partners</h1>
            <div className="internpartners">
                <div className="flex justify-between">
                    <div className="m-10 w-1/2">
                        <img
                            src={artpark}
                            alt="Left Image"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="m-10 w-1/2">
                        <img
                            src={artpark}
                            alt="Left Image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
