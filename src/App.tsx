import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import HealthMental from './pages/HealthMental'
import MentalDisorderDetail from './pages/MentalDisorderDetail'
import LifeStyle from './pages/LifeStyle'
import Playlists from './pages/Playlists'

function App() {

  return (
    <>
      <Header/>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/saude-mental' element={<HealthMental/>} />
          <Route path='/depressao' element={<MentalDisorderDetail/>} />
          <Route path='/estilo-de-vida' element={<LifeStyle/>} />
          <Route path='/playlists' element={<Playlists/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
