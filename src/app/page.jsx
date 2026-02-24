'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
const Area = dynamic(() => import('../components/Area'), { ssr: false });
const Services = dynamic(() => import('../components/Services'), { ssr: false });
const WhyUs = dynamic(() => import('../components/WhyUs'), { ssr: false });
const InstagramFeed = dynamic(() => import('../components/InstagramFeed'), { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: false });
const CompanyProfile = dynamic(() => import('../components/CompanyProfile'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'), { ssr: false });
const FloatingCTA = dynamic(() => import('../components/FloatingCTA'), { ssr: false });

import InViewLoader from '../components/InViewLoader';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <div className="bg-slate-50 relative z-10">
        <InViewLoader rootMargin="100px"><Area /></InViewLoader>
        <InViewLoader rootMargin="50px"><InstagramFeed /></InViewLoader>
        <InViewLoader rootMargin="150px"><Services /></InViewLoader>
        <InViewLoader rootMargin="100px"><WhyUs /></InViewLoader>
        <InViewLoader rootMargin="50px"><Testimonials /></InViewLoader>
        <InViewLoader rootMargin="50px"><FAQ /></InViewLoader>
        <InViewLoader rootMargin="50px"><CompanyProfile /></InViewLoader>
        <InViewLoader rootMargin="50px"><Contact /></InViewLoader>
      </div>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
