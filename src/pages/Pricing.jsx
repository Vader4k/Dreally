import { useState } from "react"
import { freeDefault, freeExtended, paidDefault, paidExtended } from '../constants'
import { freeBg, paidBg } from '../assets'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Pricing = () => {

    const [price, setPrice] = useState(true)
    const [seeMore, setSeeMore] = useState(false)

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
      

  return (
    <section className="w-full my-20">
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-col items-center text-center gap-8'>
            <div className="flex flex-col gap-7">
                <p className="text-primary-400 font-semibold">Pricing</p>
                <h1 className="font-bold text-[2rem] text-[#170F49]">Dreally Pricing</h1>
                <p className="max-w-[700px] text-[0.85rem] leading-6">Unlock the full potential of your networking experience with Dreally. Choose the plan that fits your needs and start connecting, showcasing, and growing today.</p>
            </div>

            <div className="flex items-center gap-6">
                <span>USD</span>
                <div 
                    onClick={() => setPrice((prev) => (!prev))}
                    className={`relative bg-primary-700 w-[60px] h-[30px] p-1 flex items-center rounded-3xl transition-all ${price === true ? 'justify-start' : 'justify-end'} `}>
                    <motion.div layout transition={spring} className="bg-white w-[20px] h-[20px] rounded-full cursor-pointer"/>
                </div>
                <span>NGN</span>
            </div>

            <div className="w-full flex items-center flex-wrap justify-center gap-6">
                {/* free pricing card */}
                <div className="w-full max-w-[250px] py-6 px-6 shadow-xl rounded-3xl flex flex-col items-start ">
                    <div className="flex items-center gap-5 mt-5">
                        <img className="w-[50px]" src={freeBg} alt="" />
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-neutral-300 text-[0.7rem] font-semibold">For individuals</p>
                            <h1>Free</h1>
                        </div>
                    </div>
                    <p className="text-neutral-300 capitalize text-justify leading-5 text-[0.8rem] my-6 font-Sora">
                        For your personalized dreally profile: streamline your online presence with just one link
                    </p>
                    <div className="mb-3 text-neutral-300 text-[0.8rem]">
                        <span className="font-bold text-[2.5rem] text-neutral-600 mr-2">{price === true ? '$' : 'N' }0</span> /monthly
                    </div>
                    <p className="my-3 text-neutral-600 font-bold text-[0.8rem]">What{"'"}s included</p>
                    <div className="my-4">
                        {seeMore === false && (
                            <div className="flex flex-col gap-4">
                                {freeDefault.map((items) => (
                                    <div key={items.id} className="flex items-center gap-3">
                                        <img className="w-[15px] h-[15px] object-cover" src={items.img} alt="check" />
                                        <p className="font-medium text-[0.8rem]">{items.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {seeMore === true && (
                            <div className="flex flex-col gap-4">
                            {freeExtended.map((items) => (
                                <div key={items.id} className="flex items-center gap-3">
                                    <img className="w-[15px] h-[15px] object-cover" src={items.img} alt="check" />
                                    <p className="font-medium text-[0.8rem]">{items.text}</p>
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                    <span onClick={() => setSeeMore((prev) => (!prev))} className="font-bold justify-center flex my-4 cursor-pointer text-[0.8rem] ml-8">{seeMore === false ? 'See all features' : 'See less features'}</span>
                    <Link className="w-full" to='http://app.dreally.com/login'>
                        <button className="w-full cursor-pointer rounded-[50px] border-none bg-primary-500 text-white p-4 font-semibold text-[0.8rem]">Get Started</button>
                    </Link>
                </div>
                {/* pro plan card */}
                <div className="w-full relative max-w-[300px] py-6 px-6 rounded-3xl flex flex-col items-start bg-[#6666FF]">
                    <div className="flex items-center gap-5 mt-5">
                        <img className="w-[50px]" src={paidBg} alt="paidBg" />
                        <div className="flex flex-col items-start gap-3">
                            <p className="text-gray-300 text-[0.7rem] font-semibold">For Professionals</p>
                            <h1 className="text-gray-100">Premium</h1>
                        </div>
                    </div>
                    <div className="text-gray-300 capitalize text-justify leading-5 text-[0.8rem] my-6 font-Sora whitespace-normal w-full">
                        For content creators, Entrepreneurs and businesses Advanced analytics, automatic link apps and premium support.
                    </div>
                    <div className="mb-3 text-gray-300 text-[0.8rem]">
                        <span className="font-bold text-[2.5rem] text- mr-2 text-gray-100">{price === true ? '$' : 'N' }{price === true ? '0.99' : '1000' }</span> /monthly
                    </div>
                    <p className="my-3 text-gray-100 font-bold text-[0.8rem]">What{"'"}s included</p>
                    <div className="my-4">
                        {seeMore === false && (
                            <div className="flex flex-col gap-4">
                                {paidDefault.map((items) => (
                                    <div key={items.id} className="flex items-center gap-3">
                                        <img className="w-[15px] h-15px] object-cover" src={items.img} alt="check" />
                                        <p className="font-medium text-[0.8rem] text-gray-300">{items.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {seeMore === true && (
                            <div className="flex flex-col gap-4">
                            {paidExtended.map((items) => (
                                <div key={items.id} className="flex items-center gap-3">
                                    <img className="w-[15px] h-[15px] object-cover" src={items.img} alt="check" />
                                    <p className="font-medium text-[0.8rem] text-gray-300">{items.text}</p>
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                    <span onClick={() => setSeeMore((prev) => (!prev))} className="font-bold justify-center flex my-4 cursor-pointer text-[0.9rem] text-gray-300 ml-8">{seeMore === false ? 'See all features' : 'See less features'}</span>
                    <Link className="w-full" to='https://app.dreally.com/admin/choose-payment-type/2'>
                        <button className="w-full cursor-pointer rounded-[50px] border-none bg-white p-4  text-[0.8rem] text-primary-500">Try Pro for 7 days</button>
                    </Link>
                    {/* absolute tag on top of the card */}
                    <div className="absolute top-3 right-4 bg-primary-400 text-[#FFFFFF] px-5 py-2 rounded-md text-[0.7rem] font-thin font-Sora">
                        Popular
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing