import group from '../assets/Group 1.png'
import { aboutbg } from '../assets'
import { why } from '../constants'
import { GetStarted, FaQs } from '../components'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="w-full">
      <div className='px-6 sm:px-8 md:px-12'>
        <div className="w-full flex flex-col md:flex-row items-center justify-between my-10 md:my-20">
          <div className="flex flex-col gap-3 items-start w-full mb-20">
            <motion.h1
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} 
            className="font-bold text-[2rem] lg:text-[2.5rem] lg:leading-[3rem]">
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }} 
              className="leading-5  text-neutral-300 text-[0.8em] max-w-[500px]">
                Welcome to Dreally, your ultimate networking companion! We{"'"}re here to revolutionize the way you connect, showcase your talents, and elevate your professional presence online. With sleek digital business cards, customizable portfolios, and seamless networking tools, Dreally empowers you to make meaningful connections and stand out in a crowded digital landscape. Join us and unlock new opportunities for success. Together, let{"'"}s redefine networking
            </motion.p>
            <button 
              className="py-4 my-3 px-8 text-[0.7rem] border-none cursor-pointer text-white outline-none rounded-[100px] bg-primary-500"
            >
              Sign Up, its free!
            </button>
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }} 
              className='flex items-center gap-4'>
                <div className='flex items-center'>
                  <img className='w-[200px]' src={group} alt="group" />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-semibold  font-Sora'>2000+</h1>
                  <p className='text-neutral-300 font-Sora text-[0.8rem]'>Portfolios</p>
                </div>
            </motion.div>
          </div>

          <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}  
          className='mb-20 w-full h-fit justify-end items-end flex'>
          <img 
            src={aboutbg} 
            alt="dreally" 
            className='w-full rounded-2xl'
            />
        </motion.div>
        </div>

        <div className='my-20 w-full flex-wrap flex items-start justify-center gap-8'>
        {why.map((data) => (
          <div key={data.id} className='flex flex-col gap-3 px-5  py-5  min-h-max box bg-primary-50 rounded-2xl cursor-pointer hover:shadow-md hover:bg-primary-100 transition-all'>
            <img src={data.icon} alt="icons" className='w-[30px] h-[30px] object-cover '/>
            <h1 className='font-semibold text-base text-primary-800'>{data.title}</h1>
            <motion.p
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}   
              className='max-w-[300px] text-primary-800 text-[0.8rem] leading-5'
              >
                {data.text}
            </motion.p>
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