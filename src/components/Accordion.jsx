import { useState } from "react"
import { motion } from 'framer-motion'

const AccordionItem = ({ title, icon, text }) => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

  return (
    <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}   
        className="w-full lg:max-w-[360px] bg-primary-50 p-4 text-center rounded-[15px] flex  flex-col items-start box">
        <button
        onClick={toggle}
        className="w-full flex items-center justify-between bg-primary-50 border-none cursor-pointer"
        >
            <h1 className="font-bold text-[1rem] text-primary-800">{title}</h1>
            <img src={icon} className="w-[30px] h-[30px]" alt="icons" />
        </button>
        {isOpen && 
            <motion.div
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} 
                className="max-w-[550px] text-start text-[0.8rem] leading-5 py-5 text-primary-800"
            >
                {text}
            </motion.div>}
    </motion.div>
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