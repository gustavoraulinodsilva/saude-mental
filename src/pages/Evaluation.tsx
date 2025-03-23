import React, { useState } from "react";
import '../sass/pages/_evaluation.scss';

const Evaluation: React.FC = () => {
    const [consent, setConsent] = useState<boolean | null>(null);

    return(
        <section className="evaluation-container">
            <div className="evaluation-hero">
                <div className="texts">
                    <h1 className="evaluation-title">Avaliação de Saúde Mental</h1>
                    <p className="evaluation-description">
                        Responda honestamente às seguintes perguntas para avaliar seu bem-estar atual.
                    </p>
                </div>
            </div>
            {consent === null && (
                <div className="consent-box">
                    <h2 className="consent-title">Termo de Consentimento</h2>
                    <div className="consent-content">
                        <p>
                            Ao prosseguir, você concorda que:
                        </p>
                        <ul>
                            <li>Esta avaliação não substitui diagnóstico profissional</li>
                            <li>Seus dados serão usados apenas para fins de pesquisa</li>
                            <li>Você pode interromper a qualquer momento</li>
                        </ul>
                        <div className="consent-buttons">
                            <button 
                                className="agree-button"
                                onClick={() => setConsent(true)}
                            >
                                Concordo
                            </button>
                            <button 
                                className="disagree-button"
                                onClick={() => setConsent(false)}
                            >
                                Não concordo
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {consent === true && (
                <iframe 
                    src="SEU_LINK_DO_FORMS_AQUI" 
                    className="ms-forms"
                    title="Avaliação de Saúde Mental"
                ></iframe>
            )}

            {consent === false && (
                <div className="thank-you-message">
                    <h2>Agradeço por ter visitado o site</h2>
                    <p>Sua privacidade e escolha são importantes para nós.</p>
                </div>
            )}
        </section>
    );
};

export default Evaluation;