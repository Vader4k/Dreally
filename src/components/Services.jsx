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
        return <img className='w-[800px] object-cover' src="https://images.unsplash.com/photo-1554757387-2a28855c78fb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accordion 1 Image" />;
      case 2:
        return <img className='w-[800px] object-cover'  src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accordion 2 Image" />;
      case 3:
        return <img className='w-[800px] object-cover'  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accordion 3 Image" />;
      case 4:
        return <img className='w-[800px] object-cover'  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accordion 4 Image" />;
      case 5:
        return <img className='w-[800px] object-cover'  src="https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accordion 5 Image" />;
      default:
        return null;
    }
  };


  return (
    <section className='w-full'>
      <h1 className='text-center font-bold text-4xl tracking-tighter pb-10'>why Dreally?</h1>
      <div className='my-10 w-full flex items-start justify-center gap-16'>
        {why.map((data) => (
          <div key={data.id} className='flex flex-col gap-4 p-8 box bg-primary-50 rounded-2xl'>
            <img src={data.icon} alt="icons" className='w-[60px] h-[60px] object-cover'/>
            <h1 className='font-semibold text-2xl text-primary-800'>{data.title}</h1>
            <p className='max-w-[350px] text-primary-800 text-[1.1rem] leading-6'>{data.text}</p>
          </div>
        ))}
      </div>

      <h1 className='text-center font-bold text-4xl pt-60 leading-[50px]'>
        A platform that gives you <br /> absolute power over your website
      </h1>

      <div className='w-full flex items-center justify-between py-20'>
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
                        Launch your website on your own terms with the freedom to go live whenever you{"'"}re ready. Take control of your online presence and make an impact.
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