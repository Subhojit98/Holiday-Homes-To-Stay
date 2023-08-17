import heroImage from '../../assets/3rd_Page_images/8103479-HDR.jpg'

const Hero: React.FC = () => {
    return (
        <>
            <div className="h-screen w-full flex">

                {/* Side Empty Bar.. -> */}

                <div className="w-[8vw] h-full"></div>


                <div className="h-full w-[92vw] relative flex justify-center items-center ">
                    {/* Hero Image.. -> */}

                    {/* <video className="absolute w-full h-full object-cover " poster={heroPoster} autoPlay loop muted playsInline>
                      <source src={heroVideo} type='video/mp4' />
                  </video> */}

                    <img src={heroImage} className="absolute w-full h-full object-cover" alt="" />

                    <div className="h-full  flex flex-col text-center gap-7 justify-center z-10 ">
                        {/* Hero Image Text.. -> */}
                        <h1 className="text-white text-3xl text-center leading-10 font-Raleway bigTablet:text-[2.5rem]">Explore Mykonos with Amēa</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
