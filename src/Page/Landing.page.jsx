import React from 'react'
import {BsRocket} from 'react-icons/bs'
import Hero from '../components/Landing.page/Hero/Hero'
import KeyFeatures from '../components/Landing.page/KeyFeatures/KeyFeatures'
import Services from '../components/Landing.page/Sevices/ServicesCards'
import Processes from '../components/Landing.page/Processes/Processes'
import About from '../components/Landing.page/About/About'
import Contact from '../components/Landing.page/Contact/Contact'


const Landing= () => {
  return (
    <div>
      <Hero/>
      <KeyFeatures/>
      <Services/>
      <Processes/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Landing
