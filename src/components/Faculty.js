import React from 'react'
import FacultyCards from './FacultyCards'

export default function Faculty() {

    const cardsData = [
        {
         
            name: 'Dr. Tarini Shankar Ghosh',
            department: 'Computational Biology',
            specialization: 'Human Microbiome Data Science',
        },
        {
       
            name: 'Dr. Jaspreet Kaur',
            department: 'Computational Biology',
            specialization: 'Cancer Genomics, Personalized Medicine',
        },
        {
    
            name: 'Dr. Venkata Ratandeep Suri',
            department: 'Social Sciences & Humanities',
            specialization: 'E-Health, M-Health, ICTs and Health behavior',
        },
        {
    
            name: 'Dr. Tavpritesh Sethi',
            department: 'Computational Biology',
            specialization: 'AI/ML for Clinical and Public Health, Digital Health',
        }
    ];


    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center m-10">IIIT-Delhi Faculty</h1>

            <div className="flex flex-wrap justify-center">
                {cardsData.map((card) => (
                    <FacultyCards
                       
                        name={card.name}
                        department={card.department}
                        specialization={card.specialization}
                    />
                ))}
            </div>
          
        </div>
    )
}
