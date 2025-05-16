import React, { useEffect, useState } from "react";
import '../sass/pages/_mental-health.scss'
import DisorderCarousel from "../components/DisorderCarousel";
import { MentalHealthData } from "../types/mentalHealthTypes";
import disordersData from '../data/disorders.json';
import { CiDesktopMouse2 } from "react-icons/ci";

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
                    <img src={`${import.meta.env.BASE_URL}${data.hero.image}`} alt="banner" />
                    <div className="banner-overlay"></div>
                </div>
                <div className="container hero-content">
                    <h1>{data.hero.heroTitle}</h1>
                    <p className="hero-subtitle">{data.hero.heroSubtitle}</p>
                </div>
                <div className="move">
                    <a href="#detail" className="scroll-to-another-section" aria-label="Role para baixo">
                        <CiDesktopMouse2 size={32} />
                    </a>
                </div>
            </div>
            <main className="mental-health-content container">
                <section id="detail" className="mental-health-detail">
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
                        <div className="disorders-carousel">
                            <DisorderCarousel disorders={disordersData.disorders}/>
                        </div>
                    </section>
                </section>
            </main>
    </section>
    );
};

export default MentalHealth;