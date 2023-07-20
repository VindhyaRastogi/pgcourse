import React from 'react'
import FacultyCards from './FacultyCards'
import DepartmentCards from './DepartmentCards'
import pic1 from '../assets/pic1.png';
import tghosh from '../assets/tghosh.PNG';
import amurugan from '../assets/amurugan.PNG';
import dsengupta from '../assets/dsengupta.PNG';
import gahuja from '../assets/gahuja.PNG';
import garora from '../assets/garora.PNG';
import gbagler from '../assets/gbagler.PNG';
import jkaur from '../assets/jkaur.PNG';
import osharma from '../assets/osharma.PNG';
import pbiyani from '../assets/pbiyani.PNG';
import rsuri from '../assets/rsuri.PNG';
import tsethi from '../assets/tsethi.PNG';
import vgoyal from '../assets/vgoyal.PNG';
import vkumar from '../assets/vkumar.PNG';
import mkumar from '../assets/mkumar.PNG';

export default function Faculty() {

    const cardsData = [
        {

            name: 'Dr. Tarini Shankar Ghosh',
            department: 'Computational Biology',
            specialization: 'Human Microbiome Data Science',
            link: "https://www.iiitd.ac.in/tarini",
            imageOfProf: tghosh
        },
        {

            name: 'Dr. Jaspreet Kaur',
            department: 'Computational Biology',
            specialization: 'Cancer Genomics, Personalized Medicine',
            link: "https://www.iiitd.ac.in/jaspreet",
            imageOfProf: jkaur
        },
        {

            name: 'Dr. Venkata Ratandeep Suri',
            department: 'Social Sciences & Humanities',
            specialization: 'E-Health, M-Health, ICTs and Health behavior',
            link: "https://www.iiitd.ac.in/ratan",
            imageOfProf: rsuri
        },
        {

            name: 'Dr. Tavpritesh Sethi',
            department: 'Computational Biology',
            specialization: 'AI/ML for Clinical and Public Health, Digital Health',
            link: "https://www.iiitd.ac.in/tavpritesh",
            imageOfProf: tsethi
        }
    ];
    const bioFaculty = [
        {

            name: 'Dr. N. Arul Murugan',
            link: "https://www.iiitd.ac.in/arulmurugan",
            imageOfProf: amurugan
        },
        {

            name: 'Dr. Debarka Sengupta',
            link: "https://www.iiitd.ac.in/debarka",
            imageOfProf: dsengupta
        },
        {

            name: 'Dr. Ganesh Bagler',
            link: "https://www.iiitd.ac.in/bagler",
            imageOfProf: gbagler
        },
        {

            name: 'Dr. Gaurav Ahuja',
            link: "https://www.iiitd.ac.in/gauravahuja",
            imageOfProf: gahuja
        },
        {

            name: 'Dr. Vibhor Kumar',
            link: "https://www.iiitd.ac.in/vibhork",
            imageOfProf: vkumar
        },
        {

            name: 'Dr. Tarini Shankar Ghosh',
            link: "https://www.iiitd.ac.in/tarini",
            imageOfProf: tghosh
        },
        {

            name: 'Dr. Jaspreet Kaur',
            link: "https://www.iiitd.ac.in/jaspreet",
            imageOfProf: jkaur
        },
        {

            name: 'Dr. Tavpritesh Sethi',
            link: "https://www.iiitd.ac.in/tavpritesh",
            imageOfProf: tsethi
        }
     
    ];
    const sshFaculty = [
        {

            name: 'Dr. Venkata Ratandeep Suri',
            link: "https://www.iiitd.ac.in/ratan",
            imageOfProf: rsuri
        },
        {

            name: 'Dr. Manohar Kumar',
            link: "https://www.iiitd.ac.in/manohark",
            imageOfProf: mkumar
        },
        {

            name: 'Dr. Gaurav Arora',
            link: "https://www.iiitd.ac.in/gaurava",
            imageOfProf: garora
        },
       
    ];
    const cseFaculty = [
        {

            name: 'Dr. Ojaswa Sharma',
            link: "https://www.iiitd.ac.in/ojaswa",
            imageOfProf: osharma
        },
        {

            name: 'Dr. Vikram Goyal',
            link: "https://www.iiitd.ac.in/vikram",
            imageOfProf: vgoyal
        },
        {

            name: 'Dr. Pravesh Biyani',
            link: "https://www.iiitd.ac.in/praveshb",
            imageOfProf: pbiyani
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
                        imageOfProf={card.imageOfProf}
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in Computer Sciences</h1>

            <div className="flex flex-wrap justify-center">
                {cseFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                        imageOfProf={card.imageOfProf}
                        link={card.link}
                        
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in Social Sciences</h1>

            <div className="flex flex-wrap justify-center">
                {sshFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                        link={card.link}
                        imageOfProf={card.imageOfProf}
                    />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">Expertise in Computational Biology</h1>

            <div className="flex flex-wrap justify-center mb-12">
                {bioFaculty.map((card) => (
                    <FacultyCards

                        name={card.name}
                        link={card.link}
                        imageOfProf={card.imageOfProf}
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
