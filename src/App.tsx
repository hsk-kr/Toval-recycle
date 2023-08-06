import React from 'react';
import Home from './pages-components/homePage/Home';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import WhatWeDo from './pages-components/what-we-do/WhatWeDo';
import Contact from './pages-components/contact-us/ContactUs';
import Cards from './pages-components/about/AboutCards';
import StatisticsNumbers from './pages-components/what-we-do/StatisticsNumbers';
import Clients from './pages-components/what-we-do/Clients';
import Footer from './pages-components/footer/Footer';
import OurProducts from './pages-components/product/OurProducts';

function App() {
  return (
    <Router>
      <div dir="ltr" className=" overflow-auto">
        <NavBar />
        <section className="flex min-h-[100dvh] flex-col" id="home">
          <Home />
        </section>
        <div className="mx-auto flex max-w-site flex-col gap-20 p-10">
          <section id="about" className="flex flex-col gap-20">
            <Cards />
          </section>
          <section id="what-we-do" className="flex flex-col gap-20">
            <WhatWeDo />
            <OurProducts />
            <Clients />
            <StatisticsNumbers />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
