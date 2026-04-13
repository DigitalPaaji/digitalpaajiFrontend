'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/video/InnerHeader";
import GetInTouch from '../components/digital/Presence'
import Why from '../components/digital/Why'

import Content from '../components/digital/Services'
import Faq from '../components/digital/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Digital Marketing Agency In India" 
        content="Our business model is really simple: When we grow your business, you keep us around, we&apos;re all happy. Honestly, it’s as straight forward as that.

"
         button="Call Us"/>
          <div className="my-16">
        <GetInTouch />
      </div>
        <div className="my-16">
        <Content />
      </div>
      <div className="my-16">
        <Why />
      </div>
       
      <div className="my-16">
        <Faq />
      </div>
    </main>
  );
}
