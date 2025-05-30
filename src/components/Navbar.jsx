import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#2B2B2B]'>
      <div className='relative container flex items-center justify-between py-5'>
        <img src="/logo.svg" alt="" />
        <div className='flex  items-center justify-between gap-10'>
          <button  className='hidden max-lg:flex'><i className='fa fa-bars fa-2xl text-white '></i></button>
          <ul className='flex gap-10 max-xl:gap-5 max-lg:flex-col max-lg:bg-gray-700 max-lg:p-10 top-0 left-0 max-lg:absolute max-lg:rounded-xl *:text-xl *:text-white *:hover:text-[#A259FF] transition-all'>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
          <a className='py-4 px-5 max-xl:py-3 bg-[#A259FF] rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-user fa-sm mr-2'></i>Sign Up</a>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar