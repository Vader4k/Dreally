import img1 from '../assets/about1.png'
import img2 from '../assets/about2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

const Info = () => {
  return (
    <section className='w-full flex items-center justify-evenly gap-14 pt-28 py-10 px-20'>
        <div className='w-full p-5 flex items-center justify-center overflow-hidden'>
            <Swiper
                className='w-full rounded-3xl overflow-hidden'
                modules={[Autoplay ]}
                grabCursor={true}
                autoplay={{
                    delay: 2000, // Increase this value to slow down autoplay (e.g., 5 seconds here)
                    disableOnInteraction: false,
                }}
                >
                <SwiperSlide>
                    <img className='cursor-pointer w-[600px]' src={img1} alt="image 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='cursor-pointer w-[600px]' src={img2} alt="image 2" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='w-full p-5'>
            <h1 className='font-extrabold text-[3rem]'>
                Craft and personalize your Dreally profile in minutes
            </h1>
            <p className='text-neutral-300 leading-6 py-4'>
                Welcome to Dreally, your ultimate networking companion! We{"'"}re here to revolutionize the way you connect, showcase your talents, and elevate your professional presence online. With sleek digital business cards, customizable portfolios, and seamless networking tools, Dreally empowers you to make meaningful connections and stand out in a crowded digital landscape. Join us and unlock new opportunities for success. Together, let{"'"}s redefine networking
            </p>
            <button className=' px-16 py-4 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer'>
                Get Started
            </button>
        </div>
    </section>
  )
}

export default Info