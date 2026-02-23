'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
const Area = dynamic(() => import('../components/Area'), { ssr: false });
const Services = dynamic(() => import('../components/Services'));
const WhyUs = dynamic(() => import('../components/WhyUs'));
const InstagramFeed = dynamic(() => import('../components/InstagramFeed'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const FAQ = dynamic(() => import('../components/FAQ'));
const CompanyProfile = dynamic(() => import('../components/CompanyProfile'));
const Contact = dynamic(() => import('../components/Contact'));

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
