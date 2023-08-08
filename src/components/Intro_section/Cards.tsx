import { cardsProp } from '../../interface/CradsData'


const Cards = ({ cards }: cardsProp) => {
    const { head, title, body, backImage } = cards
    return (
        <>
            <div >
                <div className="card w-full h-[50vh]  bigTablet:h-[70vh]  bg-base-100 image-full rounded-none text-start">
                    <figure><img src={backImage} className='object-cover w-[96%] ' alt="" /></figure>
                    <div className=" card-body ">
                        <h1 className="text-white font-chakra border-b-2 border-white pb-2 bigTablet:pb-4  bigTablet:text-lg">{head}</h1>

                        <h2 className="mt-7 text-xl text-white font-Poppins tablet:text-2xl bigTablet:text-3xl">{title}</h2>

                        <p className="mt-20 text-white font-Quicksand leading-6 tablet:text-lg bigTablet:text-xl">{body}</p>

                        <div className="card-actions flex justify-center mt-10">

                            <button>
                                <a href="" className="relative inline-flex items-center px-24 py-4 overflow-hidden text-lg font-medium text-black border-[1.1px] bg-white hover:text-white group hover:bg-transparent">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-transparent  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative font-chakra">Details</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
