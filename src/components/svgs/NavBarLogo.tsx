import logo from '/src/assets/Home_page_images/ameaLogo.svg'


const NavBarLogo = () => {
    return (
        <>
            <img src={logo} className="h-full object-contain w-28 tablet:w-32 desktop:w-40" alt="Flowbite Logo" />
        </>
    )
}

export default NavBarLogo
