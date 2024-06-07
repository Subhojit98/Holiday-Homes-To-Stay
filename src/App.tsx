import './App.css'
import Loading from './pages/loading/Loading'
import Navbar from './components/Navbar/Navbar';
import React, { Suspense } from 'react'
import Home from './pages/Home Page/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const CreateAccount = React.lazy(() => import('./pages/Create Account/CreateAccount'));
const InvestmentDetails_1 = React.lazy(() => import('./pages/InvestmentDetails_1'))
const InvestmentDetails_2 = React.lazy(() => import('./pages/InvestmentDetails_2'));
const InvestmentDetails_3 = React.lazy(() => import('./pages/InvestmentDetails_3'));
const EventVilla = React.lazy(() => import('./pages/Villa/EventVilla'))
const About = React.lazy(() => import('./pages/About/About'));
const PageNotFound = React.lazy(() => import('./pages/Error/PageNotFound'))

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/became-investor' element={<CreateAccount />} />

            <Route path='/leisure-investor' element={<InvestmentDetails_1 />} />
            <Route path='/fixed-income' element={<InvestmentDetails_2 />} />
            <Route path='/fainancial-investor' element={<InvestmentDetails_3 />} />
            <Route path='/mykonos' element={<EventVilla />} />
            <Route path='/thoughtful-luxury' element={<About />} />
            <Route path='/page-not-found-404' element={<PageNotFound />} />
            <Route path='*' element={<Navigate to={'/page-not-found-404'} />} />

          </Routes>
        </Suspense>
      </Router>



    </>
  )
}

export default App
