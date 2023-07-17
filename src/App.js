import Navbar from './components/Navbar.js';
import Organisations from './components/Organisations.js';
import './App.css';
import React from 'react';
import InternshipPartners from './components/InternshipPartners.js';
import Home from './components/Home.js';
import ApplyNow from './components/ApplyNow.js';
import Faculty from './components/Faculty.js';
import About from './components/About.js';
import Brochure from './components/Brochure.js';
import Admission from './components/Admission.js';


const App = () => {
  return (
    <div>
      <div className="z-20">
        <Organisations />
      </div>
      <Navbar />
      <section id="home" className="bg-gray-100">
        <Home />
      </section>
      <section id="about" className="bg-gray-200 p-4">
        <About />
      </section>
      <section id="faculty" className="flex justify-center bg-gray-300">
        <Faculty />
      </section>
      <section id="internship_partners" className="flex justify-center bg-white">
        <InternshipPartners />
      </section>
      <section id="admission" className="h-screen bg-gray-300">
        <Admission />
      </section>

      <ApplyNow />
      <Brochure />
    </div>
  );
};


export default App;
