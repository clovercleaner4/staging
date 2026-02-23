'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
const Area = dynamic(() => import('../components/Area'), { ssr: false });
const Services = dynamic(() => import('../components/Services'));
const WhyUs = dynamic(() => import('../components/WhyUs'));
const InstagramFeed = dynamic(() => import('../components/InstagramFeed'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const FAQ = dynamic(() => import('../components/FAQ'));
const CompanyProfile = dynamic(() => import('../components/CompanyProfile'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'));
const FloatingCTA = dynamic(() => import('../components/FloatingCTA'));

import InViewLoader from '../components/InViewLoader';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <div className="bg-slate-50 relative z-10">
        <InViewLoader rootMargin="400px"><Area /></InViewLoader>
        <InViewLoader rootMargin="600px"><InstagramFeed /></InViewLoader>
        <InViewLoader rootMargin="600px"><Services /></InViewLoader>
        <InViewLoader rootMargin="600px"><WhyUs /></InViewLoader>
        <InViewLoader rootMargin="600px"><Testimonials /></InViewLoader>
        <InViewLoader rootMargin="600px"><FAQ /></InViewLoader>
        <InViewLoader rootMargin="600px"><CompanyProfile /></InViewLoader>
        <InViewLoader rootMargin="600px"><Contact /></InViewLoader>
      </div>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
