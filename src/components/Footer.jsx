import { footerLinks, socials } from '../constants'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center gap-20 px-4 sm:px-8 md:px-12 lg:px-28'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }} 
        className='w-full mx-auto max-w-[1100px] h-[400px] bg-vector object-cover bg-no-repeat bg-center bg-primary-500 rounded-3xl flex flex-col items-center justify-center gap-12'>
          <h1 className='text-white font-extrabold text-[1.5rem] max-w-[400px] text-center px-6 md:px-0 capitalize'>Start Creating your free portfolio for any industry today</h1>
          <Link to='https://app.dreally.com/register'>
          <button className='cursor-pointer bg-white font-bold text-primary-500 text-[0.8rem] px-12 py-4 border-none rounded-3xl'>Get Started</button>
          </Link>
      </motion.div>

      <div className='w-full text-[0.8rem] flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center gap-8 text-primary-900 capitalize font-medium'>
          {footerLinks.map((links) => (
            <Link key={links.id} to={links.url} className='no-underline text-primary-900'>
              <p>{links.name}</p>
            </Link>
          ) )}
        </div>

        <div className='flex items-center gap-8'>
        {
          socials.map((media) => (
            <Link key={media.id} to={media.url} target='_blank'>
              <img className='w-[30px]' src={media.img} alt={media.img} />
            </Link>
          ))
        }
        </div>
      </div>
    </footer>
  )
}

export default Footer