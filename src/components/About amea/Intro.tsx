import { Link } from 'react-router-dom'
import introImg_1 from '../../assets/4th_Page_images/San_Giorgio_Cliffs_171.jpg'
import introImg_2 from '../../assets/4th_Page_images/79452002_1202094109984362_1863676249259868194_n.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const Intro = () => {

    const { ref, inView, } = useInView({ threshold: 0.3 })
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
            {/* First Scetion Image and text.. -> */}

            <div ref={ref} className="flex justify-center tablet:mt-20">
                <div className=" flex justify-center flex-col items-center w-11/12 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[90%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">

                    {/* Intro_1 Text and Image section.. -> */}

                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[95%] ">
                            <div className="pt-14">
                                <h1 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                    AMĒA IS A COMBINATION OF INNOVATIVE PERSONALISED HOSPITALITY, UNIQUE LOCATIONS, AND THE CONSCIOUS NEW LUXURY
                                </h1>
                                <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-xl">Amēa develops modern, laid-back luxury villas that cater to conscious, affluent travelers looking for an environment to experience the moment and indulge in their practice of mindful living. The purpose is to create an opportunity for intimate cultural interactions in an environment where the beauty of nature, history, movement, innovation, and comfort meet.

                                    Holiday homes often sit around empty throughout the year and only get used during a short period of time throughout the length of possession. Thoughtful luxury changes this through fragmented ownership and a rethought timesharing model. Amēa provides access to breathtaking villas that cater to a modern lifestyle without the burden and risk of being the sole owner of a part-time holiday home.

                                    We believe that single residences are quickly becoming a thing of the past and an outdated way of thinking. Modern nomads love to live their lives boldly – change their locations every now and then to discover new worlds. We combine the inner urge to get the best life has to offer with the comfort of real estate ownership. Allowing our investors to diversify their wealth across multiple locations, home becomes more than just a place, it becomes an experience – it’s anywhere and everywhere.</p>

                            </div>
                        </div>

                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={animation}
                        className="h-full w-full flex flex-col items-center justify-center">
                        <img src={introImg_1} alt="" className="h-[90%] tablet:h-[60%] desktop:h-[83%] w-full object-cover" />
                    </motion.div>
                </div >
            </div>

            {/* Second Section text and Image.. -> */}

            <div className="flex justify-center tablet:mt-20">
                <div className=" flex justify-center flex-col items-center w-11/12 tablet:flex-row tablet:gap-14 bigTablet:w-[90%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">

                    {/* Intro_2 Text and Image section.. -> */}

                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[95%] ">
                            <h1 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                An environment to fully experience the moment and foster a mindful longevity
                            </h1>
                            <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-xl">Amēa villas are made for private holiday stays and exclusive events, nestled in the world’s most breathtaking yet undiscovered locations. The villas cater to the affluent traveler in search of an environment to live in the present moment, to stimulate longevity and promote a conscious life.

                                Amēa embodies a way of living that focuses on enjoying the universal beauty hidden behind imperfections, and embracing the natural cycle of growth and decay.
                                The purpose of this project is to create an opportunity for intimate cultural interactions in an environment where the beauty of nature, innovation, and comfort meet.

                                The locations have been chosen specifically to stimulate transformative experiences and capture awe-inspiring views. The villa is designed to frame the spectacular view, encapsulating and reflecting the best of its surroundings. The villa welcomes its guests from all around the world in a grounding space of a new belonging, inspiration, and calm creativity. Amēa values privacy and demonstrates it throughout their villa designs and interaction with their valued investors.</p>

                            {/* Intro Buttons.. -> */}
                            <div className="text-center  tablet:text-start mb-10">
                                <Link to={"/became-investor"} >
                                    <button>
                                        <span className="relative inline-flex items-center px-14 py-3 tablet:px-10 tablet:py-4 bigTablet:py-5 bigTablet:px-16 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-white group hover:bg-white">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative font-chakra text-base">Became Owner</span>
                                        </span>
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: -30, opacity: 1 }}
                        className="h-full w-full flex flex-col items-center justify-center">
                        <img src={introImg_2} alt="" className="h-[90%] tablet:h-1/2  desktop:h-[70%] object-cover" />
                    </motion.div>
                </div >
            </div>
        </>
    )
}

export default Intro
