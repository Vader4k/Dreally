import { why } from '../constants'
import { charts, sharable, chartsClosed, card, cardClosed, customize, customizeClosed, share, shareClosed, tag, tagClosed, analytics, dreallyCard, customizable, seamless } from '../assets'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Info from './Info'

const Services = () => {

  const [active, setActive] = useState(1)

  const handleActiveAccordion = (number) => {
    setActive( number === active ? 0 : number)
  }

  //handle image change on active accordion
  const getImage = () => {
    switch (active) {
      case 1:
        return <img className='w-[800px] object-cover' src={customizable} alt="customizable profile" />;
      case 2:
        return <img className='w-[800px] object-cover'  src={seamless} alt="seamless connection" />;
      case 3:
        return <img className='w-[800px] object-cover'  src={analytics} alt="Analutics and insight" />;
      case 4:
        return <img className='w-[800px] object-cover'  src={sharable} alt="sharable profile links" />;
      case 5:
        return <img className='w-[800px] object-cover'  src={dreallyCard} alt="dreally business card" />;
      default:
        return null;
    }
  };



  return (
    <section className='w-full'>
      <h1 className='text-center font-bold text-4xl tracking-tighter pb-10'>why Dreally?</h1>
      <div className='my-10 w-full flex items-start justify-center gap-16'>
        {why.map((data) => (
          <div key={data.id} className='flex flex-col gap-4 px-8 py-6 min-h-[310px] box bg-primary-50 rounded-2xl cursor-pointer hover:shadow-md hover:bg-primary-100 transition-all'>
            <img src={data.icon} alt="icons" className='w-[50px] h-[50px] object-cover '/>
            <h1 className='font-semibold text-2xl text-primary-800'>{data.title}</h1>
            <p className='max-w-[350px] text-primary-800 text-[1rem] leading-6'>{data.text}</p>
          </div>
        ))}
      </div>

      <Info />

      <h1 className='text-center font-bold text-4xl mt-40 leading-[50px]'>
        A platform that helps you 
        <br /> 
       {" "}
        <span className='text-primary-400'>
          <Typewriter
            words={['elevate your networking game', 'showcase your professional portfolio', 'connect seamlessly']} 
            loop={true}
            cursor
            cursorBlinking={true}
            cursorStyle='|'
            typeSpeed={30}
            delaySpeed={2000}
            deleteSpeed={30}
          />
        </span> 
      </h1>

      <div className='w-full flex items-center justify-between py-20'>
          <div className='flex flex-col gap-4'>
            <div className={`${active === 1 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={`${active === 1 ? customize : customizeClosed}`} alt="customize icon" className='w-[30px] transition-all'/>
                <div className='flex flex-col w-full items-start gap-3 transition-all'>
                  <h1 
                    className={`font-semibold text-2xl transition-all ${active === 1 ? 'text-primary-800' : 'text-neutral-100'}`}
                    onClick={() => handleActiveAccordion(1)}
                  >
                    Customizable Portfolio showcase
                  </h1>
                  { active === 1 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      showcase your skills and achievements with customizable portfolio templates
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 2 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={`${active === 2 ? tag : tagClosed}`} alt="customize icon" className='w-[30px] transition-all'/>
                <div className='flex flex-col w-full items-start gap-3 transition-all'>
                  <h1 
                    className={`font-semibold text-2xl ${active === 2 ? 'text-primary-800' : 'text-neutral-100'} transition-all`}
                    onClick={() => handleActiveAccordion(2)}
                  >
                    Seamless Networking Tools
                  </h1>
                  { active === 2 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Connect effortlessly with click-to-call functionality, instant sharing, and seamless contact management.
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 3 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={`${active === 3 ? charts : chartsClosed}`} alt="customize icon" className='w-[30px]'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                   className={`font-semibold text-2xl ${active === 3 ? 'text-primary-800' : 'text-neutral-100'}`}
                    onClick={() => handleActiveAccordion(3)}
                  >
                    Analytics and Insights
                  </h1>
                  { active === 3 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Gain valuable insights into your networking activities with built-in analytics tools.
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 4 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={`${active === 4 ? share : shareClosed}`} alt="customize icon" className='w-[30px]'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                   className={`font-semibold text-2xl ${active === 4 ? 'text-primary-800' : 'text-neutral-100'}`}
                    onClick={() => handleActiveAccordion(4)}
                  >
                    Shareable Dreally Link
                  </h1>
                  { active === 4 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                      Add your unique dreally Vcard URL to all the platforms and places you find your audience. Then use your Dreally Card to drive your offline traffic online. 
                  </div>) }
              </div>
              </div>
            </div>

            <div className={`${active === 5 ? 'border bg-primary-50' : ''} flex flex-col gap-3 cursor-pointer p-6 min-w-[400px] transition-all`}>
              <div className='flex items-start  gap-3'>
                <img src={`${active === 5 ? card : cardClosed}`} alt="customize icon" className='w-[30px]'/>
                <div className='flex flex-col w-full items-start gap-3'>
                  <h1 
                   className={`font-semibold text-2xl ${active === 5 ? 'text-primary-800' : 'text-neutral-100'}`}
                    onClick={() => handleActiveAccordion(5)}
                  >
                    Sleek Digital Business Cards
                  </h1>
                  { active === 5 
                    && 
                    (<div className='max-w-[350px] leading-6 text-primary-800 text-[0.9rem]'>
                        Stand out with customizable digital business cards that make a lasting impression.
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