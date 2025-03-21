import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header/>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
