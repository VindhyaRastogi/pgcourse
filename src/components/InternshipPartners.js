import React from 'react'
import artpark from "../assets/artpark_logo.png"
import jpal from "../assets/jpal_logo.png"
export default function InternshipPartners() {
    return (
        <div>
           
            <div className="internpartners">
                <div className="flex flex-wrap justify-center">
                    <div className="m-10 w-1/2 text-center">
                        <h3 className="text-2xl mb-8 font-bold text-gray-900">Internship Partner</h3>
                        <img
                            src={artpark}
                            alt="Left Image"
                           
                        />
                        <a href="https://www.artpark.in/" target="_blank" class="inline-flex items-center justify-center text-blue-500 font-semibold hover:text-blue-700">
                            Learn More
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="m-10 w-1/3 text-center">
                        <h3 className="text-2xl mb-4 font-bold text-gray-900">Fellowship Partner</h3>
                        <img
                            src={jpal}
                            alt="Right Image"
                         
                        />
                        <a href="https://www.povertyactionlab.org/south-asia" target="_blank" class="inline-flex items-center justify-center text-blue-500 font-semibold hover:text-blue-700">
                            Learn More
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
