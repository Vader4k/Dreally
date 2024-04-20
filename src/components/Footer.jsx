import { insta, tiktok, twitter, dreally } from '../assets'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center gap-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <div className='w-full mx-auto max-w-[1100px] h-[400px] bg-vector object-cover bg-no-repeat bg-center bg-primary-500 rounded-3xl flex flex-col items-center justify-center gap-12'>
        <h1 className='text-white font-extrabold text-[1.5rem] lg:text-[2.5rem] max-w-[600px] text-center px-6 md:px-0'>Start Creating your free portfolio for any industry today</h1>
        <button className='cursor-pointer bg-white font-bold text-primary-500 text-[1rem] px-24 py-5 border-none rounded-3xl'>Get Started</button>
      </div>

      <div className='w-full flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center gap-12 text-primary-900 capitalize font-medium'>
          <p>Templates</p>
          <p>pricing</p>
          <p>about us</p>
        </div>

        <div className='flex items-center gap-12'>
          <img className='w-[40px] md:w-full' src={dreally} alt="dreally" />
          <img className='w-[40px] md:w-full' src={insta} alt="instagram" />
          <img className='w-[40px] md:w-full' src={twitter} alt="twitter" />
          <img className='w-[40px] md:w-full' src={tiktok} alt="tiktok" />
        </div>
      </div>
    </footer>
  )
}

export default Footer