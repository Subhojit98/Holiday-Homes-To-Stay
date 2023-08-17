import { Carousel } from 'flowbite-react'
import { villaImages } from '../../data/eventVillaSliderImages'
import { Link } from 'react-router-dom'
import diniing from '../../assets/3rd_Page_images/2B4A1010.jpg'
const VillaImageSlider: React.FC = () => {
    return (
        <>
            <div className="w-full h-full mt-20 flex justify-center">
                <div className="w-full tablet:w-[90%] bigTablet:w-[88%] h-[80vh] tablet:h-[70vh] bigTablet:h-[90vh]">
                    <Carousel slideInterval={5000} indicators={false}  >
                        {
                            villaImages.map((image, i) => {
                                return <div key={i}>
                                    <img
                                        alt="image of the property and villa"
                                        src={image}
                                        className='object-cover bigTablet:object-contain h-[80vh] tablet:h-full w-full'
                                    />
                                </div>
                            })
                        }
                    </Carousel>
                </div>
            </div>

            <div className="flex justify-center">
                <div className=" flex justify-center flex-col items-center w-11/12 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[75%] tablet:mt-20 bigTablet:mt-40  desktop:mb-0">


                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[95%] ">
                            <div className="pt-14">
                                <h1 className="uppercase font-chakra mb-4 bigTablet:text-xl">29 September 2023, Core group only, 7 pm – FULLY BOOKED</h1>

                                <h2 className="text-3xl font-Raleway mb-14 bigTablet:text-4xl bigTablet:w-5/6 bigTablet:leading-normal">
                                    Friday evening: Mindful Investing, Exclusive Dinner, Cocktails from our Mixologist
                                </h2>
                                <p className="font-Quicksand text-[1.10rem] leading-6 mb-16 bigTablet:text-lg">Indulge in an intimate and exclusive seated dinner, with only a limited core group receiving confirmed invitations.During the dinner, prepare to be inspired by a profound speech focused on mindfulness, self-care, and the significance of mental health in the realm of investing.Following the dinner, savor deliciously crafted poolside cocktails as you unwind and engage in meaningful conversations.</p>

                                <div className="flex justify-center mb-10">
                                    <button>
                                        <Link to={"/became-investor"} className="relative inline-flex items-center px-12 tablet:px-3 py-5 bigTablet:py-5 bigTablet:px-10 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-black group hover:bg-transparent">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                            <span className="absolute  tablet:right-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-20  group-hover:-translate-x-7  ease">
                                                <svg className="w-5 h-5 tablet:hidden" fill="#000" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>


                                            </span>
                                            <span className="relative font-chakra text-base">Register Now</span>
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="h-full w-full flex flex-col items-center justify-center mb-24">
                        <img src={diniing} alt="" className="h-full tablet:h-[60%] object-cover object-center bigTablet:h-[70%] w-full" />
                    </div>
                </div >
            </div>
        </>
    )
}

export default VillaImageSlider
