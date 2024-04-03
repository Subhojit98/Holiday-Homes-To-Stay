import { Link } from 'react-router-dom'
import palletVillaImg from '/src/assets/Home_Page_images/pallet_villa.jpg'
import BusinessStudy from './BusinessStudy'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const Event = () => {
    const { ref, inView } = useInView({ threshold: 0.2 })
    const animation = useAnimation()
    const [hasAnimated, setHasAnimated] = useState(false)
    useEffect(() => {
        if (inView && hasAnimated) {
            animation.start({
                y: -30,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                },
                opacity: [0, 0.5, 1]
            })
        }
        else setHasAnimated(!hasAnimated)
    }, [inView, animation])

    return (
        <>
            <div ref={ref} className="tablet:flex tablet:justify-center tablet:flex-col items-center mb-24">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={animation}
                    className="w-11/12 tablet:w-[70%] bigTablet:w-1/2 h-[78%] desktop:h-[82%] pt-20 desktop:pt-40">
                    <img src={palletVillaImg} className='w-[98%] tablet:w-full  object-cover h-full' alt="event villa's image with swimming pool" />
                </motion.div>

                <div className="flex justify-center w-full h-full">
                    <div className="w-[82%] tablet:w-[60%] bigTablet:w-2/5 mt-12 bigTablet:mt-20">
                        <h1 className="text-sm font-chakra tablet:text-base">EXPLORE THE CAPTIVATING ALLURE OF MYKONOS</h1>
                        <h2 className="mt-5 text-3xl font-Raleway mb-14 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-relaxed desktop:leading-snug">Join our private villa event on 29 September – 01 October 2023 on Mykonos, Greece.</h2>
                        <p className="text-lg font-Quicksand mb-14 desktop:text-xl">On Mykonos, we celebrate new, thoughtful luxury. We invite you to connect and experience our concept and announcement of our future co-development and partnership strategy that will propel the Amēa to new heights.</p>

                        <div className="text-center mb-14 tablet:text-start">
                            <Link to={"/mykonos"}>
                                <button>
                                    <span className="relative inline-flex items-center px-16 py-5 bigTablet:px-20 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative font-chakra  text-base">Join Event</span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessStudy />
        </>
    )
}

export default Event
