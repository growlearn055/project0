import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[100vh] my-8  flex flex-col justify-start items-start'>
      <div className='gap-3 mt-16 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[hsl(209,100%,50%)]'></span>
     <span className='text-[#0083FF] text-base font-medium uppercase'>About us</span>
     </div>
     <div className='flex justify-center items-center '>
        <div className='flex flex-col justify-center items-start'>
      <h1 className='text-5xl w-96 font-medium mt-5 tracking-wide  text-gray-700 text-left align-middle'>Why you should choose <span className='font-bold'>Logo</span></h1>
       <p className='text-left w-[40%] mt-8 text-lg text-[#C2C4D5]'>As a full-services Design/Dev agency, we work closely with our clients to define, design and devlop transformative user experiances across all platform and brand's touchpoints.</p>
       
       <button className=' text-lg text-blue-400 p-3 px-8 border-2 mt-10 border-blue-400 font-semibold  rounded-2xl'>More About Us</button>
        </div>
     </div>
      
    </div>
  )
}

export default About
