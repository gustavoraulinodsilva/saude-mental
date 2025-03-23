import React,{ useState, useEffect } from "react";
import "../sass/pages/_home.scss";

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
  text: string[]; 
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
      </section>
      <section id="sobre-projeto" className="about-section container">
        <h2 className="section-title">{content?.about.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            {content?.about.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
