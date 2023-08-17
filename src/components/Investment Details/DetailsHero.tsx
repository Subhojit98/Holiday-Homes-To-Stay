import heroVideo from '../../assets/2nd_Page_images/card_Video.mp4'
interface textProps {
    herotext: string
}
const DetailsHero = (props: textProps) => {

    return (
        <>
            <div className="w-full h-screen">
                <div className="h-screen w-full flex">

                    {/* Side Empty Bar.. -> */}

                    <div className="w-[8vw] h-full"></div>


                    <div className="h-full w-[92vw] relative flex justify-center items-center ">
                        {/* Hero Video.. -> */}

                        <video className="absolute w-full h-full object-cover " autoPlay loop muted playsInline>
                            <source src={heroVideo} type='video/mp4' />
                        </video>

                        <div className="h-full w-3/5 flex flex-col text-center gap-7 justify-center z-10 ">
                            {/* Hero Video Text.. -> */}
                            <h1 className="text-white text-3xl text-center leading-10 font-Raleway bigTablet:text-[2.5rem]">{props.herotext}</h1>

                            <div className='flex justify-center items-center mt-6'>
                                <button className="absolute">

                                    <a href="#" className="relative inline-flex items-center justify-center w-32 p-1 px-32 overflow-hidden font-medium transition duration-300 ease-out border-[1px] border-white rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="#131314" stroke="#131314" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                                            <p className="ml-4 text-[#131314] font-Quicksand">Raedy To Go</p>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease font-Quicksand">Watch Video</span>
                                        <span className="relative invisible">Button Text</span>
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

export default DetailsHero
