import React from 'react'

import CourseCards from './CourseCards'
export default function
    () {

    const courseData = [
        {

            title: 'Module 1: Introduction to Health and Climate Data',
            topics: [
                {
                    subtitle: 'Introduction to Statistics and Data Science',
                    contents: [
                        'Overview of the Program: Unique Opportunities and Challenges',
                        'Overview of Data Science Approaches',
                        'Introduction to R, python and excel',
                        'Types of Data',
                        'Open Sources of Data, Introduction to the Key Datasets for the Curriculum',
                        'Generating Your Own Data: Study Design']
                }
            ],
        },
        {

            title: 'Module 2: Working with Data',
            topics: [
                {
                    subtitle: 'Introduction to Excel, R and Python',
                    contents: [
                        'Introduction to Excel, R & Python',
                        'Reading and Writing Data using R & Python',
                        'Basic Exploration of Data',
                        'Data Quality (Seeing and Analyzing)',
                        'Remediation Approaches (Filtering, Transformations, Imputation)',
                        'Real World Example Summarizing the module',]
                }
            ],
        },
        {

            title: 'Module 3: Inferential Statistics and Comparative Data Sciences',
            topics: [
                {
                    subtitle: 'Basics of Biostatistics',
                    contents: [

                        'Getting Data into Shape (Long and Wide Data) ',
                        'Random variable and probability',
                        'Measures of Centrality and Deviation',
                        'Probability Distributions: Discrete and Continuous',
                        'Moments of distributions (mean, variance, skewness, kurtosis) ',
                        'Probability Density Function and Cumulative Density Function ',
                        'CLT and Normal Distribution ',
                        'Sampling distributions (e.g., sampling distribution of the mean) ',
                        'Central Limit Theorem',
                        'Histograms, Density Plots, Boxplots, Violin Plots (normal approximation to binomial)',
                    ]
                },
                {
                    subtitle: 'Foundational Data Analytics',
                    contents: [
                        'Relationship between distributions (e.g., normal approximation to binomial)',
                        'Quantiles and Rank Statistics',
                        'Testing for Normality and Data Transformations',
                        'Statistical Inference: Parametric Tests',
                        'Statistical Inference: Non-parametric Tests',
                        'Real World Example Summarizing the module',
                    ]

                }

            ]
        },
        {

            title: 'Module 4: Modelling and Basic Machine Learning for Health and Climate Applications',
            topics: [
                {
                    subtitle: "Linear Algebra and Regression Models",
                    contents: [
                        'Introductory Linear Algebra',
                        'Supervised and Unsupervised Learning',
                        'Regression: Linear Model General Linear Model',
                        'Classification: Logistic Regression and Multinomial Model',
                        'Variable Selection: Stepwise approaches',

                    ]
                },
                {
                    subtitle: "Machine Learning",
                    contents: [

                        'Introduction to Machine Learning & Bayes Theorem',
                        'High Dimensional Data: Principal Component Analysis and t-SNE',
                        'Machine Learning Approaches: Decision Tree, Neural Networks. SVM, Random Forest, Bayesian Networks',
                        'Overfitting and Generalization',
                        'Regularization: Lasso, Ridge and Elastic Net Regression',
                        'Unsupervised Learning: Clustering',
                        'Real World Example Summarizing the module',
                    ]
                }

            ]

        },
        {
            title: "Module 5: Visualization of Health and Climate Data",
            topics: [
                {
                    subtitle: "Advanced Visualization Techniques in Data Sciences",
                    contents: [
                        'Introduction to ggplot (R) and seaborn (python)',
                        'Advanced Visualization Strategies in Data Sciences e.g., heatmaps, sankey plots, radar charts, sunbursts, word clouds, waterplots, icicle plots',
                        'Interactive Data Visualization (using plotly, networkD3)',
                        '3D data visualization',
                        'Creating Dashboard',

                    ]
                }, {
                    subtitle: "Introduction to Geographical Data & Spatial Statistics",
                    contents: [

                        'Introduction to Spatial Data and Spatial Models: Geostatistical data; Lattice sata; and Point data.',
                        'Characterising Spatial Autocorrelation (Metrics) and Relevant Issues for Classical Regression Analysis;',
                        'Exploratory Spatial Data Analysis and Stationarity of Spatial Random Processes',
                        'Measuring Spatial Dependence and Spatial Heterogeneity',
                        'Environmental Pollution and Economic Growth application with hands-on exercises on ArcGIS and R',
                    ]
                }

            ]

        },
        {
            title: "Module 6: Advanced Data Science Applications in Health and Climate",
            topics: [
                {
                    subtitle: "Artificial Intelligence and Deep Neural Networks: Models in Health and Climate Data",
                    contents: [
                        'Introduction and Multi-layer perceptron',
                        'Introduction to TensorFlow and Feedforward Neural Networks',
                        'Activation Functions and Training Neural Networks',
                        'Learning from images: Convolutional Neural Networks (CNNs)',
                        'Learning from sequences: Recurrent Neural Networks (RNNs)',
                        'Applications of AI and Deep Neural Networks',
                        'Interpretability',

                    ]
                },
                {
                    subtitle: "Nature Language Processing",
                    contents: [
                        'Parts of Speech, Parsing, Ontologies, WordSense',
                        'Introduction to Modelling with Text: Real World Examples',
                        'Modelling Text: Hidden Markov Model, Recurrent Neural Networks, LSTMs',
                        'Word Embeddings & word2Vec',
                        'Transformer',
                        'BERT and its Applications',
                        'Social Media, Emotion Modeling, Chatbots & ChatGPT',

                    ]
                }

            ]

        },
        {
            title: "Module 7: Data science in Health Care",
            topics: [
                {
                    subtitle: "Data Ethics",
                    contents: [
                        'Introduction to Data Ethics',
                    ]
                },
                {
                    subtitle: "Data Driven Health Sciences with Social Impact Case Studies",
                    contents: [
                        'Each participating faculty is expected to demonstrate an actual health - related case study with demonstrated social impact. Preference will be on standard publicly available data sets that can be reused',
                    ]
                }

            ]

        },
        {
            title: "Module 8: Data Science in Climate Emergency",
            topics: [
                {
                    subtitle: "Data and Climate Science",
                    contents: [

                        'Different types of publicly available data products for studying climate change and emergency. Data driven models for climate predictions and projections.',
                    ]
                },
                {
                    subtitle: "Data Driven Climate Sciences with Social Impact Case Studies",
                    contents: [

                        'The module will cover data-driven case studies investigating the impact of climate change on rural communities, urban development, health and nutrition as well as studies linking climate change impact and public policy designs.',
                    ]

                }

            ]

        },
        {
            title: "Module 9: Data Science: Intersectionality and Representativeness of Data",
            topics: [
                {
                    subtitle: "",
                    contents: [
                        "Intersectionality and social datasets",
                        "Data gathering and representativeness of data",
                        "Intersectionality and representativeness in datasets and its impact on data driven strategies ",
                        "Case studies about representativeness and intersectionality in datasets",
                    ]

                },
            ]

        },
        {
            title: "Module 10: Futuristic Data Science Perspectives in Health and Climate",
            topics: [
                {
                    subtitle: "Future of Data Science",
                    contents: [

                        "Futuristic developments in Data Science applications in Health, Climate and Social Sciences",
                    ]
                }
            ]

        },
    ]


    return (
        <div>

            <h1 className="text-3xl font-bold text-gray-900 text-center my-5 mt-10">Course Structure</h1>
            {/* <h1 className="text-xl text-gray-900 text-center mx-8">* Subject to the final approval by the Senate of IIIT Delhi</h1> */}


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

