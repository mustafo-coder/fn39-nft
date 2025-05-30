import React from 'react';
import '../assets/style.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation module styles
import 'swiper/css/pagination'; // Import pagination module styles
import artImageSvg from '../assets/1rasm.svg';
import collectiblesImageSvg from '../assets/2rasm.svg';
import musicImageSvg from '../assets/3rasm.svg';
import photographyImageSvg from '../assets/4rasm.svg';
import videoImageSvg from '../assets/5rasm.svg';
import utilityImageSvg from '../assets/6rasm.svg';
import sportImageSvg from '../assets/7rasm.svg';
import virtualWorldsImageSvg from '../assets/8rasm.svg';
import artImagePng from '../assets/1rasm.png';
import collectiblesImagePng from '../assets/2rasm.png';
import musicImagePng from '../assets/3rasm.png';
import photographyImagePng from '../assets/4rasm.png';
import videoImagePng from '../assets/5rasm.png';
import utilityImagePng from '../assets/6rasm.png';
import sportImagePng from '../assets/7rasm.png';
import virtualWorldsImagePng from '../assets/8rasm.png';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

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
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Register modules here
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className="category-card"
              style={{ backgroundImage: `url(${category.background})` }}
            >
              <img src={category.icon} alt={category.name} className="category-icon" />
              <span className="category-name">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;