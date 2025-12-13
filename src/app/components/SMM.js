'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/video/InnerHeader";
import Welcome from '../components/smm/Welcome'
import Why from '../components/smm/Why'
import Approach from '../components/smm/Approach'
import Promotion from '../components/smm/Promotion'
import Faq from '../components/smm/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Social Media Marketing Agency In India
" 
        content="Drive Engagement, Build Community, and Achieve Your Business Goals

"
         button="Call Us"/>
          <div className="my-16">
        <Welcome />
      </div>
        <div className="my-16">
        <Promotion />
      </div>
      <div className="mt-24">
        <Approach />
      </div>
      <div className="mb-24">
        <Why />
      </div>
       
      <div className="my-16">
        <Faq />
      </div>
    </main>
  );
}
