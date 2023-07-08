import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-[80%] mx-auto h-16 bg-white sticky top-0 p-2 flex justify-between items-start'>
        <Link to={'/'} className='text-3xl font-bold  w-[40rem] '>Logo</Link>
        <div className=' w-[30rem] text-sm text-[#6E7CA3] flex justify-between items-center px-2 h-10 mx-2 '>
            <Link to={'/services'} className=' cursor-pointer text-center align-middle'>Services</Link>
            {/* <Link to={'/Blogs'} className=' text-center align-middle'>Blogs</Link> */}
            <Link to={'/About'} className=' text-center align-middle'>About</Link>
            <Link to={'/Contact'} className=' text-center align-middle'>Contact</Link>
        </div>
        <div className='ml-10'>
        {/* text-[#C5EBFE] */}
            <button className='text-center border border-[#0083FF]  align-middle text-base w-32 h-10 p-1 text-[#0083FF] rounded-full'>Get Quote!</button>
        </div>
    </div>
  )
}

export default NavBar
