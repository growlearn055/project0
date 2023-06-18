import React from 'react'
import Carousel from './Carousel'

const KeyFeatures = () => {
  return (
    <div className='w-full h-[100vh] mt-16 flex flex-col justify-start items-center'>
      <div className='gap-3 mt-20 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[#0083FF]'></span>
     <span className='text-[#0083FF] text-base font-medium'>FETURES</span>
     </div>
      <h1 className='text-3xl font-medium w-full text-center align-middle'>Our Key <span className='font-bold'>Feature</span></h1>
      <Carousel/>
    </div>
  )
}

export default KeyFeatures
