import Routing from '../routes/Routing'
import { Navbar, Footer } from '../components'

const Layout = () => {
  return (
    <section className='py-10 px-10 md:px-20 2xl:px-48 flex flex-col'>
        <Navbar />
        <Routing />
        <Footer />
    </section>
  )
}

export default Layout