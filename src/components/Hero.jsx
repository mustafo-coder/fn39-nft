import React from 'react'
import heroImg from '../assets/Hero-img.png';
import acc from '../assets/acc.png'
import CountUp from 'react-countup';
const Hero = () => {

  function StatsSection() {
    return (
      <div className='flex py-5 gap-15 max-xl:gap-10 max-md:gap-5 text-white *:font-worksans'>
        <ul>
          <li className='text-3xl max-lg:text-2xl font-semibold max-md:text-xl'><CountUp end={240} duration={4}/>k+ </li>
          <li className='text-2xl max-xl:text-sm'>Total Sale</li>
        </ul>
        <ul>
          <li className='text-3xl max-lg:text-2xl font-semibold max-md:text-xl'><CountUp end={100} duration={4}/>k+</li>
          <li className='text-2xl max-xl:text-sm'>Auctions</li>
        </ul>
        <ul>
          <li className='text-3xl max-lg:text-2xl font-semibold max-md:text-xl'><CountUp end={240} duration={4}/>k+</li>
          <li className='text-2xl max-xl:text-sm'>Artists</li>
        </ul>
    </div>
    
    );
    } 

  return (
    <div className='bg-[#2B2B2B] mx-auto conatiner h-[130%] pt-15'>
      <div className='container flex max-sm:flex-col gap-20 justify-between px-25 max-md:px-15 max-lg:px-20 max-sm:px-3'>
        <div>
          <h1 className='text-7xl  max-2xl:text-6xl max-2xl:leading-17 max-xl:text-5xl max-xl:leading-15 max-lg:text-4xl max-lg:leading-12 max-md:text-3xl max-md:leading-10 max-sm:text-2xl max-sm:leading-8 leading-18 text-white pb-2 font-semibold max-w-130 w-full'>Discover digital art & Collect NFTs</h1>
          <p className='text-xl max-xl:text-[17px] max-lg:text-sm max-md:text-[12px] text-white py-3 max-w-120 opacity-70'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <a className='py-4 my-5 max-lg:my-2 inline-block px-5 max-md:py-2 max-md:px-3 max-xl:py-3 bg-[#A259FF] rounded-2xl hover:bg-transparent border border-transparent hover:border-[#A259FF] transition-all hover:text-[#A259FF] hover:scale-105' href="#"><i className='fa fa-rocket fa-sm mr-2'></i>Get started</a>
          <div className='max-sm:mt-5 sm:hidden max-w-130 max-2xl:max-w-120 max-h-130 h-full w-full bg-[#3B3B3B] rounded-3xl'>
          <img src={heroImg} className='w-full' alt="Hero-img" />
          <div className="p-7 ">
            <h3 className='text-2xl max-lg:text-xl max-md:text-sm text-white font-semibold pb-2'>
              Space Walking
            </h3>
            <div className='flex items-center gap-3'>
              <img src={acc} alt="" />
              <p className='text-white max-md:text-[10px]'>Animakid</p>
            </div>
            </div>
          </div>
          
          <StatsSection />

          
        </div>
        <div className='max-w-130 max-sm:hidden max-2xl:max-w-120 max-h-130 h-full w-full bg-[#3B3B3B] rounded-3xl'>
          <img src={heroImg} className='w-full' alt="Hero-img" />
          <div className="p-7">
            <h3 className='text-2xl max-lg:text-xl max-md:text-sm text-white font-semibold pb-2'>
              Space Walking
            </h3>
            <div className='flex items-center gap-3'>
              <img src={acc} alt="" />
              <p className='text-white max-md:text-[10px]'>Animakid</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
