import { MotiveData } from '../../../data/ProgramMotiveData'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
const PiceOfAmea = () => {
    const { ref, inView } = useInView({ threshold: 0.3 })
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
            <div ref={ref}>
                {
                    MotiveData?.map(({ id, head, title, body_1_text, body_2_text, btn_1_Text, btn_2_Text, image, imagePosition, imagePostionOnFlex }) => {

                        return <div key={id} className={` tablet:flex tablet:justify-center tablet:mt-10 bigTablet:pt-10 ${imagePostionOnFlex} desktop:pt-20 gap-3`}>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={animation}
                                className={`w-[90%] tablet:w-[96%] pt-20 bigTablet:h-[60vh bigTablet:w-full desktop:h-full tablet:place-self-center ${imagePosition} `}>
                                <img src={image} alt="poperty pictures" className='object-cover' />
                            </motion.div>

                            <div className="flex justify-center w-full h-full bigTablet:w-[88%] ">
                                <div className="w-[82%] tablet:w-[88%] bigTablet:w-[60%] mt-12 bigTablet:mt-14">
                                    <h1 className="text-sm font-chakra tablet:text-base uppercase">{head}</h1>
                                    <h2 className="mt-5 text-3xl font-Raleway mb-8 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-snug">{title}</h2>
                                    <p className="text-base font-Quicksand mb-8 desktop:text-xl">{body_1_text}</p>

                                    <p className="text-base font-Quicksand mb-7 desktop:text-xl">{body_2_text}</p>

                                    <div className="flex items-center flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row bigTablet:flex-row">
                                        <Link to={"became-investor"}>
                                            <button>
                                                <span className="relative inline-flex items-center px-[3.32rem] py-3 tablet:px-3 tablet:py-4 bigTablet:px-10 desktop:px-10 desktop:py-5  overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                                        <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                    </span>
                                                    <span className="relative font-chakra text-base">{btn_1_Text}</span>
                                                </span>
                                            </button>
                                        </Link>

                                        <Link to={"became-investor"}>
                                            <button>
                                                <span className="relative inline-flex items-center px-14 py-3 tablet:px-3 tablet:py-4 bigTablet:px-12 desktop:px-8 desktop:py-5  overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-black group hover:bg-transparent">
                                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                                    <span className="absolute  tablet:right-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-20  group-hover:-translate-x-7  ease">
                                                        <svg className="w-5 h-5 tablet:hidden" fill="#000" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                    </span>
                                                    <span className="relative font-chakra text-base">{btn_2_Text}</span>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default PiceOfAmea
