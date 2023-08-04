import React from 'react'

import CourseCards from './CourseCards'
export default function
    () {

    const courseData = [
        {

            title: 'Module 1: Introduction and working with data',
            topics: ['Overview of the data science approaches',
                'Types and sources of data',
                'Introduction to R, python and excel',
                'Data exploration',
                'Data cleaning, remediation and harmonization'
            ],
        },
        {

            title: 'Module 2: Inferential statistics and comparative data sciences',
            topics: [
                'Concept of random variables',
                'Measures of centrality and deviation',
                'Probability distributions and sampling distributions',
                'Rank statistics',
                'Parametric and non - parametric tests',
            ],
        },
        {

            title: 'Module 3: Modelling and machine learning',
            topics: [
                'Introductory linear algebra',
                'Supervised and unsupervised learning and clustering',
                'Regression models and feature selection',
                'Dimensionality reduction approaches',
                'Different kinds of machine learning approaches',

            ]
        },
        {

            title: 'Module 4: Data visualization',
            topics: [
                'Advanced data visualization schemes for continuous and categorical data',
                'Data visualization packages like ggplot and seaborn for improved data visualization',
                'Interactive data visualization',
                'Three- dimensional data visualization',
                'Geospatial data visualization',

            ]

        },
        {
            title: "Module 5: Advanced data sciences",
            topics: [
                'Introduction to artificial intelligence and neural networks',
                'Different types of neural networks',
                'Deep neural networks',
                'Applications of AI and deep neural networks',
                'Interpretability',
                'Nature language processing',
                'Language models',

            ]

        },
        {
            title: "Module 6: Data science in health care",
            topics: [
                'Introduction to data ethics',
                'Real life case studies on data driven health sciences with social impact'

            ]

        },
        {
            title: "Module 7: Data science in climate emergency",
            topics: [
                'Climate science and types',
                'Real life case studies on data driven climate sciences with social impact'

            ]

        },
        {
            title: "Module 8: Data science: Intersectionality and representativeness of data",
            topics: [
                'Intersectionality and social datasets',
                'Data gathering and representativeness of data',
                'Intersectionality and representativeness in datasets and its impact on data driven strategies',
                'Case studies about representativeness and intersectionality in datasets',
                'Citizen data science',

            ]

        },
        {
            title: "Module 9: Future perspectives",
            topics: ["Futuristic developments in data science: chatGPT etc"]

        },
    ]


    return (
        <div>
            
            <h1 className="text-3xl font-bold text-gray-900 text-center my-5 mt-10">Tentative Course Structure *</h1>
            <h1 className="text-xl text-gray-900 text-center mx-8">* Subject to the final approval by the Senate</h1>


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

