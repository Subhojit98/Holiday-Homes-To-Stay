import { Link } from 'react-router-dom'
import { CardDetailsData } from '../..//interface/InvesmentBrekdownData'


const InvestmentBreakdown: React.FC<CardDetailsData> = ({ introBody, introHaed, introImage, introEnd, introPoints, btnText_1, btnText_2 }) => {

    return (
        <>
            <div className="w-full flex justify-center">
                <div className=" flex justify-center flex-col items-center w-11/12 tablet:mt-20 tablet:flex-row-reverse tablet:gap-14 bigTablet:w-[75%] bigTablet:mt-20 bigTablet:mb-10 desktop:mb-0">


                    <div className=" w-full flex flex-col items-center justify-center pb-16">

                        <div className="h-[85%] w-[90%] ">
                            <div >
                                <h1 className="font-Raleway mb-20 text-2xl">{introHaed}</h1>

                                <p className="font-Quicksand text-base mb-16 bigTablet:text-xl">{introBody}</p>
                                <ul className="space-y-6 text-black list-disc list-outside mb-7">
                                    {
                                        introPoints?.map((points, i) => {
                                            return <li key={i} className='font-Manrope text-sm'>{points}</li>
                                        })
                                    }
                                </ul>
                                <p className="font-Quicksand text-base mb-10 bigTablet:text-xl">{introEnd}</p>

                                <div className="flex flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row">
                                    <Link to={"/became-investor"}>     <button>
                                        <span className="relative inline-flex items-center px-12  tablet:px-3 py-5 bigTablet:py-5 bigTablet:px-10 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                                <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="relative font-chakra text-base">{btnText_1}</span>
                                        </span>
                                    </button>
                                    </Link>

                                    <Link to={"/became-investor"}>
                                        <button>
                                            <span className="relative inline-flex items-center px-12 tablet:px-3 py-5 bigTablet:py-5 bigTablet:px-10 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-black group hover:bg-transparent">
                                                <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                                <span className="absolute  tablet:right-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-20  group-hover:-translate-x-7  ease">
                                                    <svg className="w-5 h-5 tablet:hidden" fill="#000" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>


                                                </span>
                                                <span className="relative font-chakra text-base">{btnText_2}</span>
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="h-full w-full flex flex-col items-center justify-center mb-16 mt-28 ">
                        <img src={introImage} alt="" className="h-full object-cover w-[90%] tablet:w-[95%] tablet:h-[80vh]" />
                    </div>
                </div >

            </div>
        </>
    )
}

export default InvestmentBreakdown
