import { Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import MentalHealth from './pages/MentalHealth'
import MentalDisorderDetail from './pages/MentalDisorderDetail'
import LifeStyle from './pages/LifeStyle'
import Playlists from './pages/Playlists'
import Evaluation from './pages/Evaluation'

function App() {

  return (
    <>
      <Header/>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/saude-mental' element={<MentalHealth/>} />
          <Route path='/estilo-de-vida' element={<LifeStyle/>} />
          <Route path='/playlists' element={<Playlists/>}/>
          <Route path='/avaliacao' element={<Evaluation/>}/>
          <Route path='/:id' element={<MentalDisorderDetail/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
