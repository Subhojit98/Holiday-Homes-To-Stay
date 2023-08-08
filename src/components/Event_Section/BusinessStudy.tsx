import studyImg from '../../assets/Home_Page_images/Home_page_image_3.jpg'
const BusinessStudy = () => {
    return (
        <>
            <div className='w-full h-full desktop:h-screen bg-specialBg tablet:flex justify-center items-center pb-14 tablet:pb-16 bigTablet:pb-20 desktop:pb-28'>

                <div className="w-11/12 h-[35%] tablet:h-1/2 desktop:h-[72%] pt-20 place-self-end mb-14">
                    <img src={studyImg} alt="" className='w-full object-cover h-full' />
                </div>

                <div className="flex justify-center w-full h-full">
                    <div className="w-[82%] desktop:w-[75%]  mt-12 desktop:mt-28">
                        <h1 className="text-sm font-chakra tablet:text-base uppercase">A Strong business case</h1>
                        <h2 className="mt-5 text-3xl tablet:text-3xl tablet:leading-snug font-Raleway mb-14 tablet:mb-8 desktop:leading-relaxed">Invest in a one-of-a-kind development offering the highest levels of privacy and exclusivity.</h2>
                        <p className="text-lg tablet:text-base font-Quicksand mb-14 desktop:text-xl">The development is located in Ronco sopra Ascona, Switzerland, offering one of the most breathtaking sceneries, the highest security standards, and the finest quality benchmarks in the world.</p>


                        <div className="flex flex-col-reverse justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row mb-14">
                            <button>
                                <a href="#" className="relative inline-flex items-center px-16 tablet:px-3 tablet:py-4 py-4 bigTablet:py-4 bigTablet:px-10 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                        <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative font-chakra text-base">Business case</span>
                                </a>
                            </button>
                            <button>
                                <a href="#" className="relative inline-flex items-center px-[3.3rem] tablet:px-3 tablet:py-4 py-4  bigTablet:py-4 bigTablet:px-10  overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-white group hover:bg-transparent">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-black  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                    <span className="absolute tablet:left-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-5 group-hover:translate-x-5 ease">

                                        <svg className="w-5 h-5 " fill="#fff" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>


                                    </span>
                                    <span className="relative font-chakra text-base">Join Presentation</span>
                                </a>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BusinessStudy
