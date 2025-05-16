import React, { useEffect, useState } from "react";
import '../sass/pages/_mental-health.scss'
import DisorderCarousel from "../components/DisorderCarousel";
import { MentalHealthData } from "../types/mentalHealthTypes";
import mentalHealthData from '../data/mental-health.json';
import disordersData from '../data/disorders.json';
import { CiDesktopMouse2 } from "react-icons/ci";

const MentalHealth: React.FC = () => {
    const [content, setContent] = useState<MentalHealthData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setContent(mentalHealthData as MentalHealthData);
            setLoading(false);
        } catch (error) {
            setError("Erro ao carregar os dados");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error || !content) {
        return <div>Erro: {error}</div>;
    }

    return (
        <section className="mental-health-page">
            <div className="mental-health-hero">
                <div className="hero-banner">
                    <img src={`${import.meta.env.BASE_URL}${content.hero.image}`} alt="banner" />
                    <div className="banner-overlay"></div>
                </div>
                <div className="container hero-content">
                    <h1>{content.hero.heroTitle}</h1>
                    <p className="hero-subtitle">{content.hero.heroSubtitle}</p>
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
                        <h2>{content.section.title}</h2>
                        <p>{content.section.content}</p>
                        <div className="article-grid">
                            <div className="importance-box">
                                <h3>{content.section.importanceTitle}</h3>
                                <ul className="importance-list">
                                    {content.section.importance.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="statistics-box">
                                <h3>{content.section.statisticTitle}</h3>
                                <div className="stats-grid">
                                    {content.section.statistics.map((stat,index) => (
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
                        <h2>{content.section.disorderTitle}</h2>
                        <p className="section-intro">{content.section.disorderDesc}</p>
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