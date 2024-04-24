import { slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8 } from '../assets'

const Carousel = () => {
  return (
    <section className='banner-wraper'>
        <div className='wraper'>
            <div className='images flex gap-6 px-5'>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer object-cover' src={slide1} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Freelancers and Creatives</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Dreally provides a platform for freelancers, artists, designers, and creatives to showcase their portfolios, connect with clients, and promote their services.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide2} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Professional Services</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Professionals in industries such as legal, finance, and real estate can use Dreally to create digital business cards, share contact information, and connect with potential clients or customers.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide3} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Content Creators</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Content creators, including bloggers, vloggers, and influencers, can use Dreally to promote their content, connect with their audience, and collaborate with brands and sponsors.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide4} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Event Organizers</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Event organizers can leverage Dreally to create event-specific digital business cards, share event details, and connect with attendees before, during, and after the event.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide5} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Small Businesses</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Small businesses can benefit from Dreally{"'"}s e-commerce capabilities by showcasing and selling their products directly from their profiles, reaching a wider audience, and driving sales.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide6} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Job Seekers</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Job seekers can use Dreally to create professional profiles, showcase their skills and achievements, and network with potential employers and recruiters in their industry.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide7} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Educators and Coaches</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Educators, coaches, and trainers can use Dreally to showcase their expertise, promote their courses and services, and connect with students or clients seeking guidance and support.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide8} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Business Professionals</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Business professionals, including entrepreneurs, consultants, and executives, can use Dreally to create digital business cards, network with industry peers, and establish their online presence.
                        </p>
                    </span>
                </div>
            </div>

            <div className='images flex gap-6 px-5'>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide1} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Freelancers and Creatives</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Dreally provides a platform for freelancers, artists, designers, and creatives to showcase their portfolios, connect with clients, and promote their services.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide2} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Professional Services</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Professionals in industries such as legal, finance, and real estate can use Dreally to create digital business cards, share contact information, and connect with potential clients or customers.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide3} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Content Creators</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Content creators, including bloggers, vloggers, and influencers, can use Dreally to promote their content, connect with their audience, and collaborate with brands and sponsors.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide4} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Event Organizers</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Event organizers can leverage Dreally to create event-specific digital business cards, share event details, and connect with attendees before, during, and after the event.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[300px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide5} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Small Businesses</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Small businesses can benefit from Dreally{"'"}s e-commerce capabilities by showcasing and selling their products directly from their profiles, reaching a wider audience, and driving sales.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide6} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Job Seekers</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Job seekers can use Dreally to create professional profiles, showcase their skills and achievements, and network with potential employers and recruiters in their industry.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide7} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Educators and Coaches</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Educators, coaches, and trainers can use Dreally to showcase their expertise, promote their courses and services, and connect with students or clients seeking guidance and support.
                        </p>
                    </span>
                </div>
                <div className='relative holder bg-black h-[350px] w-[400px] overflow-hidden rounded-[40px] transition-all'>
                    <img className='w-full cursor-pointer' src={slide8} alt="" />
                    <span className='w-full px-20 absolute hidden text-white top-[50%] left-[50%] hov_txt'>
                        <h1 className='text-primary-300 text-[1rem] md:text-[1.5rem] text-center'>Business Professionals</h1>
                        <p className='my-4 text-wrap leading-7 text-center md:text-[1rem] text-[0.85rem]'>
                            Business professionals, including entrepreneurs, consultants, and executives, can use Dreally to create digital business cards, network with industry peers, and establish their online presence.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel