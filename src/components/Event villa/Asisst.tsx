import { Link } from 'react-router-dom'
import assistent from '../../assets/3rd_Page_images/kinga_egyud-e1648051039206.jpg'
const Asisst = () => {
    return (
        <>
            <div className={`items-center flex flex-col tablet:flex-row gap-3 bigTablet:p-5`}>
                <div className={`w-[90%] tablet:w-[96%] pt-20 bigTablet:h-[60vh bigTablet:w-[90%]`}>
                    <img src={assistent} alt="poperty pictures" className='object-cover desktop:h-[85%]' />
                </div>

                <div className="flex justify-center w-full h-full bigTablet:w-[88%] tablet:place-self-center ">
                    <div className="w-[82%] tablet:w-[88%] bigTablet:w-[60%] mt-12 bigTablet:mt-14">
                        <h1 className="text-sm font-chakra tablet:text-base uppercase">RSVP required?</h1>
                        <h2 className="mt-5 text-3xl font-Raleway mb-10 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-snug">Questions? I am happy to assist you in planning your trip to Mykonos.</h2>
                        <p className="text-base font-Quicksand mb-8 desktop:text-xl">Experience the mindful, inspiring, and spiritual journey that Amēa offers. Elevate your soul, while positively impacting the lives of others. Welcome to a world where luxury becomes a catalyst for change..</p>

                        <p className="text-base font-Quicksand mb-8 desktop:text-xl">Kinga Egyud: Chief Community Officer</p>


                        <div className="flex flex-col justify-center bigTablet:justify-start gap-2 tablet:gap-3 tablet:flex-row bigTablet:flex-row">
                            <Link to={"/became-investor"}>
                                <button>
                                    <span className="relative inline-flex items-center px-[3.32rem] py-3 tablet:px-3 tablet:py-4 bigTablet:px-10 desktop:px-10 desktop:py-5  overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300  translate-x-full group-hover:-translate-x-0 ease">
                                            <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative font-chakra text-base">Reach us</span>
                                    </span>
                                </button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asisst
