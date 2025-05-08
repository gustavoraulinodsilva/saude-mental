import React, { useEffect, useState } from "react";
import '../sass/pages/_mental-disorder-detail.scss';
import { CiDesktopMouse2 } from "react-icons/ci";
import FloatingHelpButton from "../components/FloatingHelpButton";
import { useParams } from "react-router-dom";

interface DisorderData{
    id: number;
    title: string;
    description: string;
    bannerImage: string;
    causes: {
        biological: string;
        genetic: string;
        psychological: string;
        environmental: string;
    }
    causesDescription: string;
    symptoms: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    treatments: Array<{
        step: number;
        title: string;
        description: string;
    }>;
    physicalActivityBenefits: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    additionalInfo: string;
    link: string;
}

const MentalDisorderDetail: React.FC = () => {
    const [disorderData, setDisorderData] = useState<DisorderData | null>(null);
    const {id} = useParams<{id: string}>();
    
    useEffect(() => {
        import('../data/disorders.json').then(module => {
            const disorders = module.default.disorders;
            const foundDisorder = disorders.find(d => 
              d.id === parseInt(id || "") || 
              d.link === `/${id}`
            );
            
            if (foundDisorder) {
                setDisorderData(foundDisorder);
            }
        });
      }, [id]);

    if(!disorderData) {
        return <div>Carregando...</div>;
    }

    return(
        <section className="disorder-detail-page">
            <div className="disorder-hero">
                <div className="banner">
                    <img src="/src/assets/images/ansiedade-scaled.jpg" alt="anciedade" />
                </div>
                <div className="container">
                    <h1 className="disorder-title">{disorderData.title}</h1>
                    <div className="disorder-content">
                        <h3 className="title">Você sabia?</h3>
                        <p className="desc">
                            {disorderData.description}
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
                                    <span className="info-value">{disorderData.causes.biological}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Genéticos</span>
                                    <span className="info-value">{disorderData.causes.genetic}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Psicológicos</span>
                                    <span className="info-value">{disorderData.causes.psychological}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Ambientais</span>
                                    <span className="info-value">{disorderData.causes.environmental}</span>
                                </div>
                            </div>
                            <p className="description">{disorderData.causesDescription}</p>
                        </article>
                    </div>
                </section>

                <section className="symptoms-section">
                    <h2>Sintomas Principais</h2>
                    <div className="symptoms-grid">
                        {disorderData.symptoms.map((symptom, index) => (
                            <div key={index} className="symptom-card">
                                <div className="symptom-icon">{symptom.icon}</div>
                                <h3>{symptom.title}</h3>
                                <p>{symptom.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="treatment-section">
                    <h2>Abordagens de Tratamento</h2>
                    <div className="treatment-timeline">
                        {disorderData.treatments.map((treatment) => (
                            <div key={treatment.step} className="treatment-step">
                                <div className="step-number">{treatment.step}</div>
                                <div className="step-content">
                                    <h3>{treatment.title}</h3>
                                    <p>{treatment.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="benefits-section">
                    <h2>Benefícios da Atividade Física</h2>
                    <div className="benefits-grid">
                        {disorderData.physicalActivityBenefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="additional-info">{disorderData.additionalInfo}</p>
                </section>
                <FloatingHelpButton targetId="emergency" />
            </main>
        </section>
    );
};

export default MentalDisorderDetail;