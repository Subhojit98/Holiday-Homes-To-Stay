import foorterImg from '/src/assets/Home_Page_images/Footer.jpg'
import FooterUi from './FooterUi'

const Footer = () => {
    return (
        <>
            <div className="w-full h-full bg-neutral-800 mt-20">
                <div className="h-[45vh] desktop:h-[60vh] relative flex justify-center flex-col items-center bigTablet:items-start">
                    <img src={foorterImg} alt="" className='w-full h-full object-cover absolute' />

                    <div className="w-[80%] desktop:w-[60%] flex justify-center items-center flex-col absolute ">
                        <div className="w-[90%] tablet:w-[98%] bigTablet:w-[70%] desktop:w-[85%] text-white">
                            <h1 className="text-sm font-chakra tablet:text-base uppercase">SUBSCRIBE TO OUR NEWSLETTER</h1>
                            <h2 className="mt-5 text-xl font-Raleway tablet:text-2xl bigTablet:text-3xl tablet:w-[70%] bigTablet:w-[80%]">Find out first about our new developments & exclusive offers</h2>

                            <div className="flex items-center gap-x-3 mt-8 tablet:mt-10 w-[92%] tablet:w-[80%] shadow-black">

                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input type="text" name='email' required placeholder="Enter your email" className="input w-full rounded-none focus:border-transparent tablet:py-7 font-Raleway text-center" />
                                <button type='submit' className="btn rounded-none tablet:px-10 py-4 bg-white text-black font-Manrope text-xs hover:text-white">sign up</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <FooterUi />
                </div>
            </div>
        </>
    )
}

export default Footer
