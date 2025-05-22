import React from "react";
import "../sass/layout/_footer.scss";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const navigateToSection = (path: string, sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (location.pathname === path) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate(`${path}#${sectionId}`);
        }
    };

    return(
        <footer className="footer">
            <div className="footer-alert" id="emergency">
                <div className="container">
                    <div className="resource-box footer-resource">
                        <h3>Busque Ajuda Imediata</h3>
                        <ul className="help-list">
                            <li>CVV - 188 (Ligue 188 ou acesse <a href="https://www.cvv.org.br" target="_blank">cvv.org.br</a>)</li>
                            <li>CAPS mais próximo da sua região</li>
                            <li>Psicólogos credenciados pelo CRP</li>
                        </ul>
                        <a href="tel:188" className="emergency-button">Ajuda Imediata</a>
                    </div>
                </div>
            </div>
            <div className="footer-content container">
                <div className="footer-brand">
                    <h3 className="footer-title">Saúde Mental</h3>
                    <p className="footer-slogan">Informação que transforma</p>
                </div>
                
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Navegação</h4>
                        <ul>
                            <li><Link to={'/saude-mental'}>Saúde Mental</Link></li>
                            <li><a href="#" onClick={navigateToSection('/estilo-de-vida', 'alimentacao')}>Alimentação</a></li>
                            <li><a href="#" onClick={navigateToSection('/estilo-de-vida', 'atividades')}>Atividades Físicas</a></li>
                        </ul>
                    </div>
                    
                    <div className="link-group">
                        <h4>Recursos</h4>
                        <ul>
                            <li><Link to={'/playlists'}>Playlists</Link></li>
                            <li><a href="https://www.cvv.org.br" target="_blank">Ajuda Imediata</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright">© 2025 Saúde Mental - Todos os direitos reservados</p>
                <div className="partners">
                    <img src={`${import.meta.env.BASE_URL}images/fsg.png`} alt="logo-fsg"/>
                </div>
            </div>
    </footer>
    );
};

export default Footer;