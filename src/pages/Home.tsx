import Hero from "../components/Home/Hero_section/Hero"
import Intro from "../components/Home/Intro_section/Intro"
import ImageSlider from "../components/Home/Properties/ImageSlider"
import Event from '../components/Home/Event_Section/Event'
import Benefit from "../components/Home/Invest_Benefits_Scetion/Benefit"
import Footer from "../components/Footer/Footer"
import PiceOfAmea from "../components/Home/Programe_Motive/PiceOfAmea"
const Home: React.FC = () => {
    return (
        <>
            <div className="w-full bg-WholePage">
                <Hero />
                <Intro />
                <ImageSlider />
                <Event />
                <Benefit />
                <PiceOfAmea />
                <Footer />
            </div>
        </>
    )
}

export default Home
