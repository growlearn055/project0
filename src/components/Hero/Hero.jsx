import React from 'react'
import IMG from '../../assets/Website_Builders.png'
const Hero = () => {
  return (
    <div className='w-full h-[90vh]  flex justify-center items-center'>
        <div className="w-full  flex flex-row justify-center items-center">
            <div className=' w-2/5 h-full'>
                <h2 className=' text-base m-4 px-2'>WELCOME TO COMPNY</h2>
                <h1 className='text-5xl m-4 px-1 mt-10 mb-5 w-full  font-bold'>Grow Your Business With <small className='text-[#0083FF] text-5xl'>Our Solutions</small></h1>
                <p className='text-base text-[#6E7CA3] m-4 mb-8 px-2 w-3/5'>We provied all the services that you need to boost your busniness to a high level</p>
                <button className='bg-[#0083FF] rounded-2xl w-36 h-12 m-4 px-2 text-center align-middle text-white '>Get Quote</button>
            </div>
            <div className=' w-3/5 h-full'>
                {/* <div className='fixed z-20 bg-[#c5ebfeb7] w-[30rem] h-[30rem] right-60 rounded-full'></div> */}
                <img src={IMG} className='h-[80vh] ' alt="" />
            </div>
        </div>
    
    </div>
  )
}

export default Hero
