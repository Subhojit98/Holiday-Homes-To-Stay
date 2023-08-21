import Footer from "../components/Footer/Footer"
import Accordation from "../components/Investment Details/Accordation"
import Conclution from "../components/Investment Details/Conclution"
import DetailsHero from "../components/Investment Details/DetailsHero"
import InvestmentBreakdown from "../components/Investment Details/InvestmentBreakdown"
import Table from "../components/Investment Details/Table"
import { financialIncone } from '../data/InvestmentDetails'
import { page_3_tableData } from "../data/Table"
import { useEffect } from 'react'

const InvestmentDetails_3: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <DetailsHero herotext={"A unique real estate project"} />
            <InvestmentBreakdown {...financialIncone} />
            <Table {...page_3_tableData} />
            <Accordation />
            <Conclution />
            <Footer />


        </>
    )
}

export default InvestmentDetails_3
