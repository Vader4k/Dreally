import Routing from '../routes/Routing'
import { Navbar, Footer } from '../components'

const Layout = () => {
  return (
    <section className='py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-col'>
        <Navbar />
        <Routing />
        <Footer />
    </section>
  )
}

export default Layout