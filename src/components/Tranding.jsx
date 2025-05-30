import React from 'react'
import dogImage from "../assets/Primary Photo Placeholder.png";
import katarobot from "../assets/Primary Photo Placeholder (2).png";
import kataqozqorn from "../assets/Primary Photo Placeholder (1).png";
import Avatar1 from "../assets/Avatar.png";
import Avatar2 from "../assets/Avatar (1).png";
import Avatar3 from "../assets/Avatar (2).png";
import qozqorn1 from "../assets/Secondary Photo Placeholder (2).png";
import qozqorn2 from "../assets/Secondary Photo Placeholder (3).png";
import robot1 from "../assets/Secondary Photo Placeholder (5).png";
import robot2 from "../assets/Secondary Photo Placeholder (4).png";
import ayiq from "../assets/Secondary Photo Placeholder (1).png";
import mushuk from "../assets/Secondary Photo Placeholder.png";
import plus125 from "../assets/Number of additional NFTs.png";



const Tranding = () => {
  return (
    <div className="bg-zinc-900 text-white px-8 py-12">
    <h2 className="text-3xl font-bold mb-2">Trending Collection</h2>
    <p className="text-zinc-400 mb-8">Checkout Our Weekly Updated Trending Collection.</p>
  
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <img src={dogImage} classNameName="rounded-xl mb-4" />
        <div className="flex gap-2 mb-2">
          <img src={ayiq} className="w-12 h-12 rounded-lg" />
          <img src={mushuk} className="w-12 h-12 rounded-lg" />
          <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-14">1025+</div>
        </div>
        <p className="font-bold">DSGN Animals</p>
        <p className="text-sm text-zinc-400">MrFox</p>
      </div>
      <div>
        <img src={kataqozqorn} className="rounded-xl mb-4" />
        <div className="flex gap-2 mb-2">
          <img src={qozqorn1} className="w-12 h-12 rounded-lg" />
          <img src={qozqorn2} className="w-12 h-12 rounded-lg" />
          <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-14">1025+</div>
        </div>
        <p className="font-bold">Magic Mushrooms</p>
        <p className="text-sm text-zinc-400">Shroomie</p>
      </div>
      <div>
        <img src={katarobot} className="rounded-xl mb-4" />
        <div className="flex gap-2 mb-2">
          <img src={robot1} className="w-12 h-12 rounded-lg" />
          <img src={robot2} className="w-12 h-12 rounded-lg" />
          <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-14">1025+</div>
        </div>
        <p className="font-bold">Disco Machines</p>
        <p className="text-sm text-zinc-400">BeKind2Robots</p>
      </div>
    </div>
  </div>
  

  )
}

export default Tranding