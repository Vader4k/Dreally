import { questions } from "../constants"
import { useState } from "react"
import up from '../assets/up.png'
import down from '../assets/down.png'

const FaQs = () => {

  const [active, setActive] = useState(0)

  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <section className="w-full flex items-center justify-center py-20 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col gap-5">
        <div className="text-center">
          <h1 className="text-[2rem] font-extrabold">Frequently Asked Questions</h1>
          <p className="text-neutral-300 py-4">Get answers to all the questions bothering you</p>
        </div>

        <div className="w-full flex flex-col gap-6 mt-5">
        {questions.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-4 bottom py-5 cursor-pointer px-3">
            <div 
              className="w-full flex items-center justify-between"
              onClick={() => handleClick(item.id)} // Pass ID to handleClick
            >
              <h1 className="text-[1.2rem] lg:text-[1.5rem] font-bold">{item.title}</h1>
              <img 
                src={active === item.id ? down : up} 
                alt="arrow" 
                className="w-[20px]"
              /> {/* Toggle arrow based on active */}
            </div>
            {active === item.id && ( // Conditionally render content based on active state
              <div className="text-[1rem] max-w-[800px] leading-7 text-neutral-300">
                {item.reply}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default FaQs