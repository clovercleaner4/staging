import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Area from './components/Area';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <div className="bg-slate-50 relative z-10">
        <Area />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
