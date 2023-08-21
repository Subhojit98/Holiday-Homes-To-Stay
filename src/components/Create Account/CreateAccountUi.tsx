import { useEffect } from 'react'
const CreateAccountUi: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>


            <div className="flex w-full h-full">
                {/* Side Empty Bar.. -> */}
                <div className="w-[8vw] h-full"></div>


                <div className="h-full w-[92vw] relative flex  items-center bg-buttonsBg flex-col">


                    <div className="w-full h-[47vh] flex justify-center items-center text-white text-2xl">
                        <div className="absolute w-11/12 tablet:w-[85%] bigTablet:w-[65%]">
                            <div className="text-center">
                                <h2 className="font-Raleway text-3xl bigTablet:text-4xl">Create an account to access content and become part of our network</h2>
                                <h3 className="mt-7 font-Quicksand text-[#fdc199] bigTablet:text-2xl">Already have an account?
                                    <a href="#_" className="px-2 text-blue-300 underline hover:no-underline">Log in</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] h-[60vh] tablet:h-[40vh] desktop:h-[60vh] bigTablet:w-[75%] bigTablet:h-[45vh] desktop:w-[55%]">

                        <div className=" bg-white h-[90%] ">
                            <div className="hero-content">
                                <div className="card flex-shrink-0 w-full">
                                    <div className="card-body tablet:flex">
                                        <div className="tablet:flex tablet:gap-4">
                                            <div className="form-control">
                                                <label className="label mb-1">
                                                    <span className="label-text font-Raleway text-lg after:content-['*']">Username or email address</span>
                                                </label>
                                                <input type="text" className="input rounded-none px-8 py-5 bigTablet:py-7 font-chakra text-lg tablet:w-[95%]" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label mb-1">
                                                    <span className="label-text font-Raleway text-lg after:content-['*']">Password </span>
                                                </label>
                                                <input type="text" className="input rounded-none px-8 py-5 bigTablet:py-7 text-lg font-Manrope tablet:w-[95%]" />

                                            </div>
                                        </div>
                                        <div className="form-control mt-5 ">
                                            <button className="btn btn-secondary w-full tablet:w-[85%] desktop:w-[97%]">Login</button>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <input id="" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
                                            <label htmlFor="" className="ml-2 text-base font-medium text-black font-Quicksand">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateAccountUi
