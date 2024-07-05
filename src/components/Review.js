import React, { useState, useEffect } from "react";
import ajha from '../assets/AJha.png';
import ekta from '../assets/Ekta.jpg';
import akarunik from '../assets/AKarunik.jpg';
import prabhat from '../assets/Prabhat.jpg';
import saiteja from '../assets/Saiteja.jpg';
import shivani from '../assets/Shivani.jpg';
import vkumar from '../assets/VKumar.jpg';
import "./carousel.css";
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 7); // 7 divs
    }, 6000); // Adjust the interval (2000 milliseconds = 2 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 mb-24 w-full transition-colors py-2 bg-teal-500 flex items-center justify-center text-lg font-bold flex-col">
      {currentIndex === 0 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={akarunik}
          ></img>
          <div>
            <p className="mt-8 text-[1.5rem]">Aman Karunik</p>
            <p className="text-[1rem]">Internship, NIELIT, Delhi Batch (2023-24)</p>
            <p className="text-xl mt-2 italic mb-8 text-justify ">
              "The Data Science in Health and Climate Change for Social Impact
              Program offered by IIIT Delhi aligns seamlessly with my
              aspirations. The program has outstanding features.The classes are
              led by global data science experts and distinguished faculty
              members, I highly recommend it to everyone who wishes to pursue a
              career in addressing real-world challenges through data-driven
              approaches."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 1 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={saiteja}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Saiteja Pamu</p>
          <p className="text-[1rem]">
              Sr. Research Executive - Public Affairs, Ipsos Research Private
              Limited, Gurugram, Batch: (2023-24)
            </p>
            <p className="text-xl mt-2 italic mb-8 text-justify">
              "The Post Graduate Diploma in Data Science at IIIT Delhi, offered
              in collaboration with Data.org, J-PAL, and ArtPark, is a
              groundbreaking program in India. It trains data scientists to
              tackle complex issues in health, climate change, and social impact
              through a unique multidisciplinary curriculum and hands-on
              approach, setting a new standard for data science education."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 2 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={vkumar}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Vivek Kumar</p>
          <p className="text-[1rem]">
              Broadcast Engineer, TV18 Broadcast limited, Hyderabad Batch:
              (2023-24)
            </p>
            <p className="text-xl mt-2 italic mb-8 text-justify">
              "Hello, I'm Vivek Kumar, 2023 cohort at IIIT Delhi. This program
              offers comprehensive learning, diverse networking opportunities,
              and inclusive teaching, ensuring understanding for learners with
              varied backgrounds. The faculty's expertise ensures a
              multidisciplinary approach, enriched by modules on data ethics and
              futuristic perspectives."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 3 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={prabhat}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Prabhat Ranjan</p>
          <p className="text-[1rem]">Principal Consultant, Statusneo, Gurugram Batch: (2023-24)</p>
            <p className="text-xl mt-2 italic mb-8 text-justify ">
              "The PGD-DSHCS course provides a distinct opportunity to delve
              into data science within health and social contexts. Interacting
              with diverse learners and supportive faculty, from basic concepts
              to advanced topics, has broadened my perspective and equipped me
              with valuable skills for the future."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 4 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={shivani}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Shivani Gagein</p>
          <p className="text-[1rem]">
              Project Associate, Natural Resource Management Batch: (2023-24)
            </p>
            <p className="text-xl mt-2 italic mb-8 text-justify">
              "The program syllabus has been well-designed and covered
              thoroughly. All the professors have consistently catered to the
              diverse backgrounds of students while teaching. My experience here
              has been excellent as I have had the opportunity to learn from
              students with various backgrounds and from professors who have
              dedicatedly taught the concepts."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 5 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={ekta}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Dr Ekta Debnath</p>
          <p className="text-[1rem]">
              MBBS MD DNB(Biochemistry) Professor Department of Biochemistry
              MAMC & LN Hospitals
            </p>
            <p className="text-xl mt-2 italic mb-8 text-justify">
              "I would like to extend my heartiest thanks to the program
              coordinators of PGD-DSHCS. The course schedule is well articulated
              and well framed. The faculty is just beyond excellence, and I feel
              great to know their research experiences in this field as well
              their calm and composed approach to the students of such diverse
              fields. I will definitely recommend the willing learners to join
              this course to get the better opportunities in this field."
            </p>
          </div>
        </div>
      )}

      {currentIndex === 6 && (
        <div
          style={{ animation: "fadeIn 0.5s" }}
          
          className="mybox items-center flex flex-row space-x-8 px-20"
        >
          <img
            className="rounded-full h-[8rem] w-[8rem]"
            src={ajha}
          ></img>
          <div>
          <p className="mt-8 text-[1.5rem]">Ashish Jha</p>
          <p className="text-[1rem]">General Manager, Boston University Foundation Batch (2023-24)</p>
            <p className="text-xl mt-2 italic mb-8 text-justify">
              "This was a truly amazing program in my view. The syllabus,
              curriculum, and material given are world class. The Faculty is
              very knowledgeable, and they provide you very good insights into
              the program. As well as the cohort that I have been studying with,
              in both online and offline mode whichever you want to choose, is
              truly amazing, multidisciplinary, and we have had very interactive
              sessions throughout. So I highly recommend this program to
              everyone."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
