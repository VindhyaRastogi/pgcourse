import Navbar from './components/Navbar.js';
import Organisations from './components/Organisations.js';
import './App.css';
import { useState } from 'react';
import React from 'react';
import InternshipPartners from './components/InternshipPartners.js';
import Home from './components/Home.js';
import ApplyNow from './components/ApplyNow.js';
import Faculty from './components/Faculty.js';
import About from './components/About.js';
import Brochure from './components/Brochure.js';
import Admission from './components/Admission.js';
import ContactUs from './components/ContactUs.js';


const App = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    console.log(currentPage);
    switch (currentPage) {
      case 'home':
        return <section id="home" className="w-screen bg-gray-100">
          <Home />
        </section>;
        
      case 'about':
        return <section id="about" className="w-screen bg-gray-200 p-4">
          <About />
        </section>;
      case 'partners':
        return <section id="internship_partners" className="w-screen flex justify-center bg-white">
          <InternshipPartners />
        </section>;
      case 'faculty':
        return <section id="faculty" className="w-screen flex justify-center bg-gray-300">
          <Faculty />
        </section>;
      case 'admission':
        return <section id="admission" className="w-screen h-screen bg-gray-300">
          <Admission />
        </section>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div className="z-20">
        <Organisations />
      </div>
      <Navbar togglePage={setCurrentPage} />
      {renderPage()}
      <ApplyNow />
      <Brochure />
      <ContactUs />
    </div>
  );
};


export default App;
