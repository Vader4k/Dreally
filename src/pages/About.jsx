import group from '../assets/Group 1.png'
import { aboutbg } from '../assets'
import { why } from '../constants'
import { GetStarted, FaQs } from '../components'

const About = () => {
  return (
    <section className="w-full">
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
        <div className="w-full flex items-center justify-between my-20">
          <div className="flex flex-col gap-5 items-start w-full mb-20">
            <h1 className="font-bold text-[4rem] max-w leading-[4.6rem]">
              About Us
            </h1>
            <p className="leading-7 text-neutral-300 text-[1.1rem] max-w-[600px]">
              Welcome to Dreally, your ultimate networking companion! We{"'"}re here to revolutionize the way you connect, showcase your talents, and elevate your professional presence online. With sleek digital business cards, customizable portfolios, and seamless networking tools, Dreally empowers you to make meaningful connections and stand out in a crowded digital landscape. Join us and unlock new opportunities for success. Together, let{"'"}s redefine networking
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

          <div className='mb-20 w-full h-fit justify-end items-end flex'>
          <img 
            src={aboutbg} 
            alt="dreally" 
            className='w-full rounded-2xl'
            />
        </div>
        </div>

        <div className='my-10 w-full flex flex-wrap items-start justify-center gap-16'>
          {why.map((data) => (
            <div key={data.id} className='flex flex-col gap-4 px-6 lg:px-8 py-4 lg:py-6 min-h-[310px] box bg-primary-50 rounded-2xl cursor-pointer hover:shadow-md hover:bg-primary-100 transition-all'>
              <img src={data.icon} alt="icons" className='w-[50px] h-[50px] object-cover '/>
              <h1 className='font-semibold text-xl lg:text-2xl text-primary-800'>{data.title}</h1>
              <p className='max-w-[350px] text-primary-800 text-[0.95rem] lg:text-[1rem] leading-6'>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <GetStarted />
      <FaQs />
    </section>
  )
}

export default About