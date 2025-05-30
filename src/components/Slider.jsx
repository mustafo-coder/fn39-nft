import React from 'react'
import cosmik from '../asstet/cosmik.png'
import guy from '../asstet/guy.png'
import cosmanaft from '../asstet/cosmanaft.png'

const Slider = () => {
  return (
    <div className='mt-10'>
      <div className=' h-[500px] flex items-center justify-between container'>
        <div className='bg-white/10 w-[330px] rounded-3xl'>
        <img src={cosmik} className='' alt="" />
        <div className='container'>
        <h1 className='pt-3 text-xl'>Distant Galaxy</h1>
        <div className='flex gap-2 pb-5'>
            <img src="/moon.svg" alt="" />
            <h5 className='font-mono'>MoonDancer</h5>
        </div>
        <div className='flex items-center justify-between text-white/60'>
            <p>Price</p>
            <p>Highest Bid</p>
        </div>
        <div className='flex items-center justify-between text-white text-xl pb-5'>
            <p>1.63 ETH</p>
            <p>0.33 wETH</p>
        </div>
        </div>
        </div>
        <div className='bg-white/10 w-[330px] rounded-3xl'>
        <img src={guy} className='' alt="" />
        <div className='container'>
        <h1 className='pt-3 text-xl'>Distant Galaxy</h1>
        <div className='flex gap-2 pb-5'>
            <img src="/kid.svg" alt="" />
            <h5 className='font-mono'>NebulaKid</h5>
        </div>
        <div className='flex items-center justify-between text-white/60'>
            <p>Price</p>
            <p>Highest Bid</p>
        </div>
        <div className='flex items-center justify-between text-white text-xl pb-5'>
            <p>1.63 ETH</p>
            <p>0.33 wETH</p>
        </div>
        </div>
        </div>
        <div className='bg-white/10 w-[330px] rounded-3xl'>
        <img src={cosmanaft} className='' alt="" />
        <div className='container'>
        <h1 className='pt-3 text-xl'>Distant Galaxy</h1>
        <div className='flex gap-2 pb-5'>
            <img src="/space.svg" alt="" />
            <h5 className='font-mono'>Spaceone</h5>
        </div>
        <div className='flex items-center justify-between text-white/60'>
            <p>Price</p>
            <p>Highest Bid</p>
        </div>
        <div className='flex items-center justify-between text-white text-xl pb-5'>
            <p>1.63 ETH</p>
            <p>0.33 wETH</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
