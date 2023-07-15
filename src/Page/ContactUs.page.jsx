import React from 'react'
import { BsClock } from 'react-icons/bs'
import { FaUpload } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <>
    <div className='w-full h-64 bg-[#0083FF]  absolute top-16 right-0 -z-10 '></div>
    <div className='w-4/5 mx-auto  h-full py-5'>
        <div className='flex justify-start items-start'>
        <div className='w-1/2 h-64 mt-3'>
            <h1 className='text-4xl mt-5 font-medium tracking-wider text-white'>NEW PROJECT IN MIND?</h1>
            <h3 className='text-4xl mt-3 font-light tracking-wider text-white'>LET’S TALK!</h3>
            <div className='flex justify-start items-center font-medium text-white h-5 mt-8 gap-5'><BsClock className='w-5 h-5'/> <span className='text-base tracking-wide'>RESPONSE IN LESS THAN 1 HOUR</span></div>

            <div>
                
            </div>
        </div>
        <div className='w-1/2 h-[50rem] shadow-2xl shadow-gray-500 mt-3 bg-white'>
            
            <h2 className='text-base w-full text-center mt-5 tracking-widest font-semibold'>EXPLAIN YOUR PROJECT AND</h2>
            <h2 className='text-base w-full text-center mt-2 text-[#0083FF] tracking-widest font-semibold'>BOOK A MEETING TODAY.</h2>
            <div className='w-full flex flex-col justify-start items-start'>
                
                <div className='w-full flex justify-start items-start px-10 mt-10 gap-10'>
                    <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Name</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div>
                    <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Company</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div>
                </div>

                <div className='w-full flex justify-start items-start px-10 mt-10 gap-10'>
                    <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Email</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div>
                    <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Phone</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div>
                </div>

                <div className='w-full flex justify-start items-start px-10 mt-10 gap-10'>
                    <div className='w-full gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>I am looking for</label>
                        <input type='' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div>
                    {/* <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Company</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div> */}
                </div>

                <div className='w-full flex justify-start items-start px-10 mt-10 gap-10'>
                    <div className='w-full gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Message</label>
                        <textarea  className='w-full h-28 outline-none border-b border-[#0083FF]'/>
                    </div>
                    {/* <div className='w-1/2 gap-2 flex flex-col'>
                        <label className='text-sm text-gray-600'>Company</label>
                        <input type='text' className='w-full h-10 outline-none border-b border-[#0083FF]'/>
                    </div> */}
                </div>

                <h3 className='w-full px-10 text-base font-normal mt-10'>FILE UPLOAD (OPTIONAL)</h3>
                    <div className='w-full mt-5 px-10 flex justify-start items-center gap-5'>
                        <button className='border border-[#0083FF] text-base tracking-wider text-[#0083FF] font-medium flex justify-center items-center gap-5 px-6 py-3'><span> CHOOSE FILE</span> <FaUpload/></button>
                        <span className='text-sm'>No file choosen</span>
                    </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs
