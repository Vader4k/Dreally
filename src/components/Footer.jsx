import vector from '../assets/vector.png'
import { insta, tiktok, twitter, dreally } from '../assets'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center gap-20'>
      <div className='w-full mx-auto max-w-[1100px] h-[400px] bg-vector object-cover bg-no-repeat bg-center bg-primary-500 rounded-3xl flex flex-col items-center justify-center gap-12'>
        <h1 className='text-white font-extrabold text-[2.5rem] max-w-[600px] text-center'>Start Creating your free portfolio for any industry today</h1>
        <button className='bg-white font-bold text-primary-500 text-[1rem] px-24 py-5 border-none rounded-3xl'>Get Started</button>
      </div>

      <div className='w-full flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center gap-12 text-primary-900 capitalize font-medium'>
          <p>Templates</p>
          <p>pricing</p>
          <p>about us</p>
        </div>

        <div className='flex items-center gap-12'>
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={tiktok} alt="tiktok" />
          <img src={dreally} alt="dreally" />
        </div>
      </div>
    </footer>
  )
}

export default Footer