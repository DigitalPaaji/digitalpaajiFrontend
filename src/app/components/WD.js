'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/web/Header";
import GetInTouch from '../components/services/GetInTouch'
import Services from '../components/web/Services'
import Benefits from '../components/web/Benefits'
import Technologies from '../components/web/Technologies'
import Choose from '../components/web/Choose'

import Select from '../components/web/Select'
import Faq from '../components/web/Faq'
import Websites from './web/Websites';



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true}); 
  }, []);

  return (
    <main>
        {/* <Header/> */}
   <div className="">

         <h3 className="bungeeHead font-bold text-[#cc5f4d] text-2xl md:text-3xl xl:text-4xl mt-4 text-center">
          Websites We’ve Built for Our Clients
        </h3>
        <Websites />
      </div>
   <div className="my-16">
        <Services />
      </div>
      <div className="my-16">
        <Benefits />
      </div>
      <div className="mt-24">
        <Select />
      </div>
      <div className="mb-24">
        <Choose />
      </div>
      <div className="my-16">
        <Technologies />
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
