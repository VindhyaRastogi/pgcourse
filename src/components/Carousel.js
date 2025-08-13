import React, { useState, useEffect } from "react";
import Card from "./Card"; // Assuming Card component is defined elsewhere
import "./carousel.css"; // Import your custom carousel styles

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const cards = [
    {
      text: "The PGD-DSHCS Program enhanced my skills in data preprocessing, analysis, and machine learning using tools like Python, R, and QGIS. The practical, well-structured course deepened my understanding and application of data science, making it highly valuable and recommendable.",
      subtext:
        "~ Rahul Kumar Verma Young Professional at National Institute for Plant Biotechnology, Pusa Campus, New Delhi Batch: (2024-25)",
    },
    {
      text: "This well-designed course greatly enhanced my coding skills and expanded my knowledge in climate change and health. It prepared me for roles in data science, teaching, and research. With hands-on experience in R, Python, GIS, Machine Learning, and NLP, I now confidently apply my skills to real-world challenges.",
      subtext:
        "~ S G Karthiga Assistant Professor at Sri Ramachandra Institute of Higher Education and Research Batch: (2024-25)",
    },
    {
      text: "The PGD–DSHCS course has significantly enhanced my understanding of data science and strengthened my skills in artificial intelligence and machine learning, particularly in their application to healthcare. It has inspired me to integrate these emerging technologies into both my academic research and clinical practice, especially in the areas of oncology and treatment planning.",
      subtext:
        "~ Dr. C.P Bhatt PhD, MCMPI, DipRP(BARC) Consultant Radiation Oncology Physicist Marengo Asia Hospital, Faridabad (Delhi NCR) Batch: (2024-25)",
    },
    {
      text: "Excellent course, great teaching, loved the hands on trainings.",
      subtext:
        "~ Chayan Roy Head of Monitoring, Evaluation and Learning at Jai Vakeel Foundation Batch: (2024-25)",
    },
    {
      text: "The course has helped me immensely to enhance my skills and understanding of data science, machine learning, deep learning, social and environmental aspects, climate change, GIS data, usage of Python and R language, various related case studies etc",
      subtext:
        "~ Abhilekh Kalita IT Consultant at Digifoxlabs Batch: (2024-25)",
    },
    {
      text: "This PGD-DSHCS Program has deepened my skills in analyzing complex data for social impact. It enhanced my understanding of the intersection between health, climate, and data, equipping me to address real-world challenges. A truly transformative course for a sustainable future.",
      subtext:
        "~ MD Jabed Hussain Research Scholar at MUIT Lucknow Batch: (2024-25)",
    },
    {
      text: "The PGD-DSHCS course was a transformative experience, combining data science with real-world applications in health and climate change. Its interdisciplinary approach broadened my perspective, especially through modules on epidemiology and geospatial analysis. It enhanced my skills in handling large datasets, statistical analysis, and building impactful machine learning models.",
      subtext:
        "~ Saurabh Kumar Senior Software Engineer, ServiceNow Batch: (2024-25)",
    },
    {
      text: "The Data Science in Health and Climate Change for Social Impact Program offered by IIIT Delhi aligns seamlessly with my aspirations. The program has outstanding features.The classes are led by global data science experts and distinguished faculty members, I highly recommend it to everyone who wishes to pursue a career in addressing real-world challenges through data-driven approaches.",
      subtext: "~ Aman Karunik Internship, NIELIT, Delhi Batch: (2023-24)",
    },
    {
      text: "The Post Graduate Diploma in Data Science at IIIT Delhi, offered in collaboration with Data.org, J-PAL, and ArtPark, is a groundbreaking program in India. It trains data scientists to tackle complex issues in health, climate change, and social impact through a unique multidisciplinary curriculum and hands-on approach, setting a new standard for data science education.",
      subtext:
        "~ Saiteja Pamu Sr. Research Executive - Public Affairs, Ipsos Research Private Limited, Gurugram Batch: (2023-24)",
    },
    {
      text: "Hello, I'm Vivek Kumar, 2023 cohort at IIIT Delhi. This program offers comprehensive learning, diverse networking opportunities, and inclusive teaching, ensuring understanding for learners with varied backgrounds. The faculty's expertise ensures a multidisciplinary approach, enriched by modules on data ethics and futuristic perspectives.",
      subtext:
        "~ Vivek Kumar Broadcast Engineer, TV18 Broadcast limited, Hyderabad Batch: (2023-24)",
    },
    {
      text: "The PGD-DSHCS course provides a distinct opportunity to delve into data science within health and social contexts. Interacting with diverse learners and supportive faculty, from basic concepts to advanced topics, has broadened my perspective and equipped me with valuable skills for the future.",
      subtext:
        "~ Prabhat Ranjan Principal Consultant, Statusneo, Gurugram Batch: (2023-24)",
    },
    {
      text: "The program syllabus has been well-designed and covered thoroughly. All the professors have consistently catered to the diverse backgrounds of students while teaching. My experience here has been excellent as I have had the opportunity to learn from students with various backgrounds and from professors who have dedicatedly taught the concepts.",
      subtext:
        "~ Shivani Gagein Project Associate, Natural Resource Management Batch: (2023-24)",
    },
    {
      text: "I would like to extend my heartiest thanks to the program coordinators of PGD-DSHCS. The course schedule is well articulated and well framed. The faculty is just beyond excellence, and I feel great to know their research experiences in this field as well their calm and composed approach to the students of such diverse fields. I will definitely recommend the willing learners to join this course to get the better opportunities in this field.",
      subtext:
        "~ Dr Ekta Debnath MBBS MD DNB(Biochemistry) Professor Department of Biochemistry MAMC & LN Hospitals ",
    },
    {
      text: "This was a truly amazing program in my view. The syllabus, curriculum, and material given are world class. The Faculty is very knowledgeable, and they provide you very good insights into the program. As well as the cohort that I have been studying with, in both online and offline mode whichever you want to choose, is truly amazing, multidisciplinary, and we have had very interactive sessions throughout. So I highly recommend this program to everyone. ",
      subtext:
        "~ Ashish Jha General Manager, Boston University Foundation Batch: (2023-24)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 2500);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="mb-12 mx-16 carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {cards.slice(currentIndex, currentIndex + 3).map((card) => (
          <div className="carousel-item">
            <Card text={card.text} subtext={card.subtext} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
