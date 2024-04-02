import Routing from '../routes/Routing'
import { Navbar, Footer } from '../components'

const Layout = () => {
  return (
    <section>
        <Navbar />
        <Routing />
        <Footer />
    </section>
  )
}

export default Layout