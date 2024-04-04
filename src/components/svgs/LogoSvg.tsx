import logo from '/src/assets/logo/amea-logo.svg'

const LogoSvg = () => {
    return (
        <>
            <img src={logo} className='object-cover w-1/2 tablet:w-[30%] desktop:w-[20%]' alt="Company Logo" />
        </>
    )
}

export default LogoSvg
