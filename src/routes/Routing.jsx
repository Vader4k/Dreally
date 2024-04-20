import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Marketplace from '../pages/Marketplace'
import About from "../pages/About"
import Pricing from "../pages/Pricing"
import ScrollToTop from '../components/ScrollToTop'

const Routing = () => {
  return (
    <section>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </section>
  )
}

export default Routing