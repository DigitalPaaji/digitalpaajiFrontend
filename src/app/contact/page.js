'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/Header";
import Form from '../components/contact/Form';
import Info from '../components/contact/Info';




export default function About() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
    }, []);
  return (
    <main >
      <Header title="Contact Us" content="2 Gallan Kariye Vypaar Dia – Let’s Talk Business" />

      <div className="my-16  ">
      <Form/>

      </div>
      <div className="my-16  "  data-aos="fade-down">
      <Info/>

      </div>
     
    </main>
  );
}
