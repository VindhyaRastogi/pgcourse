import React, { useState, useEffect } from "react";
import Card from "./Card"; // Assuming Card component is defined elsewhere
import "./carousel.css"; // Import your custom carousel styles

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const cards = [
    {
      text: "The Data Science in Health and Climate Change for Social Impact Program offered by IIIT Delhi aligns seamlessly with my aspirations. The program has outstanding features.The classes are led by global data science experts and distinguished faculty members, I highly recommend it to everyone who wishes to pursue a career in addressing real-world challenges through data-driven approaches.",
      subtext: "~ Aman Karunik Internship, NIELIT, Delhi Batch (2023-24)",
    },
    {
      text: "The Post Graduate Diploma in Data Science at IIIT Delhi, offered in collaboration with Data.org, J-PAL, and ArtPark, is a groundbreaking program in India. It trains data scientists to tackle complex issues in health, climate change, and social impact through a unique multidisciplinary curriculum and hands-on approach, setting a new standard for data science education.",
      subtext:
        "~ Saiteja Pamu Sr. Research Executive - Public Affairs, Ipsos Research Private Limited, Gurugram, Batch: (2023-24)",
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
        "~ Ashish Jha General Manager, Boston University Foundation Batch (2023-24)",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1)%7);
    }, 2500);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="mb-12 mx-16 carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {cards
          .slice(currentIndex , (currentIndex + 3))
          .map((card) => (
            <div className="carousel-item">
              <Card text={card.text} subtext={card.subtext} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
