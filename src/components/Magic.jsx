import React from 'react'

const Magic = () => {
  return (
    <div className="bg-[url('/bg-magic.png')] w-full h-[640px] bg-cover bg-center">
      <div className='container'>
        <span className='flex gap-3 text-white w-[151px] rounded-3xl px-3 py-4 bg-[#3B3B3B]'>
          <img src='../public/img-m.svg' alt='' />
          Shroomie
        </span>
        <h2 className='font-semibold text-5xl text-white mt-10'>
          Magic Mashrooms
        </h2>
        <button className='text-black bg-white rounded px-2 py-4'>See NFT</button>
      </div>
    </div>
  );
}

export default Magic