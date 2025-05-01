import React,{ useState, useEffect } from "react";
import "../sass/pages/_home.scss";
import HomeAboutCarousel, { SlideData } from "../components/HomeAboutCarousel";

//Interfaces
interface HeroData{
  image: string;
  title: string;
  desc: string;
  cta: {
    label: string;
    link: string;
  }
}

interface AboutData{
  title: string;
  slides: SlideData[];
}

interface HomeContent{
  hero: HeroData;
  about: AboutData;
}

const Home: React.FC = () => {

  // Estado para armazenar os dados carregados
  const [content, setContent] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/src/data/home.json')
    .then((response) => {
      if(!response.ok){
        throw new Error("Erro ao carregar JSON");
      }
      return response.json();
    })
    .then((data: HomeContent) => {
      setContent(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if(loading){
    return <div>Carregando....</div>;
  }

  if(error){
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-banner">
          <img src={content?.hero.image} alt="Banner" />
          <div className="banner-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">{content?.hero.title}</h1>
          <p className="hero-text">
            {content?.hero.desc}
          </p>
          <a href={content?.hero.cta.link} className="cta-button">
            {content?.hero.cta.label}
          </a>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#6C87A2" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,213.3C840,235,960,245,1080,234.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="hero-wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,176C672,171,768,213,864,197.3C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </section>
      <section id="sobre-projeto" className="about-section container">
        <div className="about-carousel">
          <HomeAboutCarousel slides={content?.about.slides || []}/>
        </div>
      </section>
    </div>
  );
};

export default Home;
