import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'
import Card from '../KeyFeatures/Card'

const Services = () => {

  const services =[
    { title: 'UI/UX Desginer', icon: <IoColorPaletteOutline className="w-10 h-10"/>, discription: "Leave the development of your business idea to us and enjoy its growth" },
    { title: 'UI/UX Desginer', icon: <IoColorPaletteOutline className="w-10 h-10"/>, discription: "Leave the development of your business idea to us and enjoy its growth" },
    { title: 'UI/UX Desginer', icon: <IoColorPaletteOutline className="w-10 h-10"/>, discription: "Leave the development of your business idea to us and enjoy its growth" },
    { title: 'UI/UX Desginer', icon: <IoColorPaletteOutline className="w-10 h-10"/>, discription: "Leave the development of your business idea to us and enjoy its growth" },
  ]

  return (
    <div className='w-full h-[90vh] my-8  flex flex-col justify-start items-center'>
      <div className='gap-3 mb-5 flex justify-center items-center'>
      <span className='w-[1.2rem] h-[1.2rem] rounded-t-lg rounded-bl-lg bg-[#0083FF]'></span>
     <span className='text-[#0083FF] text-base font-medium uppercase'>Services</span>
     </div>
      <h1 className='text-3xl font-medium w-full text-center align-middle'>Our Provided <span className='font-bold'>Services</span></h1>
      <div className='w-4/5 mx-5 mt-10 gap-16 flex flex-auto justify-center items-center'>
        {
          services.map((item, index) =>{
            return(
            <div key={index}>
            <Card title={item.title} icon={item.icon} discription={item.discription}/>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services
