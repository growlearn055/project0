import React from 'react'
import {BsRocket} from 'react-icons/bs'
import Hero from '../components/Landing.page/Hero/Hero'
import KeyFeatures from '../components/Landing.page/KeyFeatures/KeyFeatures'
import Services from '../components/Landing.page/Sevices/ServicesCards'
import Processes from '../components/Landing.page/Processes/Processes'
import About from '../components/Landing.page/About/About'


const Landing= () => {
  return (
    <div>
      <Hero/>
      <KeyFeatures/>
      <Services/>
      <Processes/>
      <About/>
    </div>
  )
}

export default Landing
