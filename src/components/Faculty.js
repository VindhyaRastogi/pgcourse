import React from 'react'
import FacultyCards from './FacultyCards'
import DepartmentCards from './DepartmentCards'

export default function Faculty() {

    const cardsData = [
        {

            name: 'Dr. Tarini Shankar Ghosh',
            department: 'Computational Biology',
            specialization: 'Human Microbiome Data Science',
            link: "https://www.iiitd.ac.in/tarini"
        },
        {

            name: 'Dr. Jaspreet Kaur',
            department: 'Computational Biology',
            specialization: 'Cancer Genomics, Personalized Medicine',
            link: "https://www.iiitd.ac.in/jaspreet"
        },
        {

            name: 'Dr. Venkata Ratandeep Suri',
            department: 'Social Sciences & Humanities',
            specialization: 'E-Health, M-Health, ICTs and Health behavior',
            link: "https://www.iiitd.ac.in/ratan"
        },
        {

            name: 'Dr. Tavpritesh Sethi',
            department: 'Computational Biology',
            specialization: 'AI/ML for Clinical and Public Health, Digital Health',
            link: "https://www.iiitd.ac.in/tavpritesh"
        }
    ];
    const bioFaculty = [
        {

            name: 'Dr. N. Arul Murugan',
            link: "https://www.iiitd.ac.in/arulmurugan"
        },
        {

            name: 'Dr. Debarka Sengupta',
            link: "https://www.iiitd.ac.in/debarka"
        },
        {

            name: 'Dr. Ganesh Bagler',
            link: "https://www.iiitd.ac.in/bagler"
        },
        {

            name: 'Dr. Gaurav Ahuja',
            link: "https://www.iiitd.ac.in/gauravahuja"
        },
        {

            name: 'Dr. Vibhor Kumar',
            link: "https://www.iiitd.ac.in/vibhork"
        },
        {

            name: 'Dr. Tarini Shankar Ghosh',
            link: "https://www.iiitd.ac.in/tarini"
        },
        {

            name: 'Dr. Jaspreet Kaur',
            link: "https://www.iiitd.ac.in/jaspreet"
        },
        {

            name: 'Dr. Tavpritesh Sethi',
            link: "https://www.iiitd.ac.in/tavpritesh"
        }
     
    ];
    const sshFaculty = [
        {

            name: 'Dr. Venkata Ratandeep Suri',
            link: "https://www.iiitd.ac.in/ratan"
        },
        {

            name: 'Dr. Manohar Kumar',
            link: "https://www.iiitd.ac.in/manohark"
        },
        {

            name: 'Dr. Gaurav Arora',
            link: "https://www.iiitd.ac.in/gaurava"
        },
       
    ];
    const cseFaculty = [
        {

            name: 'Dr. Ojaswa Sharma',
            link: "https://www.iiitd.ac.in/ojaswa"
        },
        {

            name: 'Dr. Vikram Goyal',
            link: "https://www.iiitd.ac.in/vikram"
        },
        {

            name: 'Dr. Pravesh Biyani',
            link: "https://www.iiitd.ac.in/praveshb"
        },
      
    ];


    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Program Coordinators</h1>

            <div className="flex flex-wrap justify-center">
                {cardsData.map((card) => (
                    <FacultyCards

                        name={card.name}
                        department={card.department}
                        specialization={card.specialization}
                        link={card.link}
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in computer sciences</h1>

            <div className="flex flex-wrap justify-center">
                {cseFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                       
                        link={card.link}
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in social sciences</h1>

            <div className="flex flex-wrap justify-center">
                {sshFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                       
                        link={card.link}
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in computational biology</h1>

            <div className="flex flex-wrap justify-center mb-12">
                {bioFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                       
                        link={card.link}
                    />
                ))}
            </div>
            {/* <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Teaching Faculty</h1> */}
            {/* <div className="flex flex-wrap justify-center">

                <DepartmentCards
                    title="Computational Biology"
                    facultyMembers={bioFaculty}
                />
                <DepartmentCards
                    title="Social Sciences & Humanities"
                    facultyMembers={sshFaculty}
                />
                <DepartmentCards
                    title="Computer Science"
                    facultyMembers={cseFaculty}
                />
            </div> */}

        </div>
    )
}
