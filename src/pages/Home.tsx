import Hero from "../components/Home/Hero_section/Hero"
import Intro from "../components/Home/Intro_section/Intro"
// import Navbar from "../components/Navbar/Navbar"
import ImageSlider from "../components/Home/Properties/ImageSlider"
import Event from '../components/Home/Event_Section/Event'
import Benefit from "../components/Home/Invest_Benefits_Scetion/Benefit"
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
