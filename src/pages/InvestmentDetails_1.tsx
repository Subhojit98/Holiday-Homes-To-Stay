import Footer from "../components/Footer/Footer"
import Accordation from "../components/Investment Details/Accordation"
import Conclution from "../components/Investment Details/Conclution"
import DetailsHero from "../components/Investment Details/DetailsHero"
import InvestmentBreakdown from "../components/Investment Details/InvestmentBreakdown"
import Table from "../components/Investment Details/Table"
import { leisureInvestor } from '../data/InvestmentDetails'
import { page_1_tableData } from "../data/Table"
import { useEffect } from 'react'
const InvestmentDetails_1: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <DetailsHero herotext={"Holidays that pay out."} />
            <InvestmentBreakdown {...leisureInvestor} />
            <Table {...page_1_tableData} />
            <Accordation />
            <Conclution />
            <Footer />
        </>
    )
}

export default InvestmentDetails_1
