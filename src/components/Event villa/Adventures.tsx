import { Link } from "react-router-dom"
import adventureImg from '../../assets/3rd_Page_images/8103487-HDR.jpg'
import spa from '../../assets/3rd_Page_images/VMM-spa-A.jpg'
const Adventures = () => {
    return (
        <>
            {/* Section text and iamge ..1 -> */}
            <div className='w-full h-full desktop:h-screen bg-specialBg flex flex-col justify-center bigTablet:flex-row-reverse bigTablet:p-7 items-center pb-14 tablet:pb-16 bigTablet:pb-20 desktop:pb-28'>

                <div className="w-11/12 h-[35%] tablet:h-1/2 desktop:h-full pt-20  mb-5">
                    <img src={adventureImg} className='w-full object-cover h-full' alt="Sceenery and the sea" />
                </div>

                <div className="flex justify-center w-full h-full">
                    <div className="w-[82%] desktop:w-[75%]  mt-12 desktop:mt-28">
                        <h1 className="text-sm font-chakra tablet:text-base">30 September 2023, all day or 7 pm</h1>
                        <h2 className="mt-5 text-3xl tablet:text-3xl tablet:leading-snug font-Raleway mb-14 tablet:mb-8 desktop:leading-relaxed">Saturday: Speed Boat Adventure & Poolside Extravaganza</h2>
                        <p className="text-lg tablet:text-base font-Quicksand mb-14 desktop:text-xl">A thrilling speed boat trip awaits the core group, granting them a unique opportunity to bond and explore together.Later, as the sun sets, join the poolside party together with additional members of our community, commencing at 7:00 pm. Feast on delectable bites inspired by Mykonos, accompanied by expertly crafted mixologist cocktails and more.</p>


                        <div className="flex flex-col-reverse justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row">
                            <Link to={"/became-investor"}> <button>
                                <span className="relative inline-flex items-center px-20  py-5 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                        <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative font-chakra text-base">Register</span>
                                </span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section text and iamge .2 -> */}

            <div className="flex justify-center">
                <div className=" flex justify-center flex-col-reverse items-center w-11/12 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[85%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">


                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[95%] ">
                            <div className="tablet:pt-20">
                                <h1 className="font-chakra mb-4 bigTablet:text-base">01 October 2023, Core group only – FULLY BOOKED</h1>

                                <h2 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                    Sunday: Core Group Brunch & Wellness Retreat
                                </h2>
                                <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-xl">Prepare for a revitalizing day, exclusively reserved for the core group. Kickstart the morning with a delightful brunch, followed by wellness and spa sessions designed to rejuvenate the mind and body.
                                    Conclude the event with breathing and yoga therapy, leaving you refreshed, inspired, and connected.</p>

                                <div className="flex justify-center mb-10">
                                    <Link to={"/became-investor"}>
                                        <button>
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

                    <div className="h-full w-full flex flex-col items-center justify-center mt-20">
                        <img src={spa} alt="" className="h-[90%] tablet:h-[60%] desktop:h-[80%] object-cover" />
                    </div>
                </div >
            </div>
        </>
    )
}

export default Adventures
