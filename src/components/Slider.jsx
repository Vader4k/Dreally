import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';


const Slider = () => {

  return (
    <section className='w-full'>
      <div className='w-full flex'>
        <h1 className='font-extrabold text-[2.5rem] max-w-[650px]'>The Best Modern Networking Solution For <span className=''>
          <Swiper
              className='h-[100px] text-primary-400'
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
    </section>
  )
}

export default Slider