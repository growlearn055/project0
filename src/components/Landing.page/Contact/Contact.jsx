import React from 'react'
import {FaRegLightbulb} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import { IoMailOutline, IoWalletOutline } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const Contact = () => {
  return (
    <div className='w-full h-[100vh] my-8 mb-20  flex flex-col justify-start items-start'>
      <div className='gap-3 mt-16 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[#0084ff]'></span>
     <span className='text-[#0083FF] text-base font-medium uppercase'>Contact us</span>
     </div>
     <div className='w-full relative flex justify-between items-center '>
        <div className='w-[30rem] flex flex-col justify-center items-start'>
      <h1 className='text-6xl w-full font-normal mt-5 tracking-wide  text-[#1e4264] text-left align-middle'>Don't Hesitate to <span className='font-semibold'>Contact Us</span></h1>
       <p className='text-left w-full mt-8 text-xl text-[#7f90ab]'>You can comfortably send us your cooperation messages at any time. We will do our best to get the answer back to your email as soon as possible. If you need a quick response, call the number below.</p>
       
       <div className='mt-8 flex justify-start items-center gap-8'>
       <div className="flex justify-center items-start">
                <div className="w-6 h-6  absolute mt-3 ml-5 z-0 bg-[#C5EBFE] rounded-t-lg rounded-bl-lg"></div>
                <FiPhoneCall className='z-10 w-8 h-8 text-[#1e4264]'/>
        </div>
        <span className='text-xl font-bold text-[#1e4264]'>+91 721 935 5869</span>
       </div>

       <div className='mt-8 flex justify-start items-center gap-8'>
       <div className="flex justify-center items-start">
                <div className="w-6 h-6  absolute mt-3 ml-5 z-0 bg-[#C5EBFE] rounded-t-lg rounded-bl-lg"></div>
                <IoMailOutline className='z-10 w-8 h-8 text-[#1e4264]'/>
        </div>
        <span className='text-xl font-bold text-[#1e4264]'>+91 721 935 5869</span>
       </div>

       </div>
     <div className='absolute w-[35rem] h-[35rem] -z-10 bg-[#e9f0fe] right-5 rounded-b-full rounded-tr-full border-dashed border-collapse border-[#0083ff] border-2'></div>
     <div className=' w-[40rem] h-[38rem] flex flex-col justify-start items-center'>
        
        <div className='bg-white w-[30rem] h-[35rem] ml-10 shadow-2xl shadow-gray-300 rounded-3xl flex flex-col justify-start items-start gap-10 p-10 '>
        <h1 className='text-3xl  w-full font-semibold mt-5 tracking-wider text-[#1e4264] text-left align-middle'>Get in <span className='font-bold'>Touch</span></h1>
        
        <div className='flex flex-col justify-center items-start mx-auto'>
            <span className='text-base font-medium text-[#1e4264]'>Your Mail</span>
            <input type='email' placeholder='Enter Your Mail' className='outline-none mt-2 bg-gray-100 w-96 h-12 text-gray-500 p-4 rounded-lg'/>
        </div>

        <div className='flex flex-col justify-center items-start mx-auto'>
            <span className='text-base font-medium text-[#1e4264]'>Message</span>
            <textarea  placeholder='Enter Your Message' className='outline-none mt-2 bg-gray-100 w-96 h-28 text-gray-500 p-4 rounded-lg'/>
        </div>

        <button className='mt-2 rounded-2xl w-96 h-14 bg-[#0083ff] text-white font-semibold'>Send Request</button>

        </div>
        
     </div>
     </div>
      
    </div>
  )
}

export default Contact
