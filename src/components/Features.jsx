import { features } from "../constants"
import { Accordion } from '../components'


const Features = () => {
  return (
    <section className="my-20">
      <h1 className="font-bold text-4xl ">All Available Features</h1>

      <div className="my-10">
        <Accordion items={features}/>
      </div>
    </section>
  )
}

export default Features