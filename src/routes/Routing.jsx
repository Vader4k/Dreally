import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Pricing from '../pages/Pricing'

const Routing = () => {
  return (
    <section>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </section>
  )
}

export default Routing