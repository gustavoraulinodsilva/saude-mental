import './sass/main.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <Header/>
      <main className="container">
        <h1>Bem-vindo ao meu site!</h1>
        <p>Este é o conteúdo principal.</p>
      </main>
      <Footer/>
    </>
  )
}

export default App
