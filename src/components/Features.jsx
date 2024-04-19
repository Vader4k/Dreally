import { features } from "../constants"
import { Accordion } from '../components'


const Features = () => {
  return (
    <section className="my-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <h1 className="font-bold text-2xl lg:text-4xl ">All Available Features</h1>

      <div className="my-10 w-full">
        <Accordion items={features}/>
      </div>
    </section>
  )
}

export default Features