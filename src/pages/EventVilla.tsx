import AboutStay from "../components/Event villa/AboutStay"
import Adventures from "../components/Event villa/Adventures"
import Asisst from "../components/Event villa/Asisst"
import Hero from "../components/Event villa/Hero"
import Intro from "../components/Event villa/Intro"
import VillaImageSlider from "../components/Event villa/VillaImageSlider"
import Footer from "../components/Footer/Footer"

const EventVilla = () => {
    return (
        <>
            <Hero />
            <Intro />
            <VillaImageSlider />
            <Adventures />
            <AboutStay />
            <Asisst />
            <Footer />
        </>
    )
}

export default EventVilla
