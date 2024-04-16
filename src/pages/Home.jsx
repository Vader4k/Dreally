import { Features, Hero, Services, Slider, GetStarted, FaQs } from '../components'

const Home = () => {
  return (
    <section className='flex flex-col'>
      <Hero />
      <Services />
      <Features />
      <Slider />
      <GetStarted />
      <FaQs />
    </section>
  )
}

export default Home