import { useState } from "react"
import { freeDefault, freeBlocked } from '../constants'

const Pricing = () => {

    const [price, setPrice] = useState(true)
    const [seeMore, setSeeMore] = useState(false)

  return (
    <section className="w-full my-20">
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-col items-center text-center gap-8'>
            <div className="flex flex-col gap-7">
                <p className="text-primary-400 font-semibold">Pricing</p>
                <h1 className="font-bold text-[4rem] text-[#170F49]">Simple, transparent pricing</h1>
                <p className="max-w-[700px] leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
            </div>

            <div className="flex items-center gap-6">
                <span>NGN</span>
                <div 
                    onClick={() => setPrice((prev) => (!prev))}
                    className={`relative bg-primary-700 w-[60px] h-[30px] p-1 flex items-center rounded-3xl transition-all ${price === true ? 'justify-start' : 'justify-end'} `}>
                    <div className="bg-white w-[20px] h-[20px] rounded-full cursor-pointer"/>
                </div>
                <span>USD</span>
            </div>

            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-[300px] p-6 shadow-xl">
                    <div className="flex items-center gap-3">
                        <img src="" alt="" />
                        <div>
                            <p>For individuals</p>
                            <h1>Free</h1>
                        </div>
                    </div>
                    <p className="text-neutral-300 uppercase leading-7 text-[0.95rem] font-Sora">
                        For your personalized dreally profile: streamline your online presence with just one link
                    </p>
                    <div>
                        <span>{price === true ? '$' : 'N' }0</span> /monthly
                    </div>
                    <p>What{"'"}s included</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing