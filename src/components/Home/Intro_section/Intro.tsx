import InteroImg_1 from '../../../assets/Home_Page_images/Home_page_image_1.jpg'
import { cardText } from '../../../data/incomeType'
import Cards from './Cards'
import StartInvest from './StartInvest'
const Intro = () => {

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center tablet:gap-20 desktop:gap-36 ">
                <br /><br />
                {/* strting Section of insvesment.. -> */}

                <StartInvest intro_img={InteroImg_1} />

                {/* The Cards Section.. -> */}

                <div className="h-full w-[88%] flex flex-col items-center justify-center gap-20 bigTablet:flex-row bigTablet:gap-6 mb-28">
                    {
                        cardText?.map((card) => {
                            return <Cards key={card.id} cards={card} />
                        })
                    }

                </div>
            </div >
        </>
    )
}

export default Intro
