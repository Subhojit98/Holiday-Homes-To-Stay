import Hero from "../../components/About amea/Hero"
import Intro from "../../components/About amea/Intro"
import Footer from "../../components/Footer/Footer"
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Hero />
            <Intro />
            <Footer />
        </>
    )
}

export default About
