import React from "react";
import { Link } from "react-router-dom";
import "../sass/layout/_header.scss";

const Header: React.FC = () => {
    return (
    <header className="header">
        <nav className="nav">
            <div className="logo">
                <a href="/" className="logo-link">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="none"/>
                        <path d="M100 170C90 160 30 120 30 80C30 50 50 30 70 30C85 30 100 45 100 45C100 45 115 30 130 30C150 30 170 50 170 80C170 120 110 160 100 170Z" 
                        fill="#6A67CE" stroke="#4A4A9D" strokeWidth="4"/>
                        <rect x="90" y="65" width="20" height="40" fill="white"/>
                        <rect x="80" y="75" width="40" height="20" fill="white"/>
                        <path d="M100 170C90 160 30 120 30 80C30 50 50 30 70 30C85 30 100 45 100 45C100 45 115 30 130 30C150 30 170 50 170 80C170 120 110 160 100 170Z" 
                        fill="none" stroke="white" strokeWidth="2"/>
                    </svg>
                    <span>Saúde Mental</span>
                </a>
            </div>
            <ul className="nav-links">
                <li><Link to="/saude-mental" className="nav-link">Saúde Mental</Link></li>
                <li><a href="#estilo-vida" className="nav-link">Estilo de Vida</a></li>
                <li><a href="#avaliacao" className="nav-link">Avaliação</a></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;