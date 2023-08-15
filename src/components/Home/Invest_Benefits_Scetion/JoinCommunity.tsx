import { Link } from 'react-router-dom'
import CommunityImg from '../../../assets/Home_Page_images/Home_page_image_7.jpg'
const JoinCommunity = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center flex-col items-center pt-20 tablet:flex-row bg-specialBg tablet:gap-4">

                <div className="flex flex-col tablet:flex-row h-[90%] w-[90%] bigTablet:w-[82%] desktop:w-[75%] items-center desktop:mt-28 desktop:mb-20">

                    <div className="h-[90%] w-[85%] flex flex-col items-center justify-center bigTablet:w-[75%]">
                        <img src={CommunityImg} className="h-[90%] object-cover tablet:h-full w-full bigTablet:w-[88%] desktop:w-[85%]" alt="image of a girl with sunglass" />
                    </div>

                    <div className=" w-full desktop:w-[80%] flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[85%] tablet:w-[80%] desktop:w-[72%] desktop:h-[90%]">
                            <div className="pt-14">
                                <h1 className="text-sm uppercase font-chakra mb-4 bigTablet:text-lg">JOIN OUR TRIBE</h1>

                                <h2 className="text-3xl font-Raleway mb-14 tablet:mb-8 bigTablet:text-4xl bigTablet:w-5/6 desktop:w-[88%] bigTablet:leading-snug">
                                    Enough of the isolation, let’s have mezcalitas
                                </h2>
                                <p className="font-Quicksand text-base leading-6 mb-14 bigTablet:text-lg">Become a part of a global network of likeminded people, investors, entrepreneurs and people that enjoy la dolce vita! Participate in exclusive, members-only events.</p>

                                <div className="text-center tablet:text-start">
                                    <button>
                                        <Link to={"/became-investor"} className="relative inline-flex items-center px-14 py-3 tablet:px-10 tablet:py-4 bigTablet:py-5 bigTablet:px-16 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-white group hover:bg-white">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative font-chakra text-base">Amēa community</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div >

        </>
    )
}

export default JoinCommunity
