import { why } from '../constants'

const Services = () => {
  return (
    <section className='w-full'>
      <h1 className='text-center font-bold text-4xl tracking-tighter'>why Dreally?</h1>
      <div className='my-10 w-full flex items-start justify-around gap-10'>
        {why.map((data) => (
          <div key={data.id} className='flex flex-col gap-4 p-4 box bg-primary-50 rounded-2xl'>
            <img src={data.icon} alt="icons" className='w-[60px] h-[60px] object-cover'/>
            <h1 className='font-semibold text-2xl text-primary-800'>{data.title}</h1>
            <p className='max-w-[300px] text-primary-800 text-[0.9rem] leading-6'>{data.text}</p>
          </div>
        ))}
      </div>

      <h1 className='text-center font-bold text-4xl pt-20 leading-[50px]'>
        A platform that gives you <br /> absolute power over your website
      </h1>
    </section>
  )
}

export default Services