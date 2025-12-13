'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {

  const Services = [
    "Website Development",
    "SEO (Search Engine Optimization)",
    "PPC/Google Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Graphic Designing",
    "App Development",
    "Other",
  ]


  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    company:'',
    website:'',
    business:'',
    service:[],
    message: '',
    recaptchaToken: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

const handleCheckoxChange = (service)=>{
  setSelectedServices((prev)=>
  prev.includes(service) ? prev.filter((s)=>s!==service) : [...prev, service]
);
};

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validation function
  const validate = () => {
    const tempErrors = {};

    if (!formData.fname) tempErrors.fname = 'First name is required';
    // if (!formData.lname) tempErrors.lname = 'Last name is required';
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      tempErrors.phone = 'Phone number must be valid (e.g., +1234567890)';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is invalid';
    if (formData.website && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(formData.website))
      tempErrors.website = 'Please enter a valid website URL (e.g., https://example.com)';
    if (!formData.message) tempErrors.message = 'Message is required';
    if (selectedServices.length === 0) tempErrors.service = 'Please select at least one service.';
    if (!formData.recaptchaToken) tempErrors.recaptchaToken = 'Please complete the reCAPTCHA';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormTouched(true);

  // Ensure selectedServices is included in formData
  const updatedFormData = { ...formData, service: selectedServices };

  setFormData(updatedFormData); // Update state
     
    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.digitalpaajiacademy.com/paaji/send-mail', {
      // const response = await fetch('http://localhost:8000/send-mail', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || 'Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          
            fname: '',
            lname: '',
            phone: '',
            email: '',
            company:'',
            website:'',
            business:'',
            service:[],
            message: '',
            recaptchaToken: '',
          
        });
        setIsFormTouched(false);
        setSelectedServices([]);

      } else {
        toast.error(data.error || 'Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your message. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const fetchdata= async()=>{
  //   const response = await fetch("https://api.digitalpaajiacademy.com/paaji");
  //   const data = await response.json()
  //   console.log(data)
  // }

  // useEffect(()=>{fetchdata()},[])

  return (
    <div className="mx-4 md:mx-12 xl:mx-60">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <h3 className="bungeeHead mb-10 text-[30px] text-[#cc5f4d] xl:text-[40px]">
        Let&apos;s get in touch
      </h3>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">FIRST NAME *</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">LAST NAME</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {/* {isFormTouched && errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>} */}
        </div>

        {/* Phone */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">YOUR PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">YOUR EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {isFormTouched && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

   {/* company */}
   <div className="">
          <label className="bungeeHead block lg:text-lg mb-2">
          What is the name of your company? </label>
          <textarea
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter Your Company Name"
            rows={1}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {/* {isFormTouched && errors.company && <p className="text-red-500 text-sm">{errors.company}</p>} */}
        </div>
           {/* website */}
   <div className="">
          <label className="bungeeHead block lg:text-lg mb-2">
          Website URL (if available)</label>
          <textarea
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter Your website Name"
            rows={1}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {isFormTouched && errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>
                           {/* website */}
   <div className="">
          <label className="bungeeHead block lg:text-lg mb-2">
          What services are you interested in ? *</label>
          
          {Services.map((service)=>(
            <div className='flex items-center mb-2' key={service}>
 <input type='checkbox' id={service} name={service} value={service}
          checked={selectedServices.includes(service)}
          onChange={()=>handleCheckoxChange(service)}
          className='mr-2 h-5 w-5 text-gray-700 border-gray-300 rounded '
          />
          <label htmlFor={service} className='text-gray-700'>{service}</label>

            </div>
          ))}
         
          {isFormTouched && errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
        </div>
                   {/* business */}
   <div className="md:col-span-2">
          <label className="bungeeHead block lg:text-lg mb-2">
          Business Industry :</label>
          <textarea
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Enter Your business Name"
            rows={1}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {/* {isFormTouched && errors.business && <p className="text-red-500 text-sm">{errors.business}</p>} */}
        </div>


        {/* Message */}
        <div className="md:col-span-2">
          <label className="bungeeHead block lg:text-lg mb-2">
          Please tell us how we can help you? *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={4}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {isFormTouched && errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div>
          <ReCAPTCHA
            sitekey='6LfoGd8qAAAAANWvQKJiISV63MNjHqqRy54ORMJ-'
            theme='light'
            onChange={(token) => setFormData({ ...formData, recaptchaToken: token })}
          />
          {isFormTouched && errors.recaptchaToken && (
            <p className="text-red-500 text-sm">{errors.recaptchaToken}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mx-auto">
          <button
            type="submit"
            disabled={isSubmitting}
            className="merriHead w-full md:w-fit bg-yellow-400 text-black px-6 py-4 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}







