
import { image } from "../../interface/CradsData"
const StartInvest = ({ intro_img }: image) => {
    return (
        <>
            <div className=" flex justify-center flex-col items-center w-11/12 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[75%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">

                {/* Intro Text and Image section.. -> */}

                <div className=" w-full flex flex-col items-center justify-center pb-16">

                    <div className="h-[85%] w-[95%] ">
                        <div className="pt-14">
                            <h1 className="uppercase font-chakra mb-4 bigTablet:text-xl">Italy made in Switzerland</h1>

                            <h2 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                Invest in one of Switzerland’s finest real estate projects.
                            </h2>
                            <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-xl">Participate in developing a legendary villa retreat with boutique apartments located in one of the most scenic destinations in the world, starting from only USD 25’000 while realizing attractive returns.</p>

                            {/* Intro Buttons.. -> */}

                            <div className="flex flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row">
                                <button>
                                    <a href="#" className="relative inline-flex items-center px-12  tablet:px-3 py-5 bigTablet:py-7 bigTablet:px-10 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                            <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative font-chakra text-base">Become an investor</span>
                                    </a>
                                </button>
                                <button>
                                    <a href="#" className="relative inline-flex items-center px-12 tablet:px-3 py-5 bigTablet:py-7 bigTablet:px-10 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-black group hover:bg-transparent">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                        <span className="absolute  tablet:right-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-20  group-hover:-translate-x-7  ease">
                                            <svg className="w-5 h-5 tablet:hidden" fill="#000" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>


                                        </span>
                                        <span className="relative font-chakra text-base">Inversment Details</span>
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="h-full w-[90%] flex flex-col items-center justify-center mb-24">
                    <img src={intro_img} alt="" className="h-[90%] object-cover" />
                </div>
            </div >

        </>
    )
}

export default StartInvest
