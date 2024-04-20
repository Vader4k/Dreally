import { useState } from "react"

const AccordionItem = ({ title, icon, text }) => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="w-full max-w-[500px] bg-primary-50 p-6 text-center rounded-[15px] flex  flex-col items-start box">
        <button
        onClick={toggle}
        className="w-full flex items-center justify-between bg-primary-50 border-none cursor-pointer"
        >
            <h1 className="font-bold text-[1.1rem] text-primary-800">{title}</h1>
            <img src={icon} className="w-[40px] h-[40px]" alt="icons" />
        </button>
        {isOpen && <div className="max-w-[450px] text-start leading-5 py-8 text-primary-800">{text}</div>}
    </div>
  )
}

const Accordion = ({ items }) => {
    return (
        <div className="flex w-full flex-wrap justify-start items-start gap-8">
            {items.map((item) => (
                <AccordionItem 
                    key={item.title} 
                    title={item.title} 
                    text={item.text} 
                    icon={item.icon} 
                />
            ))}
        </div>
    )
}

export default Accordion