import React, { useState, useEffect } from "react";
import '../sass/pages/_evaluation.scss';

const Evaluation: React.FC = () => {
    const [consent, setConsent] = useState<boolean | null>(null);

    // useEffect para carregar o script do Tally quando o formulário for exibido
    useEffect(() => {
        if (consent === true) {
            // Carregar o script do Tally se ainda não estiver carregado
            if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
                const script = document.createElement('script');
                script.src = 'https://tally.so/widgets/embed.js';
                script.async = true;
                document.head.appendChild(script);
            }
        }
    }, [consent]);

    return(
        <section className="evaluation-container">
            <div className="evaluation-hero">
                <div className="container">
                    <h1>Avaliação de Saúde Mental</h1>
                    <p>Uma ferramenta para auxiliar na compreensão do seu bem-estar emocional</p>
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
                            <li>As informações coletadas são confidenciais</li>
                            <li>Os resultados são apenas indicativos</li>
                        </ul>
                        <div className="consent-buttons">
                            <button 
                                className="agree-button"
                                onClick={() => setConsent(true)}
                            >
                                Concordo e quero prosseguir
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
                <div className="form-container">
                    <div className="form-header">
                        <h2>Questionário de Avaliação</h2>
                        <p>Responda com sinceridade para obter resultados mais precisos</p>
                        <button 
                            className="back-to-consent"
                            onClick={() => setConsent(null)}
                        >
                            ← Voltar ao termo
                        </button>
                    </div>
                    
                    <div className="tally-form-wrapper" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHlyP3RaDYmtKo39cPtUyG2RUN01YSlFDUUE0QUFMSEZDRzQ1NjdLWkxGUS4u&embed=true" 
                            frameBorder="0" 
                            marginWidth={0} 
                            marginHeight={0} 
                            style={{ border: 'none', width: '100%', height: '100%' }} 
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {consent === false && (
                <div className="consent-declined">
                    <div className="declined-content">
                        <h2>Consentimento Recusado</h2>
                        <p>
                            Respeitamos sua decisão. Caso mude de ideia, você pode retornar a qualquer momento.
                        </p>
                        <div className="declined-actions">
                            <button 
                                className="reconsider-button"
                                onClick={() => setConsent(null)}
                            >
                                Reconsiderar
                            </button>
                            <a href="/" className="home-button">
                                Voltar ao início
                            </a>
                        </div>
                        
                        <div className="alternative-resources">
                            <h3>Recursos Alternativos</h3>
                            <ul>
                                <li><a href="/saude-mental">Informações sobre Saúde Mental</a></li>
                                <li><a href="/estilo-de-vida">Dicas de Estilo de Vida Saudável</a></li>
                                <li><a href="tel:188">CVV - Ligue 188</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Evaluation;