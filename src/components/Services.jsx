import { why } from '../constants'
import { customize, tag, setting, animations, live } from '../assets'
import { useState } from 'react'

const Services = () => {

  const [active, setActive] = useState(1)

  const handleActiveAccordion = (number) => {
    setActive( number === active ? 0 : number)
  }

  //handle image change on active accordion
  const getImage = () => {
    switch (active) {
      case 1:
        return <img src="/image1.jpg" alt="Accordion 1 Image" />;
      case 2:
        return <img src="/image2.jpg" alt="Accordion 2 Image" />;
      case 3:
        return <img src="/image3.jpg" alt="Accordion 3 Image" />;
      case 4:
        return <img src="/image4.jpg" alt="Accordion 4 Image" />;
      case 5:
        return <img src="/image5.jpg" alt="Accordion 5 Image" />;
      default:
        return null;
    }
  };


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

      <div className='w-full flex items-center justify-between my-10'>
          <div className='flex flex-col gap-4'>
            <div className={`${active === 1 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={setting} alt="customize icon" className='mt-2'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                    className='font-semibold text-2xl text-primary-800'
                    onClick={() => handleActiveAccordion(1)}
                  >
                    Customize your page
                  </h1>
                  { active === 1 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                    Tailor your page to perfection with our intuitive customization tools, allowing you to personalize every element to suit your brand and vision.
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 2 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={tag} alt="customize icon" className='mt-1'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                    className='font-semibold text-2xl text-primary-800'
                    onClick={() => handleActiveAccordion(2)}
                  >
                    Style your page how you want
                  </h1>
                  { active === 2 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Express your creativity and style with freedom as you design your page exactly as you envision. You have the power to bring your unique aesthetic to life.
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 3 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={animations} alt="customize icon" className='mt-1'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                    className='font-semibold text-2xl text-primary-800'
                    onClick={() => handleActiveAccordion(3)}
                  >
                    Create Animations
                  </h1>
                  { active === 3 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Bring your content to life with dynamic animation features, adding flair and interactivity to your page. Unleash your creativity and engage your audience.
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 4 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={customize} alt="customize icon"/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                    className='font-semibold text-2xl text-primary-800'
                    onClick={() => handleActiveAccordion(4)}
                  >
                    Customizable CSS Components
                  </h1>
                  { active === 4 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Take control of your page{"'"}s design with customizable CSS components, giving you the flexibility to fine-tune every aspect of your website{"'"}s appearance. 
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 5 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={live} alt="customize icon"/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                    className='font-semibold text-2xl text-primary-800'
                    onClick={() => handleActiveAccordion(5)}
                  >
                    Go Live at your will
                  </h1>
                  { active === 5 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                        TLaunch your website on your own terms with the freedom to go live whenever you{"'"}re ready. Take control of your online presence and make an impact.
                  </div>) }
              </div>
              </div>
            </div>

          </div>

        <div>{getImage()}</div>
      </div>
    </section>
  )
}

export default Services