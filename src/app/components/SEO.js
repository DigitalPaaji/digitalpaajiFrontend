'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/seo/Header";
import GetInTouch from '../components/seo/Why'
import Content from '../components/seo/Content'
import Marketing from '../components/seo/Marketing'
import GetStarted from '../components/seo/GetStarted'
import Clients from '../components/seo/Clients'

import Benefits from '../components/seo/Benefits'

import Faq from '../components/seo/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Search Engine Optimization Agency In India" 
        button="Call Us"
        content='“Digital Paaji: Your go-to digital marketing agency specializing in SEO, social media, and content marketing for unparalleled Online Success.”'/>
         <div className="my-16">
        <GetInTouch />
      </div>
        <div className="my-16">
        <Content />
      </div>
      <div className="my-16">
        <Marketing />
      </div>
      <div className="my-16">
        <Benefits />
      </div>
      <div className="my-16">
        <GetStarted />
      </div>
      {/* <div className="my-16">
        <Clients />
      </div> */}
      <div className="my-16">
        <Faq />
      </div>
    </main>
  );
}
