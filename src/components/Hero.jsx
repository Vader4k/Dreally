import group from '../assets/Group 1.png'

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-between h-screen ">
      <div className="flex flex-col gap-5 items-start flex-1">
        <h1 className="font-bold text-[4rem] max-w leading-[4.6rem]">
          Create your website with our all-in-one platform for your brand
        </h1>
        <p className="leading-6 text-neutral-300 text-[1.13rem]">
          Empower your online presence from customizable design elements to seamless integrations and powerful analytics, unlock endless possibilities to showcase your business.
        </p>
        <button 
          className="py-4 my-5 px-24 border-none cursor-pointer text-white outline-none rounded-[100px] bg-primary-500"
        >
          Sign Up
        </button>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img src={group} alt="group" />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-3xl font-Sora'>2000+</h1>
            <p className='text-neutral-300 font-Sora'>Websites</p>
          </div>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-center'>
        coming back for this
      </div>
    </section>
  )
}

export default Hero