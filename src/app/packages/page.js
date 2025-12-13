'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/Header";
import GetInTouch from '../components/services/GetInTouch'
import Content from '../components/services/Content'
import Faq from '../components/Faq'
import Basic from '../components/package/Basic';
import Progress from '../components/Progress'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Packages" content="Find the Perfect Plan to Elevate Your Brand!" />
        {/* <div className="my-16 mx-56">
        <Basic />
      </div> */}
     <Progress/>
    </main>
  );
}
