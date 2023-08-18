import { Link } from 'react-router-dom'
const TableText: React.FC = () => {
    return (
        <>
            <div className="w-full tablet:w-[96%] bigTablet:w-[80%]  mt-7 mb-10 bigTablet:mb-20 justify-center flex">
                <div className="w-[85%] tablet:w-[90%] desktop:w-[60%]">
                    <p className="font-Quicksand text-base bigTablet:text-lg">This table serves as a summary and overview of our bond issues. Please consult the onboarding tool or talk to your account manager to learn more about our bonds’ availability. All bond terms are exclusively according to the respective term sheet, which may be ordered and obtained free of charge at the issuer’s registered office.</p>

                    <div className="flex justify-center mt-6 tablet:justify-start">
                        <Link to={"/became-investor"}>   <button>
                            <span className="relative inline-flex items-center px-12  tablet:px-3 py-4 bigTablet:py-5 bigTablet:px-10 overflow-hidden text-lg font-medium text-white border-[1.1px] border-black bg-black hover:text-black group hover:bg-black">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300  translate-x-full group-hover:-translate-x-0 ease">
                                    <svg className="w-5 h-5 tablet:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative font-chakra text-base">Become an investor</span>
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableText
