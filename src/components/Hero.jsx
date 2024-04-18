
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

import group from '../assets/Group 1.png'
import { screen1, screen2 } from '../assets'

const Hero = () => {


  return (
    <section className="w-full flex items-center h-[90vh] justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col gap-5 items-start w-[50%] mb-20">
        <h1 className="font-bold text-[4rem] max-w leading-[4.6rem]">
          Empower your online presence with Dreally, your all in one platform.
        </h1>
        <p className="leading-6 text-neutral-300 text-[1.13rem] max-w-[600px]">
          Join the community of professionals taking their online presence to the next level with Dreally. Connect effortlessly, showcase your expertise, and make a lasting impression. Start networking smarter today!
        </p>
        <button 
          className="py-4 my-5 px-24 border-none cursor-pointer text-white outline-none rounded-[100px] bg-primary-500"
        >
          Sign Up, its free!
        </button>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img src={group} alt="group" />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-3xl font-Sora'>2000+</h1>
            <p className='text-neutral-300 font-Sora'>Portfolios</p>
          </div>
        </div>
      </div>

      <div className='mb-20 w-[50%] h-fit'>
        <Swiper
          className='w-full h-full'
          modules={[Autoplay ]}
          grabCursor={true}
          autoplay={{
            delay: 5000, // Increase this value to slow down autoplay (e.g., 5 seconds here)
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
              <img className='w-full cursor-pointer' src={screen1} alt="image 1" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='w-full cursor-pointer' src={screen2} alt="image 2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero