import { Link } from "react-router-dom"
import intro_img from '/src/assets/3rd_Page_images/8103524.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const Intro = () => {

    const { ref, inView, } = useInView({ threshold: 0.1 })
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
            <div ref={ref} className="flex justify-center tablet:mt-20">
                <div className=" flex justify-center flex-col items-center w-11/12 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[75%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">

                    {/* Intro Text and Image section.. -> */}

                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[95%] ">
                            <div className="pt-14">
                                <h1 className="uppercase font-chakra mb-4 bigTablet:text-xl">Explore the captivating allure of Mykonos</h1>

                                <h2 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                    Join our private villa event on 30 September on Mykonos, Greece.
                                </h2>
                                <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-xl">Amēa Villas, we believe in harmony, not just for ourselves but for the communities that surround us. Our vision goes beyond profit; it fosters a better economic environment for the local community.

                                    On Mykonos, we celebrate new, thoughtful luxury. We invite you to connect and experience our concept and announcement of our future co-development and partnership strategy that will propel Amēa to new heights.The limited-access event series on Mykonos promises to be a game-changer, focusing on innovation, growth, and transformation.

                                    We aspire to create something truly meaningful: A platform to foster connection and self-growth amongst our community of like-minded investors, talented entrepreneurs, innovative thinkers, and dear friends.</p>

                                {/* Intro Buttons.. -> */}
                                <div className="flex justify-center mb-10">
                                    <Link to={"/became-investor"}>             <button>
                                        <span className="relative inline-flex items-center px-12 tablet:px-3 py-5 bigTablet:py-5 bigTablet:px-10 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-black group hover:bg-transparent">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                            <span className="absolute  tablet:right-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-20  group-hover:-translate-x-7  ease">
                                                <svg className="w-5 h-5 tablet:hidden" fill="#000" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>


                                            </span>
                                            <span className="relative font-chakra text-base">Register Now</span>
                                        </span>
                                    </button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={animation}
                        className="h-full w-full flex flex-col items-center justify-center mb-24">
                        <img src={intro_img} alt="" className="h-[90%] object-cover" />
                    </motion.div>
                </div >
            </div>

        </>
    )
}

export default Intro
