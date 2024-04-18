import Routing from '../routes/Routing'
import { Navbar, Footer } from '../components'

const Layout = () => {
  return (
    <section className='py-10 flex flex-col'>
        <Navbar />
        <Routing />
        <Footer />
    </section>
  )
}

export default Layout