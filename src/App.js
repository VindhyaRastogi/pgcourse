import Navbar from './components/Navbar.js';
import Organisations from './components/Organisations.js';
import './App.css';
import React from 'react';
import InternshipPartners from './components/InternshipPartners.js';
import Home from './components/Home.js';



const App = () => {
  return (
    <div>
      <Organisations />
      <Navbar />
      <section id="home" className="bg-gray-100">
        <Home />
      </section>
      <section id="about" className="bg-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">About</h1>
      </section>
      <section id="internship_partners" className="min-h-screen flex justify-center bg-gray-300">
        <InternshipPartners />
      </section>
      <section id="contact" className="bg-gray-400">
        <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      </section>
    </div>
  );
};


export default App;
