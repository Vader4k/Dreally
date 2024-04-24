
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

import group from '../assets/Group 1.png'
import { screen1, screen2, play } from '../assets'
import { motion }from 'framer-motion'
import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <section className="w-full mt-10 flex flex-col lg:flex-row items-start lg:items-center min-h-[90vh] justify-between px-6 sm:px-8 md:px-12 overflow-hidden">
      <div className="flex flex-col gap-3 items-start w-full mb-20">
        <motion.h1
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-extrabold w-full max-w-[600px] text-[2rem] lg:text-[2.5rem] lg:leading-[3rem]">
          Empower your online presence with Dreally, your all in one platform.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="leading-6 text-neutral-300 text-[1rem] max-w-[500px]">
          Join the community of professionals taking their online presence to the next level with Dreally. Connect effortlessly, showcase your expertise, and make a lasting impression. Start networking smarter today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} 
          className='flex items-center gap-3'>
            <Link to='https://app.dreally.com/register'>
            <button 
              className="py-4 my-3 px-9 border-none cursor-pointer text-white outline-none rounded-[100px] bg-primary-500"
            >
              Sign Up, its free!
            </button>
            </Link>

          <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-primary-400'>
            <img className='animate-pulse w-[30px] cursor-pointer' src={play} alt="play" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }} 
          className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img className='w-[200px]' src={group} alt="group" />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-xl font-Sora'>2000+</h1>
            <p className='text-neutral-300 font-Sora text-[0.8rem]'>Portfolios</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} 
        className=' w-full lg:w-[40%] h-fit mb-20'>
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
      </motion.div>
    </section>
  )
}

export default Hero