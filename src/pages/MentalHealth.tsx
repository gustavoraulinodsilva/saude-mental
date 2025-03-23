import React from "react";
import '../sass/pages/_health-mental.scss'
import { Link } from "react-router-dom";

const MentalHealth: React.FC = () => {
    return(
        <section className="mental-health-page">
            <div className="mental-health-hero">
                <div className="hero-banner">
                    <img src="/src/assets/images/SafeSpace-Saude-Mental-no-Trabalho-Porque-Precisamos-Falar-Sobre-02.png" alt="" />
                    <div className="banner-overlay"></div>
                </div>
                <div className="container hero-content">
                    <h1>Saúde Mental: Compreensão e Cuidados</h1>
                    <p className="hero-subtitle">Promovendo o bem-estar psicológico e emocional</p>
                </div>
            </div>
            <main className="mental-health-content container">
                <section className="mental-health-detail">
                    <article className="health-article">
                        <h2>O que é Saúde Mental?</h2>
                        <p>A saúde mental refere-se ao nosso bem-estar emocional, psicológico e social. Ela afeta como pensamos, sentimos e agimos em diferentes situações da vida...</p>
                        <div className="article-grid">
                            <div className="importance-box">
                                <h3>Por que é importante?</h3>
                                <ul className="importance-list">
                                    <li>Influencia relações pessoais e profissionais</li>
                                    <li>Impacta na produtividade e qualidade de vida</li>
                                    <li>Fundamental para lidar com estresse</li>
                                    <li>Fundamental para lidar com estresse</li>
                                    <li>Fundamental para lidar com estresse</li>
                                </ul>
                            </div>
                            <div className="statistics-box">
                                <h3>Dados Relevantes</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">23%</div>
                                        <div className="stat-desc">da população brasileira sofre de ansiedade</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">5,8%</div>
                                        <div className="stat-desc">tem diagnóstico de depressão</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">5,8%</div>
                                        <div className="stat-desc">tem diagnóstico de depressão</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">5,8%</div>
                                        <div className="stat-desc">tem diagnóstico de depressão</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <section className="disorders-section">
                        <h2>Transtornos Mentais Comuns</h2>
                        <p className="section-intro">Conheça os principais quadros psicológicos e seus impactos:</p>
                        <div className="disorders-grid">
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                            <article className="disorder-card">
                                <div className="card-header">
                                    <h3>Ansiedade Generalizada</h3>
                                </div>
                                <div className="card-content">
                                    <p>Caracterizado por preocupação excessiva e persistente...</p>
                                    <ul className="symptoms-list">
                                        <li>Inquietação constante</li>
                                        <li>Dificuldade de concentração</li>
                                        <li>Distúrbios do sono</li>
                                    </ul>
                                </div>
                                <Link to="/depressao" className="card-link">Saiba mais →</Link>
                            </article>
                        </div>
                    </section>
                </section>
            </main>
    </section>
    );
};

export default MentalHealth;