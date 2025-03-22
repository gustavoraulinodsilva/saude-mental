import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import HealthMental from './pages/HealthMental'
import MentalDisorderDetail from './pages/MentalDisorderDetail'

function App() {

  return (
    <>
      <Header/>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/saude-mental' element={<HealthMental/>} />
          <Route path='/depressao' element={<MentalDisorderDetail/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
