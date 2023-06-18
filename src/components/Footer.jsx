import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import ParticalBg from './ParticalBg';

const Footer = () => {


  const typewriterOptions = {
    strings: [`Let's Start the Journy of Growth`, 'Grow your Business with 2X growth'],
    autoStart: true,
    loop: true,
  };


  return (
    <footer className="w-[95%] mx-auto h-72 m-5 rounded-3xl shadow-2xl shadow-gray-400 text-[#3F3D56] relative overflow-hidden py-8">
      
      <div className="container mx-auto px-4 mt-10 flex flex-row justify-between items-start">
        <div className="text-left w-96 ml-10">
        <h1 className='text-4xl mb-4 text-[#3F3D56] font-bold'>Logo</h1>
          <h3 className="text-xl font-semibold mb-2">
            <Typewriter options={typewriterOptions} />
          </h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='w-40 text-left flex flex-col justify-start items-start gap-5 '>
          <h3 className='text-lg text-[#3F3D56] font-semibold'>Links</h3>
          <span>About Us</span>
          <span>Our Work</span>
          <span>Project Request</span>
        </div>

        <div className='w-40 text-left flex flex-col justify-start items-start gap-5 '>
          <h3 className='text-lg text-[#3F3D56] font-semibold'>Social</h3>
          <span className='text-base text-[#3F3D56] font-normal'>LinkedIn</span>
          <span className='text-base text-[#3F3D56] font-normal'>Instagram</span>
          <span className='text-base text-[#3F3D56] font-normal'>Twitter</span>
        </div>

        <div className='w-40 text-left flex flex-col justify-start items-start gap-5 '>
          <h3 className='text-lg text-[#3F3D56] font-semibold'>Get in Touch</h3>
          <span>contact@pstech.com</span>
          <span>+91 7219 355 869</span>
        </div>
        
      </div>

      <div className="w-full h-72 absolute top-0 left-0 ">
       <ParticalBg />
        
        {/*  */}
      </div>
    </footer>
  );
};

export default Footer;

