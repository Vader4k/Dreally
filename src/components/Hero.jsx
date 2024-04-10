
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

import group from '../assets/Group 1.png'
import { screen1, screen2 } from '../assets'
import { motion } from "framer-motion"


const Hero = () => {


  return (
    <section className="w-full flex items-center h-[90vh] justify-between">
      <div className="flex flex-col gap-5 items-start w-[50%]">
        <h1 className="font-bold text-[4rem] max-w leading-[4.6rem]">
          Create your website with our all-in-one platform for your brand
        </h1>
        <p className="leading-6 text-neutral-300 text-[1.13rem]">
          Empower your online presence from customizable design elements to seamless integrations and powerful analytics, unlock endless possibilities to showcase your business.
        </p>
        <button 
          className="py-4 my-5 px-24 border-none cursor-pointer text-white outline-none rounded-[100px] bg-primary-500"
        >
          Sign Up
        </button>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img src={group} alt="group" />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-3xl font-Sora'>2000+</h1>
            <p className='text-neutral-300 font-Sora'>Websites</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mb-20 w-[50%] h-fit'>
        <Swiper
          className='w-full h-full'
          modules={[Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000, // Increase this value to slow down autoplay (e.g., 5 seconds here)
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className='w-full h-full flex items-center justify-center'>
            <motion.div
            >
              <img className='w-[700px] cursor-pointer' src={screen1} alt="image 1" />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className='w-full h-full flex items-center justify-center'>
           <motion.div
           >
              <img className='w-[700px] cursor-pointer' src={screen2} alt="image 2" />
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero