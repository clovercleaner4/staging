'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Area = dynamic(() => import('../components/Area'), { ssr: false });
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';
import CompanyProfile from '../components/CompanyProfile';

import ScrollToTop from '../components/ScrollToTop';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <div className="bg-slate-50 relative z-10">
        <Area />
        <InstagramFeed />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CompanyProfile />
        <Contact />
      </div>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
