import './App.css'
import Loading from './pages/loading/Loading'
import Navbar from './components/Navbar/Navbar';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestmentDetails_1 from './pages/InvestmentDetails_1';
import InvestmentDetails_2 from './pages/InvestmentDetails_2';
import InvestmentDetails_3 from './pages/InvestmentDetails_3';
import EventVilla from './pages/EventVilla';
import About from './pages/About';
import React, { useState } from 'react'
// import PageNotFound from './pages/Error/PageNotFound';
const PageNotFound = React.lazy(() => import('./pages/Error/PageNotFound'))
function App() {

  const [isloading, setIsLoading] = useState(true)

  window.onload = () => {
    setIsLoading(!isloading)
  }

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/became-investor' element={<CreateAccount />} />

          <Route path='/leisure-investor' element={<InvestmentDetails_1 />} />
          <Route path='/fixed-income' element={<InvestmentDetails_2 />} />
          <Route path='/fainancial-investor' element={<InvestmentDetails_3 />} />
          <Route path='/mykonos' element={<EventVilla />} />
          <Route path='/thoughtful-luxury' element={<About />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </Router>

      {/* Page Loader Screen.. -> */}
      {isloading && <Loading />}

    </>
  )
}

export default App
