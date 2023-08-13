
import benfitData from '../../data/investBenefit'
const BenefitTypes = () => {
    return (
        <>
            <div>
                {
                    benfitData?.map(({ id, image, imagePosition, title, head, body, btnText, imagePostionOnFlex }) => {
                        return <div key={id} className={` tablet:flex tablet:justify-center tablet:mt-10 bigTablet:pt-10 ${imagePostionOnFlex} desktop:pt-20 gap-5`}>
                            <div className={`w-[90%] tablet:w-[96%] pt-20 bigTablet:h-[60vh] bigTablet:w-full desktop:h-full tablet:place-self-center ${imagePosition} `}>
                                <img src={image} alt="poperty pictures" className='w-full object-cover h-full' />
                            </div>

                            <div className="flex justify-center w-full h-full bigTablet:w-[88%]">
                                <div className="w-[82%] tablet:w-[88%] bigTablet:w-[60%] mt-12 bigTablet:mt-14">
                                    <h1 className="text-sm font-chakra tablet:text-base uppercase">{head}</h1>
                                    <h2 className="mt-5 text-3xl font-Raleway mb-10 tablet:leading-normal bigTablet:text-4xl bigTablet:leading-snug">{title}</h2>
                                    <p className="text-base font-Quicksand mb-10 desktop:text-xl">{body}</p>

                                    <div className="text-center mb-10 bigTablet:mb-0 tablet:text-start">
                                        <button>
                                            <a href="#" className="relative inline-flex items-center px-14 py-3 tablet:px-10 tablet:py-4 bigTablet:py-5 bigTablet:px-16 overflow-hidden text-lg font-medium text-black border-[1.1px] border-black bg-transparent hover:text-white group hover:bg-white">
                                                <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-0 ease">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="relative font-chakra text-base">{btnText}</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default BenefitTypes
