import NaturalLogo from "../../assets/logo/amea-logo.svg";
import { useLocation } from 'react-router-dom'
import Menu from "../Home/Hamburger/Menu";
const Navbar = () => {

    // Navbar show on scroll Logic.. ->
    const pageBody = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset

        if (currentScroll <= 0) {
            pageBody.classList.remove('scroll-up')
        }

        if (currentScroll > lastScroll && !pageBody.classList.contains('scroll-down')) {
            pageBody.classList.remove('scroll-up')
            pageBody.classList.add('scroll-down')
        }
        if (currentScroll < lastScroll && pageBody.classList.contains('scroll-down')) {
            pageBody.classList.remove('scroll-down')
            pageBody.classList.add('scroll-up')
        }
        lastScroll = currentScroll

    })
    const location = useLocation()
    const isError = location.pathname == '*'

    if (isError) {
        return null
    }
    return (

        <>
            {/* Navbar.. -> */}
            <Menu />
            <div className="h-[4.8rem] tablet:h-[6.05rem] bigTablet:h-[7.30rem] desktop:h-[8.55rem] flex items-center w-full ">
                <nav className="transition-all delay-[250ms] ease-in-out fixed h-[4.8rem] tablet:h-[6.05rem] bigTablet:h-[7.30rem] desktop:h-[8.55rem] bg-WholePage z-30 w-full opacity-95">

                    <div className=" flex items-center justify-between h-full mx-7 tablet:mx-16 bigTablet:mx-8 desktop:mx-14  pt-3 pb-3 bigTablet:pb-0 bigTablet:p-10 desktop:pt-14">

                        <div className="flex items-center justify-between bigTablet:mx-5">
                            {/* Hamburger Menu.. -> */}
                            <button className="cursor-pointer hamburger group">
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12"></div>
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12 ease-out group-hover:opacity-0 group-hover:absolute group-hover:bg-WholePage duration-200"></div>
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12"></div>
                            </button>
                        </div>

                        {/* Logo.. -> */}
                        <div className="h-full cursor-pointer">
                            <img src={NaturalLogo} className="h-full object-contain w-28 tablet:w-32 desktop:w-40" alt="Flowbite Logo" />
                        </div>
                    </div>

                </nav>
            </div >


        </>
    )
}

export default Navbar
