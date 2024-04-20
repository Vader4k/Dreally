import { started } from "../constants"
import up from '../assets/up.png'
import down from '../assets/down.png'
import { useState } from "react"

const GetStarted = () => {

  const [active, setActive] = useState(0)

  const handleClick = (id) => {
    setActive(id); // Update active state on click
  }

  let counter = 1

  return (
    <section className="w-full flex md:flex-row flex-col items-start justify-between gap-10 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="font-extrabold text-[2rem] md:text-[3rem] max-w-[700px]">Learn how to get started with Dreally</h1>
        <p className="text-neutral-300 leading-6 max-w-[500px]">
          Discover the essentials of Dreally and embark on your journey to success with confidence and ease.
        </p>
      </div>

      <div className="w-full flex flex-col gap-6 mt-5">
        {started.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-4 bottom py-5 cursor-pointer px-3">
            <div 
              className="w-full flex items-center justify-between"
              onClick={() => handleClick(item.id)} // Pass ID to handleClick
            >
              <h1 className=" text-[1.2rem] md:text-[1.4rem] font-extrabold">{item.title}</h1>
              <img 
                src={active === item.id ? down : up} 
                alt="arrow" 
                className="w-[20px]"
              /> {/* Toggle arrow based on active */}
            </div>
            {active === item.id && ( // Conditionally render content based on active state
              <div className="px-5 flex flex-col gap-3 text-[0.95rem]">
                {item.text.map((text) => (
                  <ul key={text.id} className="list-none">
                    <li className="list-inside">{counter++}. {text.text}</li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default GetStarted