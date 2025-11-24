// ImageSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper
import 'swiper/css/navigation'; // Navigation buttons
import 'swiper/css/pagination'; // Pagination dots
import bg from '../assets/graphic/bg.png'
import bgvideo from '../assets/graphic/bgvideo.mp4'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const images = [
  'https://i.pinimg.com/736x/55/76/22/5576227d98fd1f39766045e053607cf5.jpg',
  'https://i.pinimg.com/736x/5b/81/ed/5b81eda4366796ab2536652e07b0019c.jpg',
  'https://i.pinimg.com/736x/79/f7/5c/79f75c187818637fa47a613da7e4f9c0.jpg',
  'https://i.pinimg.com/736x/6f/a6/ba/6fa6ba351a6c23dc27ed1e8b14cfd278.jpg',
 
];

const ImageSlider = () => {
  return (
    // <div className="w-full bg-black md:max-w-[100%] overflow-hidden mx-auto">
    //   <Swiper 
    //     modules={[Navigation, Pagination, Autoplay]}
    //     spaceBetween={30}
    //     slidesPerView={1}
    //     // navigation
    //     pagination={{ clickable: true }}
    //     loop={true}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
       
        
    //   >
    //     {images.map((url, index) => (
    //       <SwiperSlide key={index}>
    //         <img src={url}  alt={`slide-${index}`} className="transition-transform w-screen inset-0 opacity-60 h-screen object-cover rounded-lg kenburns"/>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <>
    <div className='sliderimage bg-green-950 w-screen h-screen md:max-w-[100%] mt-0 overflow-hidden mx-auto'>
      <video className='  w-[100%] h-screen object-cover inset-0' loop="true" autoplay="autoplay" muted><source src={`${bgvideo}`}  /></video>
      {/* <img className='w-[100%] h-screen object-cover' src={bg} alt="" /> */}
    </div>
    </>
  );
};

export default ImageSlider;
