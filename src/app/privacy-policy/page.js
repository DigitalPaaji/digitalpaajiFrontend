"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
      <div className="mx-8 lg:mx-24 xl:mx-52 my-16">
        <h3 className="bungeeHead text-3xl lg:text-5xl text-[#cc5f4d] font-bold">
          Privacy Policy
        </h3>
        <p className="merriHead  text-gray-500 my-4">
          <span className="font-bold "> Effective Date:</span> 01/08/2024
        </p>
        <p className="merriHead  text-gray-500">
          At Digitalpaaji.com, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information. By using our website, you agree to the terms
          outlined in this policy.
        </p>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
            1. Information We Collect
          </h3>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
              Personal Information:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            We may collect personal information such as your name, email address, phone number, and other details you provide when you subscribe to our newsletter, fill out a form, or interact with us in other ways.
            </p>
          </div>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
            Non-Personal Information:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            We may collect non-personal information such as your IP address, browser type, and usage data through cookies and similar tracking technologies to enhance your experience on our site.
            </p>
          </div>
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          2. How We Use Your Information
          </h3>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
            To Provide Services:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            We use your personal information to respond to inquiries, provide services, and send updates and promotional materials.
            </p>
          </div>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
            To Improve Our Website:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            Non-personal information helps us analyze user behavior and improve our website’s functionality and content.
            </p>
          </div>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
            To Communicate with You:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            We may use your information to send newsletters, updates, and promotional materials. You can opt out of these communications at any time.
            </p>
          </div>
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          3. Sharing Your Information
          </h3>
          <div className="my-4">
            
            <p className="merriHead  text-gray-500 mt-2">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide services or comply with the law.
            </p>
          </div>
          










        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
           4. Cookies and Tracking Technologies
          </h3>
          <div className="my-4">
            
            <p className="merriHead  text-gray-500 mt-2">
            We use cookies and similar tracking technologies to enhance your experience on our website. You can disable cookies through your browser settings, but this may affect your ability to use certain features of our site.
            </p>
          </div>
          
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          5. Data Security
          </h3>
          <div className="my-4">
           
            <p className="merriHead  text-gray-500 mt-2">
            We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>
         
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          6. Your Rights
          </h3>
          <div className="my-4">
           
            <p className="merriHead  text-gray-500 mt-2">
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at info@digitalpaaji.com.
            </p>
          </div>
      
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          7. Third-Party Links
          </h3>
          <div className="my-4">
           
            <p className="merriHead  text-gray-500 mt-2">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
            </p>
          </div>
        
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          8. Changes to This Policy
          </h3>
          <div className="my-4">
            
            <p className="merriHead  text-gray-500 mt-2">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>
         
        </div>
        <div className="my-6">
          <h3 className="bungeeHead text-3xl text-[#cc5f4d] font-bold">
          9. Contact Us
          </h3>
          <div className="my-4">
            <p className="merriHead  text-gray-500 font-bold">
            If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            Email: info@digitalpaaji.com
            </p>
            <p className="merriHead  text-gray-500 mt-2">
            Address: 78 ,2nd floor , kissan market, near hemkunt petrol pump,Sirhind Road, Patiala. 147001
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
