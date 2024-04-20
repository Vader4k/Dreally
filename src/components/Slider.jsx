import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';
import Carousel from './Carousel';

const Slider = () => {

  return (
    <section className='w-full my-20'>
      <div className='w-full text-center flex items-center justify-center'>
        <h1 className='font-extrabold text-[2rem] md:text-[2.5rem] max-w-[650px] px-5'>The Best Modern Networking Solution For <span>
          <Swiper
              className='h-[100px] my-6 text-primary-400'
              modules={[Autoplay ]}
              grabCursor={true}
              direction='vertical'
              autoplay={{
                  delay: 2000, // Increase this value to slow down autoplay (e.g., 5 seconds here)
                  disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                    <p>Freelancers and Creatives</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Professional Services</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Event Organizers</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Content Creators</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Small Businesses</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Job Seekers</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Educators and Coaches</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Business Professionals</p>
                </SwiperSlide>
            </Swiper>
        </span></h1>
      </div>

      <div className='w-full my-10'>
        <Carousel />
      </div>

    </section>
  )
}

export default Slider