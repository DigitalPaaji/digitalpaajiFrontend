'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/video/InnerHeader";
import Why from '../components/video/Why'
import Work from '../components/video/Work'
import Faq from '../components/Faq'
import Services from '../components/video/Services';



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="VIDEO PRODUCTION AGENCY In INDIA" 
        content="For you to produce captivating, audience-resonant videos, customised video editing is essential. Our customization-focused approach guarantees that every alteration captures the essence and personality of your brand. "
         button="Call Us"/>
       <div className="my-16">
        <Why />
      </div>
     <div className="my-16">
        <Services />
      </div>
      <div className="my-16">
        <Work />
      </div>      
      <div className="my-16">
        <Faq />
      </div>
    </main>
  );
}
