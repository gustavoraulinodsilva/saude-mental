import React from "react";
import '../sass/pages/_mental-disorder-detail.scss';
import { CiDesktopMouse2 } from "react-icons/ci";

const MentalDisorderDetail: React.FC = () => {
    return(
        <section className="disorder-detail-page">
            <div className="disorder-hero">
                <div className="banner">
                    <img src="/src/assets/images/ansiedade-scaled.jpg" alt="anciedade" />
                </div>
                <div className="container">
                    <h1 className="disorder-title">Depressão</h1>
                    <div className="disorder-content">
                        <h3 className="title">Você sabia?</h3>
                        <p className="desc">
                            A depressão é um transtorno mental caracterizado por uma tristeza profunda e persistente, perda de interesse nas atividades diárias e alterações no funcionamento físico e emocional. 
                            É uma condição séria que pode afetar a qualidade de vida e até levar ao suicídio se não for tratado especificamente.
                        </p>
                    </div>  
                </div>
                <div className="move-section">
                    <a href="#container" className="move-btn" aria-label="Role para baixo">
                        <CiDesktopMouse2 size={32} />
                    </a>
                </div>
            </div>
            <main id="container" className="disorder-content container">
                <section className="overview-section">
                    <div className="content-grid">
                        <article className="key-info">
                            <h2>Causas Principais</h2>
                            <div className="info-box">
                                <div className="info-item">
                                    <span className="info-label">Biológicos</span>
                                    <span className="info-value">Desequilíbrios químicos cerebrais</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Genéticos</span>
                                    <span className="info-value">Histórico familiar</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Psicológicos</span>
                                    <span className="info-value">Traumas e baixa autoestima</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Ambientais</span>
                                    <span className="info-value">Isolamento social e perdas</span>
                                </div>
                            </div>
                            <p className="description">A depressão surge da combinação complexa de fatores biológicos, psicológicos e ambientais, afetando a regulação de neurotransmissores como serotonina e noradrenalina, e sendo agravada por eventos estressores.</p>
                        </article>
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
                            <p>Perda de interesse em atividades prazerosas</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">⚡</div>
                            <h3>Fadiga</h3>
                            <p>Perda de energia e cansaço persistente</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">😴</div>
                            <h3>Distúrbios do Sono</h3>
                            <p>Insônia ou hipersonia recorrente</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">⚖️</div>
                            <h3>Alterações de Peso</h3>
                            <p>Mudanças significativas no apetite</p>
                        </div>
                        <div className="symptom-card">
                            <div className="symptom-icon">🧠</div>
                            <h3>Déficit Cognitivo</h3>
                            <p>Dificuldade de concentração e decisões</p>
                        </div>
                    </div>
                </section>

                <section className="treatment-section">
                    <h2>Abordagens de Tratamento</h2>
                    <div className="treatment-timeline">
                        <div className="treatment-step">
                            <div className="step-number">1</div>
                            <h3>Psicoterapia</h3>
                            <p>TCC e outras terapias comportamentais</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">2</div>
                            <h3>Medicação</h3>
                            <p>Antidepressivos ISRS e similares</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">3</div>
                            <h3>Estilo de Vida</h3>
                            <p>Exercícios e alimentação balanceada</p>
                        </div>
                        <div className="treatment-step">
                            <div className="step-number">4</div>
                            <h3>Apoio Social</h3>
                            <p>Rede de apoio e grupos terapêuticos</p>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <h2>Benefícios da Atividade Física</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🧪</div>
                            <h3>Neurotransmissores</h3>
                            <p>Aumento de serotonina e endorfinas</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘</div>
                            <h3>Controle do Estresse</h3>
                            <p>Redução dos níveis de cortisol</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">👥</div>
                            <h3>Integração Social</h3>
                            <p>Atividades em grupo e interações</p>
                        </div>
                    </div>
                    <p className="additional-info">*Atividades leves como caminhadas e ioga já apresentam benefícios significativos quando praticadas regularmente</p>
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