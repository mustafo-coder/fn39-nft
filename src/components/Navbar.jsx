import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#2B2B2B]'>
      <div className='container flex items-center justify-between py-5'>
        <img src="/logo.svg" alt="" />
        <ul className='flex gap-10 *:text-xl *:text-white *:hover:text-[#A259FF] transition-all'>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a wallet</li>
          <li><a className='py-4 px-5 bg-[#A259FF] rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-user fa-sm mr-2'></i>Sign Up</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar