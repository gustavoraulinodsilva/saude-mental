import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../sass/layout/_header.scss";

const Header: React.FC = () => {
    const location = useLocation();
    const { pathname } = location;
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);
    return (
    <header className="header">
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} onClick={closeMenu}>
            <div className="close-hamburger" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <div className="logo">
                <Link to="/" className="logo-link" onClick={closeMenu}>
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
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/saude-mental" onClick={closeMenu} className={`nav-link ${pathname === '/saude-mental' ? 'active' : ''}`}>Saúde Mental</Link></li>
                <li><Link to="/estilo-de-vida" onClick={closeMenu} className={`nav-link ${pathname === '/estilo-de-vida' ? 'active' : ''}`}>Estilo de Vida</Link></li>
                <li><Link to="/playlists" onClick={closeMenu} className={`nav-link ${pathname === '/playlist' ? 'active' : ''}`}>Playlists</Link></li>
                <li><Link to="/avaliacao" onClick={closeMenu} className={`nav-link ${pathname === '/avaliacao' ? 'active' : ''}`}>Avaliação</Link></li>
            </ul>
        </nav>
        <div className="logo-mobile">
            <Link to="/" className="link-logo">
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
            </Link>
        </div>
        <div className="menu-hamburger" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>
        {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </header>
    );
};

export default Header;