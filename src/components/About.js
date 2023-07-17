import React from 'react'
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
export default function
    () {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center">Program Features</h1>
            <div className="keyFeatures">
                <div className="flex justify-center">
                    <div className="m-10 w-flex justify-center inline-block">
                        <p className='m-5 text-gray-700' style={{ fontSize: '1.5rem', fontFamily: "sans-serif" }}>Learn to make data-driven decisions through one of the best data science programs that promises to deliver a  high-end learning experience leveraging the acaedemic excellence of IIIT-Delhi</p>

                        <ul className="list-disc space-y-4">

                            <li className="flex items-center">
                                <img className="w-6 h-6 mr-2" src={pic1} alt="Point 1" />
                                <span className="text-xl">Global data science experts lead training in the area of health, climate and social sciences</span>
                            </li>
                            <li className="flex items-center inline-block">
                                <img className="w-6 h-6 mr-2" src={pic2} alt="Point 1" />
                                <span className="text-xl">Specifically designed for students/professionals aiming for hands-on experience in data science</span>
                            </li>
                            <li className="flex items-center inline-block">
                                <img className="w-6 h-6 mr-2" src={pic3} alt="Point 1" />
                                <span className="text-xl">Classes delivered by distinguished IIIT-Delhi faculty members</span>
                            </li>
                            <li className="flex items-center inline-block">
                                <img className="w-6 h-6 mr-2" src={pic1} alt="Point 1" />
                                <span className="text-xl">Applied learning with hands-on projects using real-time data</span>
                            </li>
                            <li className="flex items-center inline-block">
                                <img className="w-6 h-6 mr-2" src={pic4} alt="Point 1" />
                                <span className="text-xl">Internship opportunities with leading organisations in the domain (optional)</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <span className="flex justify-center text-xl">
                    <h2 className="font-semibold"> Highly subsidised fee of just <b style={{ fontSize: "2rem" }} className="text-xl text-blue-500">Rs. 25,000/-</b> for the first two years</h2>
                </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center my-5 mt-10">Detailed Structure</h1>


            <div className="keyFeatures">
                <div className="flex justify-center">
                    <div className="m-10 w-flex justify-center inline-block">
                        <table>
                            <thead>
                                <tr>
                                    <th>Column 1</th>
                                    <th>Column 2</th>
                                    <th>Column 3</th>
                                    <th>Column 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Row 1, Cell 1</td>
                                    <td>Row 1, Cell 2</td>
                                    <td>Row 1, Cell 3</td>
                                    <td>Row 1, Cell 4</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Cell 1</td>
                                    <td>Row 2, Cell 2</td>
                                    <td>Row 2, Cell 3</td>
                                    <td>Row 2, Cell 4</td>
                                </tr>
                                <tr>
                                    <td>Row 3, Cell 1</td>
                                    <td>Row 3, Cell 2</td>
                                    <td>Row 3, Cell 3</td>
                                    <td>Row 3, Cell 4</td>
                                </tr>
                                <tr>
                                    <td>Row 4, Cell 1</td>
                                    <td>Row 4, Cell 2</td>
                                    <td>Row 4, Cell 3</td>
                                    <td>Row 4, Cell 4</td>
                                </tr>
                                <tr>
                                    <td>Row 5, Cell 1</td>
                                    <td>Row 5, Cell 2</td>
                                    <td>Row 5, Cell 3</td>
                                    <td>Row 5, Cell 4</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                
            </div>

        </div>
    )
}

