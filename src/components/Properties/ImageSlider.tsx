import ImgSliderTextBox from "./ImgSliderTextBox"
import Slider from "./Slider"

const ImageSlider: React.FC = () => {
    return (
        <>
            <div className="w-full h-auto bg-specialBg flex-col flex items-center  tablet:gap-10 bigTablet:gap-0">
                <ImgSliderTextBox />
                <Slider />
            </div>
        </>
    )
}

export default ImageSlider
