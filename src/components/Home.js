import React from 'react'
import iiitd_buiilding from "../assets/iiitd_building.jpg"
export default function Home() {
  return (

    <div className="relative flex items-center justify-center">
      <div className="absolute z-10 bg-gray-900 bg-opacity-80 justify-center">
        <h1 className="mx-10 text-3xl font-bold text-white text-center m-10">Post-Graduate Diploma in Data Science in Health and Climate Change for Social Impact</h1>
        <h1 className="mx-10 text-3xl font-bold text-white text-center m-5">Hands-on experience | Internship | 36 weeks Program</h1>
      </div>
      <img src={iiitd_buiilding} alt="" className="w-screen h-[30rem] object-cover"/>
    </div>
  )
}
