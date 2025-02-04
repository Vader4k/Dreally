import { features } from "../constants"
import { Accordion } from '../components'


const Features = () => {
  return (
    <section className="my-20 px-6 sm:px-8 md:px-12">
      <h1 className="font-bold text-xl ">All Available Features</h1>

      <div className="my-10 w-full">
        <Accordion items={features}/>
      </div>
    </section>
  )
}

export default Features