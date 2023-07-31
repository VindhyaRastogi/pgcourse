import React from 'react'
import iiitd_buiilding from "../assets/iiitd_building.jpg"
import artpark_logo from "../assets/artpark_logo.png"
import artpark_logo_t from "../assets/artpark_logo_t.png"
import jpal_logo from "../assets/jpal_logo.png"
import dataorg from "../assets/dataorg_logo.png"
import iiitd from "../assets/iiitd_logo.png"
import pic5 from "../assets/circle.png"
import Banner from './Banner'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="relative flex flex-col items-center justify-center w-screen">
        <div className="min-[550px]:mr-20 min-[550px]:ml-20 absolute z-10 bg-gray-900 bg-opacity-80 justify-center">
          <h1 className="min-[550px]:text-4xl min-[550px]:mx-16 mx-10 text-2xl font-bold text-white text-center m-10">Post-Graduate Diploma in Data Science in Health and Climate Change for Social Impact</h1>
          <h1 className="min-[550px]:text-3xl min-[550px]:mx-16 mx-10 text-2xl font-bold text-white text-center m-5">Hands-on experience | Internship Opportunities | 36 weeks Hybrid Program</h1>
        </div>
        <img src={iiitd_buiilding} alt="" className="w-screen h-[30rem] object-cover" />
      </div>
      <div className="keyFeatures">
        <div style={{ justifyContent: "space-evenly" }} className="flex flex-wrap justify-center mt-4">
          <div className="" style={{ width: "22rem" }}>
            <img className="mt-2 mb-4" src={iiitd} alt="iiitd" />
          </div>
          <div className="" style={{ width: "18rem" }}>
            <img className="mt-2 mb-4" src={dataorg} alt="dataorg" />
          </div>
          <div className="" style={{ width: "18rem" }}>
            <img className="mt-2 mb-4" src={jpal_logo} alt="j-pal" />
          </div>
          <div className="mr-10" style={{ width: "21rem" }}>
            <img className="mt-2 mb-4" src={artpark_logo_t} alt="artpark" />
          </div>
        </div>
      <Banner/>
        <h1 className="text-3xl mt-4 font-bold text-gray-900 text-center">Program Features</h1>
        <div className="mx-10 flex justify-center">
          <div className="m-5 w-flex justify-center inline-block">
            <p className='mb-5 mx-5 text-gray-700' style={{ fontSize: '1.5rem', fontFamily: "sans-serif" }}>Learn to make data-driven decisions through one of the best data science programs that promises to deliver a  high-end learning experience leveraging the acaedemic excellence of IIIT-Delhi</p>

            <ul className="list-disc space-y-4 mx-4 list-disc">

              <li className="flex items-center ">
                <img className="w-2 h-2 mr-2" src={pic5} alt="Point 1" />
                <span className="text-xl">Global data science experts lead trainings and classes delivered by distinguished IIIT-Delhi faculty members in the area of health, climate and social sciences</span>
              </li>
              <li className="flex items-center inline-block">
                <img className="w-2 h-2 mr-2" src={pic5} alt="Point 1" />
                <span className="text-xl">Specifically designed for students/professionals aiming for hands-on experience in data science</span>
              </li>
              <li className="flex items-center inline-block">
                <img className="w-2 h-2 mr-2" src={pic5} alt="Point 1" />
                <span className="text-xl">Applied learning with hands-on projects using real-time data</span>
              </li>
              <li className="flex items-center inline-block">
                <img className="w-2 h-2 mr-2" src={pic5} alt="Point 1" />
                <span className="text-xl">Internship and Fellowship opportunities </span>
              </li>

            </ul>
          </div>
        </div>
        <span className="flex justify-center text-xl mb-4">
          <h2 className="font-semibold mb-12 mx-8"> Highly subsidised fee of just <b style={{ fontSize: "2rem" }} className="text-xl text-blue-500">Rs. 25,000/-</b> for the first two years</h2>
        </span>
      </div>
    </div>
  )
}
