import { useLocation } from "react-router-dom";
import NaturalLogo from "/src/assets/logo/amea-logo.svg";
import Menu from "../Home/Hamburger/Menu";
import { useState, useEffect } from 'react'
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    // Seting when Showing Hamburger menu .. ->

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    // Navbar show on scroll Logic.. ->

    const pageBody = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const reloadPage = () => {
        window.location.reload()
    }

    // Hideing the navbar when its error page ..
    const location = useLocation()

    if (location.pathname == "/page-not-found-404") {
        return null
    }
    return (

        <>
            {/* Navbar.. -> */}

            {/* Hamburger Menu .. -> */}
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

            <div className="h-[4.8rem] tablet:h-[6.05rem] bigTablet:h-[7.30rem] desktop:h-[8.55rem] flex items-center w-full z-40">
                <nav className="transition-all delay-[250ms] ease-in-out fixed h-[4.8rem] tablet:h-[6.05rem] bigTablet:h-[7.30rem] desktop:h-[8.55rem] bg-WholePage z-30 w-full opacity-95">

                    <div className=" flex items-center justify-between h-full mx-7 tablet:mx-16 bigTablet:mx-8 desktop:mx-14  pt-3 pb-3 bigTablet:pb-0 bigTablet:p-10 desktop:pt-14">

                        <div className="flex items-center justify-between bigTablet:mx-5">
                            {/* Hamburger Menu.. -> */}
                            <button className="cursor-pointer hamburger group" onClick={handleClick}>
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12"></div>
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12 ease-out group-hover:opacity-0 group-hover:absolute group-hover:bg-WholePage duration-100"></div>
                                <div className="w-[30px] h-[0.85px] bg-[#101010fb] m-[2px] mt-[4.5px] bigTablet:w-10 desktop:w-12"></div>
                            </button>
                        </div>

                        {/* Logo.. -> */}
                        <button className="h-full cursor-pointer" onClick={reloadPage}>
                            <img src={NaturalLogo} className="h-full object-contain w-28 tablet:w-32 desktop:w-40" alt="Flowbite Logo" />
                        </button>
                    </div>

                </nav>
            </div >


        </>
    )
}

export default Navbar
