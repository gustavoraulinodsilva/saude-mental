import React from "react";
import "../sass/pages/_home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-banner">
          <img src="/src/assets/images/SafeSpace-Saude-Mental-no-Trabalho-Porque-Precisamos-Falar-Sobre-02.png" alt="" />
          <div className="banner-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">Cuidando da Mente, Transformando Vidas</h1>
          <p className="hero-text">
            Informações confiáveis e recursos para seu bem-estar emocional
          </p>
          <a href="#sobre-projeto" className="cta-button">
            Saiba Mais
          </a>
        </div>
      </section>
      <section id="sobre-projeto" className="about-section container">
        <h2 className="section-title">Sobre o Projeto</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Desenvolvido por estudantes de engenharia e relações
              internacionais em parceria com a Faculdade FSG, este projeto visa
              democratizar o acesso à informação qualificada sobre saúde mental.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
