import React from "react";
import '../sass/pages/_disorder-mental-detail.scss';

const MentalDisorderDetail: React.FC = () => {
    return(
        <section className="disorder-detail-page">
            <div className="disorder-hero">
                <div className="container">
                    <h1 className="disorder-title">Depressão</h1>
                    <p className="disorder-subtitle">Compreendendo os sintomas, causas e tratamentos</p>
                </div>
            </div>
            <main className="disorder-content container">
                <section className="overview-section">
                    <div className="content-grid">
                        <article className="key-info">
                            <h2>Visão Geral</h2>
                            <div className="info-box">
                                <div className="info-item">
                                    <span className="info-label">Prevalência</span>
                                    <span className="info-value">5.8% da população brasileira</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Idade comum</span>
                                    <span className="info-value">Todas as faixas etárias</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Tratamentos</span>
                                    <span className="info-value">Multidisciplinar</span>
                                </div>
                            </div>
                            <p className="description">A depressão é um transtorno mental complexo com causas multifatoriais, incluindo aspectos biológicos, psicológicos e ambientais. Caracteriza-se por alterações persistentes no humor e comportamento, podendo comprometer significativamente a qualidade de vida.</p>
                        </article>

                        <div className="main-image">
                            <img src="/src/assets/images/ansiedade-scaled.jpg" alt="anciedade" />
                        </div>
                    </div>
                </section>
                <section className="symptoms-section">
                    <h2>Sintomas Principais</h2>
                    <div className="symptoms-grid">
                        <div className="symptom-card">
                            <div className="symptom-icon">😞</div>
                            <h3>Humor Depressivo</h3>
                            <p>Tristeza intensa e persistente na maior parte do dia</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">💔</div>
                            <h3>Anedonia</h3>
                            <p>Perda de interesse em atividades antes prazerosas</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">😴</div>
                            <h3>Alterações no Sono</h3>
                            <p>Insônia ou hipersonia quase diária</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">⚖️</div>
                            <h3>Mudanças de Peso</h3>
                            <p>Perda ou ganho significativo sem dieta intencional</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">🧠</div>
                            <h3>Déficit Cognitivo</h3>
                            <p>Dificuldade de concentração e tomada de decisões</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">💀</div>
                            <h3>Pensamentos Mórbidos</h3>
                            <p>Ideias suicidas em casos graves</p>
                        </div>
                    </div>
                </section>
                <section className="treatment-section">
                    <h2>Abordagens de Tratamento</h2>
                    <div className="treatment-timeline">
                        <div className="treatment-step">
                            <div className="step-number">1</div>
                            <h3>Avaliação Diagnóstica</h3>
                            <p>Diagnóstico clínico com profissional especializado</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">2</div>
                            <h3>Psicoterapia</h3>
                            <p>Terapia Cognitivo-Comportamental como abordagem principal</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">3</div>
                            <h3>Farmacoterapia</h3>
                            <p>Uso de antidepressivos com acompanhamento médico</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">4</div>
                            <h3>Mudanças no Estilo de Vida</h3>
                            <p>Inclusão de exercícios físicos e rotina saudável</p>
                        </div>
                    </div>
                </section>
                <section className="benefits-section">
                    <h2>Benefícios da Atividade Física</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘</div>
                            <h3>Equilíbrio Químico</h3>
                            <p>Aumento da produção de neurotransmissores como serotonina</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🏃</div>
                            <h3>Redução do Estresse</h3>
                            <p>Diminuição dos níveis de cortisol</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">👥</div>
                            <h3>Socialização</h3>
                            <p>Oportunidades de interação social em atividades grupais</p>
                        </div>
                    </div>
                </section>
                <aside className="help-card">
                    <h3>Precisa de Ajuda Imediata?</h3>
                    <ul className="emergency-contacts">
                        <li>📞 CVV - 188 (24h)</li>
                        <li>🏥 CAPS mais próximo</li>
                        <li>👨⚕ Psiquiatra especializado</li>
                    </ul>
                    <button className="cta-button">Buscar Ajuda Profissional</button>
                </aside>
            </main>
        </section>
    );
};

export default MentalDisorderDetail;

