import LogoSvg from "../../components/svgs/LogoSvg"

const Loading = () => {
    return (
        <>
            <div className='w-full fixed h-full bg-specialBg z-50 top-0'>
                <div className={`w-full h-screen  bg-specialBg flex flex-col justify-center items-center gap-5`}>
                    <LogoSvg />
                    <div>
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading
