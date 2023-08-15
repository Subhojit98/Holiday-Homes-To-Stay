
import './App.css'
import Navbar from './components/Navbar/Navbar';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='became-investor' element={<CreateAccount />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
