import React from 'react'
import {FaRegLightbulb} from 'react-icons/fa'
import { IoWalletOutline } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const About = () => {
  return (
    <div className='w-full h-[100vh] my-8  flex flex-col justify-start items-start'>
      <div className='gap-3 mt-16 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[hsl(209,100%,50%)]'></span>
     <span className='text-[#0083FF] text-base font-medium uppercase'>About us</span>
     </div>
     <div className='w-full relative flex justify-between items-center '>
        <div className='w-[30rem] flex flex-col justify-center items-start'>
      <h1 className='text-6xl w-full font-normal mt-5 tracking-wide  text-[#1e4264] text-left align-middle'>Why you should choose <span className='font-semibold'>Logo</span></h1>
       <p className='text-left w-full mt-8 text-xl text-[#7f90ab]'>As a full-services Design/Dev agency, we work closely with our clients to define, design and devlop transformative user experiances across all platform and brand's touchpoints.</p>
       
       <button className=' text-lg text-blue-400 p-3 px-8 border-2 mt-10 border-blue-400 font-semibold  rounded-2xl'>More About Us</button>
        </div>
     <div className='absolute w-[35rem] h-[35rem] -z-10 bg-[#e9f0fe] right-5 rounded-t-full rounded-bl-full border-dashed border-collapse border-[#0083ff] border-2'></div>
     <div className=' w-[40rem] flex flex-col justify-start items-center'>
        <div className='bg-white w-[30rem] h-36 ml-28 shadow-2xl shadow-gray-300 rounded-3xl flex justify-center items-center gap-10 p-10 '>
            <div className="w-16 h-16 flex justify-center items-start">
                <div className="w-10 h-10 absolute mt-3 ml-6 z-0 bg-[#C5EBFE] rounded-t-2xl rounded-bl-2xl"></div>
                <FaRegLightbulb className='z-10 w-10 h-10'/>
            </div>
            <div className='flex flex-col justify-center items-start p-5'>
                <h3 className='text-[#1e4264] font-medium text-xl'>Innovative Ideas</h3>
                <span className='text-[#7f90ab] text-justify text-base mt-2'>Because each project is diffrent, we adapt to your business model.</span>
            </div>
        </div>
        
        <div className='bg-white w-[30rem] h-36 mt-10 shadow-2xl shadow-gray-300 rounded-3xl flex justify-center items-center gap-10 p-10 '>
            <div className="w-16 h-16 flex justify-center items-start">
                <div className="w-10 h-10 absolute mt-3 ml-6 z-0 bg-[#C5EBFE] rounded-t-2xl rounded-bl-2xl"></div>
                <IoWalletOutline className='z-10 w-10 h-10'/>
            </div>
            <div className='flex flex-col justify-center items-start p-5'>
                <h3 className='text-[#1e4264] font-medium text-xl'>Honest Pricing</h3>
                <span className='text-[#7f90ab] text-justify text-base mt-2'>Pricing on Projects are based on verious analyzes and are cost effective.</span>
            </div>
        </div>
        
        <div className='bg-white w-[30rem] h-36 mt-10 ml-24 shadow-2xl shadow-gray-300 rounded-3xl flex justify-center items-center gap-10 p-10 '>
            <div className="w-16 h-16 flex justify-center items-start">
                <div className="w-10 h-10 absolute mt-3 ml-6 z-0 bg-[#C5EBFE] rounded-t-2xl rounded-bl-2xl"></div>
                <TfiHeadphoneAlt className='z-10 w-10 h-10'/>
            </div>
            <div className='flex flex-col justify-center items-start p-5'>
                <h3 className='text-[#1e4264] font-medium text-xl'>Dedicated Support</h3>
                <span className='text-[#7f90ab] text-justify text-base mt-2'>We provide 24/7 support for all our clients and serve them professionally.</span>
            </div>
        </div>
        
     </div>
     </div>
      
    </div>
  )
}

export default About
