import { Hero, Services } from '../components'

const Home = () => {
  return (
    <section className='flex flex-col gap-20'>
      <Hero />
      <Services />
    </section>
  )
}

export default Home