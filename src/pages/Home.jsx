import { Features, Hero, Services } from '../components'

const Home = () => {
  return (
    <section className='flex flex-col'>
      <Hero />
      <Services />
      <Features />
    </section>
  )
}

export default Home