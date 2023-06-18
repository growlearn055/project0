// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Landing from './Page/Landing.page'
import Footer from './components/Footer'
import Services from './Page/Services.page'
import ServicesDetails from './Page/Services.Details'


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <div className="w-4/5 mx-auto  h-full">
    <Routes>
      <Route path='/' element={ <Landing/>}/>
      <Route path='/services' element={ <Services/>}/>
      <Route path='/services/serviceDetails' element={ <ServicesDetails/>}/>
      {/* <Route path='/Blogs' element={ <Blogs/>}/>
      <Route path='/About' element={ <About/>}/>
      <Route path='/Contact' element={ <Contact/>}/> */}
    </Routes>
   </div>
    </BrowserRouter>
    <Footer/>
 
    </>
  )
}

export default App
