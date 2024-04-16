import { Features, Hero, Services, Slider, GetStarted } from '../components'

const Home = () => {
  return (
    <section className='flex flex-col'>
      <Hero />
      <Services />
      <Features />
      <Slider />
      <GetStarted />
    </section>
  )
}

export default Home