import React from "react";
import '../sass/pages/_life-style.scss'

const LifeStyle: React.FC = () => {
    return (
        <section className="lifestyle-page">
            <div className="lifestyle-hero">
                <div className="container">
                    <h1>Estilo de Vida e Saúde Mental</h1>
                    <p className="hero-subtitle">Como alimentação e exercícios impactam seu bem-estar emocional</p>
                </div>
            </div>
            <main className="lifestyle-content container">
                <section id="alimentacao" className="nutrition-section">
                    <h2>Alimentação Saudável</h2>
                    <div className="nutrition-grid">
                        <article className="nutrition-card">
                            <div className="nutrition-icon">🥦</div>
                            <h3>Nutrientes Essenciais</h3>
                            <ul className="nutrition-list">
                                <li>Ômega-3 para função cerebral</li>
                                <li>Vitaminas do complexo B</li>
                                <li>Antioxidantes contra o estresse</li>
                            </ul>
                        </article>

                        <article className="nutrition-card">
                            <div className="nutrition-icon">🚫</div>
                            <h3>Evitar</h3>
                            <ul className="avoid-list">
                                <li>Excesso de açúcar refinado</li>
                                <li>Consumo excessivo de cafeína</li>
                                <li>Alimentos ultraprocessados</li>
                            </ul>
                        </article>

                        <article className="nutrition-card">
                            <div className="nutrition-icon">💧</div>
                            <h3>Hidratação</h3>
                            <p>A desidratação pode aumentar os níveis de cortisol (hormônio do estresse)</p>
                        </article>
                    </div>
                </section>
                <section id="atividades" className="activities-section">
                    <h2>Atividade Física Regular</h2>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">🏃♀️</div>
                            <h3>Exercícios Aeróbicos</h3>
                            <p>Libera endorfinas que melhoram o humor</p>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">🧘♂️</div>
                            <h3>Yoga e Meditação</h3>
                            <p>Reduz ansiedade e melhora o foco</p>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">💪</div>
                            <h3>Treino de Força</h3>
                            <p>Aumenta a autoconfiança e disciplina</p>
                        </div>
                    </div>
                </section>
                <section className="benefits-section">
                    <h2>Benefícios Comprovados</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>30%</h3>
                            <p>Redução nos sintomas de ansiedade com exercícios regulares</p>
                        </div>
                        <div className="benefit-card">
                            <h3>2x</h3>
                            <p>Mais probabilidade de manter a estabilidade emocional</p>
                        </div>
                        <div className="benefit-card">
                            <h3>40%</h3>
                            <p>Melhora na qualidade do sono com dieta balanceada</p>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default LifeStyle;