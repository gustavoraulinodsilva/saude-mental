import React from "react";
import "../sass/layout/_footer.scss";

const Footer: React.FC = () => {
    return(
        <footer className="footer">
            <div className="footer-alert">
                <div className="container">
                    <div className="resource-box footer-resource">
                        <h3>Busque Ajuda Imediata</h3>
                        <ul className="help-list">
                            <li>CVV - 188 (Ligue 188 ou acesse <a href="https://www.cvv.org.br">cvv.org.br</a>)</li>
                            <li>CAPS mais próximo da sua região</li>
                            <li>Psicólogos credenciados pelo CRP</li>
                        </ul>
                        <button className="emergency-button">Ajuda Imediata</button>
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
                            <li><a href="#">Saúde Mental</a></li>
                            <li><a href="#">Alimentação</a></li>
                            <li><a href="#">Atividades Físicas</a></li>
                        </ul>
                    </div>
                    
                    <div className="link-group">
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">Playlists</a></li>
                            <li><a href="#">Profissionais</a></li>
                            <li><a href="#">Ajuda Imediata</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright">© 2024 Saúde Mental - Todos os direitos reservados</p>
                <div className="partners">
                    <img src="/src/assets/images/fsg.png" alt="logo-fsg"/>
                </div>
            </div>
    </footer>
    );
};

export default Footer;