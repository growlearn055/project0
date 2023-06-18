import React from 'react'
import {BsRocket} from 'react-icons/bs'
import Hero from '../components/Hero/Hero'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'
import Services from '../components/Sevices/ServicesCards'
import Processes from '../components/Processes/Processes'


const Landing= () => {
  return (
    <div>
      <Hero/>
      <KeyFeatures/>
      <Services/>
      <Processes/>
    </div>
  )
}

export default Landing
