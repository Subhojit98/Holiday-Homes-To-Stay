import logo from '../../assets/logo/amea-logo.svg'
const Loading = () => {
    return (
        <>
            <div className={`w-full h-screen fixed bg-specialBg flex flex-col justify-center items-center gap-5 z-50`}>
                <img src={logo} className='object-cover w-1/2 tablet:w-[30%] desktop:w-[20%]' alt="Company Logo" />
                <div>
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            </div>
        </>
    )
}

export default Loading
