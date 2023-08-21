import Accordation from '../components/Investment Details/Accordation'
import Conclution from '../components/Investment Details/Conclution'
import DetailsHero from '../components/Investment Details/DetailsHero'
import InvestmentBreakdown from '../components/Investment Details/InvestmentBreakdown'
import { fixedIncome } from '../data/InvestmentDetails'
import { page_2_tableData } from "../data/Table"
import Table from '../components/Investment Details/Table'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const InvestmentDetails_2: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <DetailsHero herotext={"Earn a fixed income"} />
            <InvestmentBreakdown {...fixedIncome} />
            <Table {...page_2_tableData} />
            <Accordation />
            <Conclution />
            <Footer />

        </>
    )
}

export default InvestmentDetails_2
