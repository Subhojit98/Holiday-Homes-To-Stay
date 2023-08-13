import bgImage from '../../../assets/Home_Page_images/Scene_08_Dusk_CL-copy.jpg'
const Conclution = () => {
    return (
        <>
            <div className="h-screen desktop:h-[97vh] relative tablet:flex tablet:justify-center mt-16 tablet:mt-20 desktop:mt-40">
                <img src={bgImage} alt="image of the mountains with swimming pool" className='object-cover w-full h-full absolute' />

                <div className="w-[90%] tablet:w-[95%]  bigTablet:h-[90%] flex justify-center items-center tablet:items-end flex-col absolute">
                    <div className="w-[78%] tablet:w-[63%] bigTablet:w-1/2 desktop:w-[60%] mt-12 desktop:mt-28 text-white bigTablet:pl-10">
                        <div className="desktop:flex desktop:flex-col desktop:items-center">
                            <h1 className="text-sm font-chakra tablet:text-base uppercase">360-degree sustainability</h1>
                            <h2 className="mt-5 text-3xl  tablet:leading-snug font-Raleway mb-14 tablet:mb-8 desktop:leading-relaxed tablet:w-[90%] bigTablet:w-[70%] desktop:w-1/2 desktop:text-4xl">New thoughtful luxury, a unique vision.</h2>
                            <p className="tablet:text-base font-Quicksand mb-14 tablet:mb-10 desktop:text-lg tablet:w-[90%] bigTablet:w-[65%] desktop:w-[52%]">We make vacation properties sustainable and affordable: the vacation destinations we love so much shouldn’t suffer from construction booms and empty beds at the same time. Luxury and sustainability are not contradictory: year-round use of the property benefits not only the environment but also local economies.</p>

                            <div className="text-center tablet:text-start">
                                <button>
                                    <a href="#" className="relative inline-flex items-center px-[3.45rem] tablet:px-3 py-4 bigTablet:py-7 bigTablet:px-10 overflow-hidden text-lg font-medium text-white border-[1.1px] border-white bg-transparent hover:text-black group hover:bg-transparent">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                            <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative font-chakra text-base">Business case</span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conclution
