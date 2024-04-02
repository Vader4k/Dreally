import Routing from '../routes/Routing'
import { Navbar, Footer } from '../components'

const Layout = () => {
  return (
    <section className='py-10 px-48 flex flex-col gap-10'>
        <Navbar />
        <Routing />
        <Footer />
    </section>
  )
}

export default Layout