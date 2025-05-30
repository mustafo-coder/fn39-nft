import React, { useState } from 'react';
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

const Tranding = () => {
  const [mainImage1, setMainImage1] = useState(dogImage);
  const [thumbImage1, setThumbImage1] = useState(ayiq);

  const [mainImage2, setMainImage2] = useState(kataqozqorn);
  const [thumbImage2, setThumbImage2] = useState(qozqorn1);

  const [mainImage3, setMainImage3] = useState(katarobot);
  const [thumbImage3, setThumbImage3] = useState(robot1);

  const swapImages = (mainImage, setMainImage, thumbImage, setThumbImage) => {
    setMainImage(thumbImage);
    setThumbImage(mainImage);
  };

  return (
    <div className="bg-zinc-900 text-white px-8 py-12">
      <h2 className="text-3xl font-bold mb-2">Trending Collection</h2>
      <p className="text-zinc-400 mb-8">Checkout Our Weekly Updated Trending Collection.</p>
      <div className="grid md:grid-cols-3 gap-9 ml-10">
        {/* First Collection */}
        <div>
          <img
            src={mainImage1}
            className="rounded-xl mb-4 cursor-pointer"
            onClick={() => swapImages(mainImage1, setMainImage1, thumbImage1, setThumbImage1)}
            alt="Main"
          />
          <div className="flex gap-4 mb-2 mt-4">
            <img src={thumbImage1} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <img src={mushuk} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-16">1025+</div>
          </div>
          <p className="font-bold">DSGN Animals</p>
          <p className="text-sm text-zinc-400 flex gap-2 items-center">
            <img src={Avatar1} alt="Avatar" className="w-6 h-6 rounded-full" />
            MrFox
          </p>
        </div>

        {/* Second Collection */}
        <div>
          <img
            src={mainImage2}
            className="rounded-xl mb-4 cursor-pointer"
            onClick={() => swapImages(mainImage2, setMainImage2, thumbImage2, setThumbImage2)}
            alt="Main"
          />
          <div className="flex gap-4 mb-2 mt-4">
            <img src={thumbImage2} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <img src={qozqorn2} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-16">1025+</div>
          </div>
          <p className="font-bold">Magic Mushrooms</p>
          <p className="text-sm text-zinc-400 flex gap-2 items-center">
            <img src={Avatar2} alt="Avatar" className="w-6 h-6 rounded-full" />
            Shroomie
          </p>
        </div>

        {/* Third Collection */}
        <div>
          <img
            src={mainImage3}
            className="rounded-xl mb-4 cursor-pointer"
            onClick={() => swapImages(mainImage3, setMainImage3, thumbImage3, setThumbImage3)}
            alt="Main"
          />
          <div className="flex gap-4 mb-2 mt-4">
            <img src={thumbImage3} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <img src={robot2} className="w-16 h-16 rounded-lg" alt="Thumbnail" />
            <div className="bg-purple-500 text-white px-2 rounded-lg flex items-center justify-center text-sm font-semibold w-16">1025+</div>
          </div>
          <p className="font-bold">Disco Machines</p>
          <p className="text-sm text-zinc-400 flex gap-2 items-center">
            <img src={Avatar3} alt="Avatar" className="w-6 h-6 rounded-full" />
            BeKind2Robots
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tranding;
