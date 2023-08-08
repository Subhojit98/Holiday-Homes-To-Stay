import Hero from "../components/Hero_section/Hero"
import Intro from "../components/Intro_section/Intro"
// import Navbar from "../components/Navbar/Navbar"
import ImageSlider from "../components/Properties/ImageSlider"
import Event from '../components/Event_Section/Event'
import Benefit from "../components/Invest_Benefits_Scetion/Benefit"
const Home: React.FC = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <Intro />
            <ImageSlider />
            <Event />
            <Benefit />
        </>
    )
}

export default Home
