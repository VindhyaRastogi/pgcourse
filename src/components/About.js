import React from 'react'
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import CourseCards from './CourseCards'
export default function
    () {

    const courseData = [
        {

            title: 'Course 1: Introduction and working with Data',
            topics: ['Overview of the Data Science Approaches',
                'Types and sources of Data',
                'Introduction to R, Python and Excel',
                'Data exploration',
                'Data cleaning, remediation and harmonization'
            ],
        },
        {

            title: 'Course 2: Inferential Statistics and Comparative Data Sciences',
            topics: [
                'Concept of Random Variables',
                'Measures of Centrality and Deviation',
                'Probability Distributions and Sampling Distributions',
                'Rank Statistics',
                'Parametric and Non - parametric Tests',
            ],
        },
        {

            title: 'Course 3: Modelling and Machine Learning',
            topics: [
                'Introductory Linear Algebra',
                'Supervised and Unsupervised learning and Clustering',
                'Regression models and feature selection',
                'Dimensionality Reduction Approaches',
                'Different kinds of Machine Learning Approaches',

            ]
        },
        {

            title: 'Course 4: Data Visualization',
            topics: [
                'Advanced Data Visualization Schemes for continuous and categorical data',
                'Data visualization packages like ggplot and seaborn for improved data visualization',
                'Interactive data visualization',
                'Three- dimensional data visualization',
                'Geospatial Data Visualization',

            ]

        },
        {
            title: "Course 5: Advanced Data Sciences",
            topics: [
                'Introduction to Artificial Intelligence and Neural Networks',
                'Different types of Neural Networks',
                'Deep Neural Networks',
                'Applications of AI and Deep Neural Networks',
                'Interpretability',
                'Nature Language Processing',
                'Language Models',

            ]

        },
        {
            title: "Course 6: Data Science in Health Care",
            topics: [
                'Introduction to Data Ethics',
                'Real life case studies on data driven health sciences with social impact'

            ]

        },
        {
            title: "Course 7: Data Science in Climate Emergency",
            topics: [
                'Climate Science and Types',
                'Real life case studies on data driven climate sciences with social impact'

            ]

        },
        {
            title: "Course 8: Data Science: Intersectionality and Representativeness of Data",
            topics: [""]

        },
        {
            title: "Course 9: Future Perspectives",
            topics: ["Futuristic developments in Data Science: chatGPT etc"]

        },
    ]


    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center">Program Features</h1>
            <div className="keyFeatures">
                <div className="flex justify-center">
                    <div className="m-10 w-flex justify-center inline-block">
                        <p className='m-5 text-gray-700' style={{ fontSize: '1.5rem', fontFamily: "sans-serif" }}>Learn to make data-driven decisions through one of the best data science programs that promises to deliver a  high-end learning experience leveraging the acaedemic excellence of IIIT-Delhi</p>

                        <ul className="list-disc space-y-4 mx-4">

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
                        <div className="flex flex-wrap justify-center">
                            {courseData.map((card) => (
                                <CourseCards

                                    title={card.title}
                                    topics={card.topics}

                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

