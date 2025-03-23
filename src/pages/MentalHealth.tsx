import React, { useEffect, useState } from "react";
import '../sass/pages/_health-mental.scss'
import { Link } from "react-router-dom";

//Interfaces
interface HeroData{
    image: string,
    heroTitle: string,
    heroSubtitle: string
}

interface Statistic{
    percentage: string,
    description: string
}

interface SectionData{
    title: string,
    content: string,
    importanceTitle: string,
    importance: [],
    statisticTitle: string,
    statistics: Statistic[],
    disorderTitle: string,
    disorderDesc: string
}

interface MentalHealthData{
    hero: HeroData,
    section: SectionData
}

const MentalHealth: React.FC = () => {
    const [data, setData] = useState<MentalHealthData | null>(null);

    useEffect(() => {
        fetch('./src/data/mental-health.json')
        .then(response => response.json())
        .then(setData)
        .catch(error => console.error("Erro ao carregar os dados", error));
    }, []);

    if(!data){
        return <p>Carregando...</p>;
    }

    return(
        <section className="mental-health-page">
            <div className="mental-health-hero">
                <div className="hero-banner">
                    <img src={data.hero.image} alt="banner" />
                    <div className="banner-overlay"></div>
                </div>
                <div className="container hero-content">
                    <h1>{data.hero.heroTitle}</h1>
                    <p className="hero-subtitle">{data.hero.heroSubtitle}</p>
                </div>
            </div>
            <main className="mental-health-content container">
                <section className="mental-health-detail">
                    <article className="health-article">
                        <h2>{data.section.title}</h2>
                        <p>{data.section.content}</p>
                        <div className="article-grid">
                            <div className="importance-box">
                                <h3>{data.section.importanceTitle}</h3>
                                <ul className="importance-list">
                                    {data.section.importance.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="statistics-box">
                                <h3>{data.section.statisticTitle}</h3>
                                <div className="stats-grid">
                                    {data.section.statistics.map((stat,index) => (
                                        <div key={index} className="stat-item">
                                            <div className="stat-number">{stat.percentage}</div>
                                            <div className="stat-desc">{stat.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                    <section className="disorders-section">
                        <h2>{data.section.disorderTitle}</h2>
                        <p className="section-intro">{data.section.disorderDesc}</p>
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