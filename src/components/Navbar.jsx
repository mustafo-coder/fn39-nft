import React from 'react'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className='bg-[#2B2B2B]'>
      <div className='relative container flex items-center justify-between py-5 max-sm:px-3'>
        <a href="#"><img src="/logo.svg" alt="" /></a>
        <div className='flex  items-center justify-between gap-10'>
          <button onClick={toggleMenu}  className='hidden max-lg:flex max-md:text-2xl text-3xl'><i className='fa fa-bars  text-white '></i></button>
          <ul className={`max-lg:hidden flex  gap-10 max-xl:gap-5 max-lg:flex-col max-lg:bg-gray-800 max-lg:p-10 top-0 left-0 max-lg:absolute max-lg:rounded-xl max-lg:h-screen z-20 *:text-xl *:text-white *:hover:text-[#A259FF] *:hover:scale-105 duration-300 transition-all`}>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
            <a className='md:hidden py-4 px-5 max-xl:py-3 bg-[#A259FF] max-md:bg-transparent max-md:p-0 rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-user fa-sm mr-2'></i>Sign Up</a>
          </ul>
          <ul className={`${isOpen ? 'flex' : 'hidden'} flex  gap-10 max-xl:gap-5 max-lg:flex-col max-lg:bg-gray-800 max-lg:p-10 top-0 left-0 max-lg:absolute max-lg:rounded-xl max-lg:h-screen z-20 *:text-xl *:text-white *:hover:text-[#A259FF] *:hover:scale-105 duration-300 transition-all`}>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
            <a className='md:hidden py-4 px-5 max-xl:py-3 bg-[#A259FF] max-md:bg-transparent max-md:p-0 rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-user fa-sm mr-2'></i>Sign Up</a>
          </ul>
          <a className='max-md:hidden py-4 px-5 max-xl:py-3 bg-[#A259FF] rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-user fa-sm mr-2'></i>Sign Up</a>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar