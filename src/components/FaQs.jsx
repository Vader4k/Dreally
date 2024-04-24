import { questions } from "../constants"
import { useState } from "react"
import up from '../assets/up.png'
import down from '../assets/down.png'
import { motion } from 'framer-motion'

const FaQs = () => {

  const [active, setActive] = useState(0)

  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <section className="w-full flex items-center justify-center py-20 lg:py-28 px-6 sm:px-8 md:px-12">
      <div className="flex flex-col gap-5">
        <div className="text-center">
          <h1 className="text-xl font-extrabold">Frequently Asked Questions</h1>
          <p className="text-neutral-300 py-4 text-[0.9rem]">Get answers to all the questions bothering you</p>
        </div>

        <div className="w-full flex flex-col gap-6 mt-5">
        {questions.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-4 bottom py-5 cursor-pointer px-3">
            <div 
              className="w-full flex items-center justify-between"
              onClick={() => handleClick(item.id)} // Pass ID to handleClick
            >
              <h1 className="text-[1rem] font-bold">{item.title}</h1>
              <img 
                src={active === item.id ? down : up} 
                alt="arrow" 
                className="w-[20px]"
              /> {/* Toggle arrow based on active */}
            </div>
            {active === item.id && ( // Conditionally render content based on active state
              <motion.div
                initial={{ opacity: 0, y: '50%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}  
                className="text-[0.9rem] max-w-[600px] leading-6 text-neutral-300">
                {item.reply}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default FaQs