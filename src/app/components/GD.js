'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/video/InnerHeader";
import GetInTouch from '../components/graphic/GetStarted'
import Services from '../components/graphic/Services'
import Work from '../components/graphic/Work'
import Zoom from '../components/graphic/Zoom'
import Why from '../components/graphic/Why'
import Process from '../components/graphic/Process'
import Faq from '../components/graphic/Faq'
import Creatives from '../components/graphic/Creatives'


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Graphic Designing Agency In India" content="We won't let good design go extinct!" button="Call Us"/>
        <div className="my-16">
        <Creatives />
      </div>
        <div className="my-16">
        <Zoom />
      </div>
        <div className="my-16">
        <Services />
      </div>
      <div className="my-16">
        <Why />
      </div>
      <div className="my-16">
        <Process />
      </div>
      <div className="my-16">
        <Work />
      </div>
        <div className="my-16">
        <GetInTouch />
      </div>
      <div className="my-16">
        <Faq />
      </div>
    </main>
  );
}
