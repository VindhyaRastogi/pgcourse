import React from 'react'

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
            topics: [
                'Intersectionality and social datasets',
                'Data gathering and Representativeness of Data',
                'Intersectionality and Representativeness in Datasets and its impact on data driven strategies',
                'Case studies about Representativeness and intersectionality in datasets',
                'Citizen Data Science',

            ]

        },
        {
            title: "Course 9: Future Perspectives",
            topics: ["Futuristic developments in Data Science: chatGPT etc"]

        },
    ]


    return (
        <div>
            
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

