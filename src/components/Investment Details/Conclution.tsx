import { Link } from "react-router-dom"
import investorImg from '../../assets/Home_Page_images/Home_page_image_9.jpg'
import person from '../../assets/2nd_Page_images/Fabian_Coray_-104.jpg'
const Conclution = () => {
    return (
        <>
            {/* Frist conclution section .. ->*/}
            <div className={` tablet:flex tablet:justify-center tablet:mt-10 bigTablet:pt-10  desktop:pt-20 gap-3 `}>
                <div className={`w-[90%] tablet:w-[96%] pt-20 bigTablet:h-[60vh bigTablet:w-full desktop:h-full tablet:place-self-center `}>
                    <img src={investorImg} alt="poperty pictures" className='object-cover' />
                </div>

                <div className="flex justify-center w-full h-full bigTablet:w-[88%] ">
                    <div className="w-[82%] tablet:w-[88%] bigTablet:w-[60%] mt-12 bigTablet:mt-14">
                        <h2 className="mt-5 text-3xl font-Raleway mb-8 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-snug">Hear what others have said.</h2>
                        <p className="text-base font-Quicksand mb-8 desktop:text-xl">Swiss real estate has been a popular way to diversify an investor’s portfolio. Watch our investor testimonials or talk to an existing investor by scheduling a call with us.</p>


                        <div className="flex flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row bigTablet:flex-row">
                            <button>
                                <Link to={"/became-investor"} className="relative inline-flex items-center px-[3.32rem] py-3 tablet:px-3 tablet:py-4 bigTablet:px-10 desktop:px-10 desktop:py-5  overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300  translate-x-full group-hover:-translate-x-0 ease">
                                        <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative font-chakra text-base">Watch review</span>
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* second conclution section .. ->*/}
            <div className={` tablet:flex tablet:justify-center tablet:mt-10 bigTablet:pt-10 desktop:pt-20 gap-3 flex-row-reverse`}>
                <div className={`w-[90%] tablet:w-[96%] pt-20 bigTablet:h-[60vh bigTablet:w-[90%]`}>
                    <img src={person} alt="poperty pictures" className='object-cover desktop:h-[85%]' />
                </div>

                <div className="flex justify-center w-full h-full bigTablet:w-[88%]  tablet:place-self-center ">
                    <div className="w-[82%] tablet:w-[88%] bigTablet:w-[60%] mt-12 bigTablet:mt-14">
                        <h2 className="mt-5 text-3xl font-Raleway mb-8 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-snug">Questions?</h2>
                        <p className="text-base font-Quicksand mb-8 desktop:text-xl">We are happy to answer all your questions in a personal meeting or call. Our experienced team has decades of experience in private banking, asset management, and real estate development and has worked for some of the largest financial institutions in the world. We are available for in-person meetings all over Switzerland and, upon availability, in Europe.
                            Schedule a call with one of our team members to determine if an investment is right for you.</p>


                        <div className="flex flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row bigTablet:flex-row">
                            <button>
                                <Link to={"/became-investor"} className="relative inline-flex items-center px-[3.32rem] py-3 tablet:px-3 tablet:py-4 bigTablet:px-10 desktop:px-10 desktop:py-5  overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300  translate-x-full group-hover:-translate-x-0 ease">
                                        <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative font-chakra text-base">Watch review</span>
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conclution
