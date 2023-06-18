import React from 'react'
import {BsBarChart, BsRocket} from 'react-icons/bs'
import Img from '../assets/img4.jpg';
import { IoRocketOutline } from 'react-icons/io5';
import {HiOutlineBanknotes} from 'react-icons/hi2'
import {GiMultipleTargets} from 'react-icons/gi'
// import Planning from '../assets/Planning.svg'
// import WebDesign from '../assets/WebDesign.svg'
// import DefineContent from '../assets/DefineContent.svg'
// import Development from '../assets/Development.svg'

const ServicesDetails = () => {
  return (
    <div className='w-full'>
        <div className='mt-10 w-full flex flex-col justify-center items-start gap-5 h-72 rounded-3xl '
        // style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h1 className='text-black text-6xl mx-auto w-fit font-extrabold '>SOFTWARE & WEB DEVELOPMENT</h1>
            <h3 className='text-black text-2xl mx-auto w-fit font-semibold  '>Scalable and user-centric superior web solutions.</h3>
        </div>
      
      <div className=' w-full flex justify-center items-center mt-16'>
        <div className='w-1/2 m-5 px-24 flex flex-col justify-center items-start gap-3'>
        <h3 className='text-4xl tracking-widest leading-[3rem] text-gray-400 '>DEVELOP TRULY UNIQUE</h3>
        <h3 className='text-4xl tracking-widest font-bold text-blue-500'>WEB EXPERIENCES</h3>
        </div>
        <div className='w-1/2 m-5  flex flex-col justify-start items-start gap-3'>
       <p className='text-2xl tracking-wide text-gray-400'>Build user-centric websites and web applications using our unique development processes and our skilled team of developers and designers.</p>
        </div>
      </div>

      <div className='mt-16 border-b  border-blue-500 pb-16'>
        <div className='flex justify-center items-center px-5 gap-10'>
            <div className='w-1/2 h-72 flex flex-col justify-start shadow-xl shadow-gray-300 items-start gap-5 p-10'>
                <BsBarChart className='text-blue-500 w-16 h-16'/>
                <h4 className='text-2xl h-12 text-blue-500 font-medium'>GET VALUABLE INSIGHTS</h4>
                <p className='text-gray-500 h-24 text-lg text-justify '>Our specialized professionals will advise you the best framework suitable for your project, build a roadmap with prioritized features and set deadlines.</p>
            </div>
            <div className='w-1/2 h-72 flex flex-col justify-start shadow-xl shadow-gray-300 items-start gap-5 p-10'>
                <IoRocketOutline className='text-blue-500 w-16 h-16'/>
                <h4 className='text-2xl h-12 text-blue-500 font-medium'>A PRODUCT READY TO LAUNCH</h4>
                <p className='text-gray-500 h-24 text-lg text-justify '>Get an outstanding, responsive digital product 2x faster and ready to be tested by your users.</p>
            </div>
        </div>

        <div className='flex justify-center items-center px-5 gap-10 mt-10'>
            <div className='w-1/2 h-72 flex flex-col justify-start shadow-xl shadow-gray-300 items-start gap-5 p-10'>
                <HiOutlineBanknotes className='text-blue-500 w-16 h-16'/>
                <h4 className='text-2xl h-12 text-blue-500 font-medium'>REDUCE UP TO 60% ON COSTS</h4>
                <p className='text-gray-500 h-24 text-lg text-justify '>Following our Product Design Process lets you plan and manage realistic schedules, saving you time, and redesigning costs - save up 60% on development costs.</p>
            </div>
            <div className='w-1/2 h-72 flex flex-col justify-start shadow-xl shadow-gray-300 items-start gap-5 p-10'>
                <GiMultipleTargets className='text-blue-500 w-16 h-16'/>
                <h4 className='text-2xl h-12 text-blue-500 font-medium'>FOCUS ON YOUR BUSINESS GOALS</h4>
                <p className='text-gray-500 h-24 text-lg text-justify '>Our specialized professionals will advise you the best framework suitable for your project, build a roadmap with prioritized features and set deadlines.</p>
            </div>
        </div>

      </div>

      <div className=' w-full flex justify-center items-center mt-16'>
        <div className='w-1/2 m-5 px-10 flex flex-col justify-center items-start gap-3'>
        <h3 className='text-4xl tracking-widest font-bold uppercase leading-[4rem] text-gray-700 '>Why Do You Need Website?</h3>
        </div>
        <div className='w-1/2 m-5  flex flex-col justify-start items-start gap-3'>
       <p className='text-2xl tracking-wide text-justify text-gray-400'>The website has become an essential and significant part of human life. Every business needs a website to showcase its skill, products, talents, and much more. Everything can be formed and updated with a website.</p>
        </div>
      </div>
        
        <p className='text-lg mx-16 my-16 tracking-wide text-justify text-gray-400'>Our highly skilled developers have proficient expertise in the latest technology and trends. We worked with global firms to transform recognized ideas into stunning & inventive websites. We have rich experience and creativity in producing phenomenal websites and CMS development for different clients worldwide. Our experts hold a different and unique perspective which helps to tailor web development faster and better. With this web development, the business runs with high functionality, efficiency and enhances it.</p>
    
    {/* <div className='mt-24'>
        <h2 className='text-5xl font-bold text-gray-800 w-fit mx-auto'> Process We Follow </h2>
        <h3 className='text-lg mt-5 w-fit mx-auto'>How Our Experts Handle The Project Efficiently,</h3>
    </div>
    <div className='w-full p-5 flex justify-center items-center gap-16 mt-16'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <div className='text-5xl text-gray-700 font-semibold'>Planning</div>
        <p className='text-2xl text-gray-600 '>
        Gather all the information and plan the project, craft the idea for the website and CMS development.
        </p>
        </div>

        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <img src={Planning} alt=''/>
        </div>
    </div>

    <div className='w-full p-5 flex justify-center items-center gap-16 mt-16'>
    <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <img src={WebDesign} alt=''/>
        </div>
        
        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <div className='text-5xl text-gray-700 font-semibold'>Web Designing</div>
        <p className='text-2xl text-gray-600 '>
        Our front-end designers will craft a stunning and striking responsive website following the wireframe, UI/UX design to prototype.
        </p>
        </div>

        
    </div>

    <div className='w-full p-5 flex justify-center items-center gap-16 mt-16'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <div className='text-5xl text-gray-700 font-semibold'>Define Content</div>
        <p className='text-2xl text-gray-600 '>
        A website is incomplete without content. Thus, we will put informative content on the website and make it SEO-friendly.
        </p>
        </div>

        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <img src={DefineContent} alt=''/>
        </div>
    </div>

    <div className='w-full p-5 flex justify-center items-center gap-16 mt-16'>
    <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <img src={Development} alt=''/>
        </div>
        
        <div className='w-1/2 flex flex-col justify-start items-start gap-5'>
        <div className='text-5xl text-gray-700 font-semibold'>Development</div>
        <p className='text-2xl text-gray-600 '>
        After deciding the website's objectives, it is time for development. The process is the pre-final stage of the website.
        </p>
        </div>

        
    </div> */}
    
    </div>
  )
}

export default ServicesDetails
