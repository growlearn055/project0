import React from 'react'

import Planning from '../../assets/Planning.svg'
import WebDesign from '../../assets/WebDesign.svg'
import DefineContent from '../../assets/DefineContent.svg'
import RequirementGathering from '../../assets/RequirementGathering.svg'
import UIUX from '../../assets/UIUX.svg'
import Prototype from '../../assets/Prototype.svg'
import Development from '../../assets/Development.svg'
import QualityAssurance from '../../assets/QualityAssurance.svg'
import Deployment from '../../assets/Deployment.svg'
import SupportMaintenance from '../../assets/SupportMaintenance.svg'


const Processes = () => {
  return (
    <div>
         <div className='gap-3 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[#0083FF]'></span>
     <span className='text-[#0083FF] text-base font-medium uppercase'>Processes</span>
     </div>

      <div className=''>
      <h1 className='text-3xl mb-16 w-full flex justify-center items-center font-bold'>Process <span className='font-medium'>We Follow</span></h1>
        {/* <h2 className='text-5xl font-bold text-gray-800 w-fit mx-auto'> Process We Follow </h2> */}
        <h3 className='text-lg mt-5 w-fit mx-auto'>How Our Experts Handle The Project Efficiently,</h3>
    </div>
    <div className='flex justify-center items-start gap-10 mt-16'>
 
    <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
        <div className='w-32  flex flex-col justify-center items-center gap-5'>
        <img src={RequirementGathering} alt=''/>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='text-xl text-gray-700 font-semibold'>Requirement Gathering</div>
        <p className='text-base text-justify text-gray-600 '>
        We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
        </p>
        </div>
    </div>

    <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
        <div className='w-32  flex flex-col justify-center items-center gap-5'>
        <img src={UIUX} alt=''/>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='text-xl text-gray-700 font-semibold'>UI/UX Design</div>
        <p className='text-base text-justify text-gray-600 '>
        We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.
        </p>
        </div>
    </div>

    <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
        <div className='w-32  flex flex-col justify-center items-center gap-5'>
        <img src={Prototype} alt=''/>
        </div>
        
        <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='text-xl text-gray-700 font-semibold'>Prototype</div>
        <p className='text-base text-justify text-gray-600 '>
        After designing, you will get your prototype, which will be sent ahead for the development process for the product.
        </p>
        </div>

        
    </div>

    <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
        <div className='w-32  flex flex-col justify-center items-center gap-5'>
        <img src={Development} alt=''/>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='text-xl text-gray-700 font-semibold'>Development</div>
        <p className='text-base text-justify text-gray-600 '>
        Development of mobile application/web/blockchain started using latest tools and technologies with transparency.
        </p>
        </div>

        
    </div>

    </div>

    <div className='flex justify-center items-start gap-10 my-16'>
 
 <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
     <div className='w-32  flex flex-col justify-center items-center gap-5'>
     <img src={QualityAssurance} alt=''/>
     </div>
     <div className='w-full flex flex-col justify-center items-center gap-5'>
     <div className='text-xl text-gray-700 font-semibold'>Quality Assurance</div>
     <p className='text-base text-justify text-gray-600 '>
     Hyperlink values quality and provides 100% bug free application with no compromisation in it.
     </p>
     </div>
 </div>

 <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
     <div className='w-32  flex flex-col justify-center items-center gap-5'>
     <img src={Deployment} alt=''/>
     </div>
     <div className='w-full flex flex-col justify-center items-center gap-5'>
     <div className='text-xl text-gray-700 font-semibold'>Deployment</div>
     <p className='text-base text-justify text-gray-600 '>
     After trial and following all processes, your app is ready to launch on the App store or Play Store.
     </p>
     </div>
 </div>

 <div className='w-1/4 h-80 p-5  flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-400'>
     <div className='w-32  flex flex-col justify-center items-center gap-5'>
     <img src={SupportMaintenance} alt=''/>
     </div>
     
     <div className='w-full flex flex-col justify-center items-center gap-5'>
     <div className='text-xl text-gray-700 font-semibold'>Support & Maintenance</div>
     <p className='text-base text-justify text-gray-600 '>
     Our company offers you all support and the team is always ready to answer every query after deployment.
     </p>
     </div>     
 </div>

 </div>
    
    </div>
  )
}

export default Processes
