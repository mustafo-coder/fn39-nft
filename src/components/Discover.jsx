import React from 'react'
import Slider from './Slider'

const Discover = () => {
  return (
    <div className='bg-[#2B2B2B] text-white pt-10'>
      <div className='flex items-end justify-between container py-5 '>
        <div>
          <h1 className='font-semibold text-[3rem]'>Discover More NFTs</h1>
          <h4 className='text-white/70 text-[30px]'>Explore new trending NFTs</h4>
        </div>
        <div>
          <button className='flex items-center gap-3 border text-[#A259FF] border-[#A259FF] shadow hover:bg-[#A259FF] transition-all hover:*:text-white py-3 px-9 rounded-xl'>
          <i class="fa-regular fa-eye text-[#A259FF] "></i>
            <h3>See All</h3>
          </button>
        </div>
      </div>
      <Slider/>
    </div>
  )
}

export default Discover