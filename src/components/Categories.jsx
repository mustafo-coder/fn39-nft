import React, { useState } from 'react';
import '../assets/css'; 
import artImageSvg from './assets/1rasm.svg';
import collectiblesImageSvg from './assets/2rasm.svg';
import musicImageSvg from './assets/3rasm.svg';
import photographyImageSvg from './assets/4rasm.svg';
import videoImageSvg from './assets/5rasm.svg';
import utilityImageSvg from './assets/6rasm.svg';
import sportImageSvg from './assets/7rasm.svg';
import virtualWorldsImageSvg from './assets/8rasm.svg';
import artImagePng from './assets/1rasm.png';
import collectiblesImagePng from './assets/2rasm.png';
import musicImagePng from './assets/3rasm.png';
import photographyImagePng from './assets/4rasm.png';
import videoImagePng from './assets/5rasm.png';
import utilityImagePng from './assets/6rasm.png';
import sportImagePng from './assets/7rasm.png';
import virtualWorldsImagePng from './assets/8rasm.png';

// Array of category objects with SVG icon and PNG background
const categories = [
  { name: 'Art', icon: artImageSvg, background: artImagePng },
  { name: 'Collectibles', icon: collectiblesImageSvg, background: collectiblesImagePng },
  { name: 'Music', icon: musicImageSvg, background: musicImagePng },
  { name: 'Photography', icon: photographyImageSvg, background: photographyImagePng },
  { name: 'Video', icon: videoImageSvg, background: videoImagePng },
  { name: 'Utility', icon: utilityImageSvg, background: utilityImagePng },
  { name: 'Sport', icon: sportImageSvg, background: sportImagePng },
  { name: 'Virtual Worlds', icon: virtualWorldsImageSvg, background: virtualWorldsImagePng },
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-btn prev">←</button>
      <div className="carousel-slide">
        <div
          className="category-card"
          style={{ backgroundImage: `url(${categories[currentIndex].background})` }}
        >
          <img src={categories[currentIndex].icon} alt={categories[currentIndex].name} className="category-icon" />
          <span className="category-name">{categories[currentIndex].name}</span>
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-btn next">→</button>
    </div>
  );
};

export default Categories;