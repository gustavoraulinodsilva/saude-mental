import React from "react";
import '../sass/pages/_playlists.scss'
import { Link } from "react-router-dom";

const Playlists: React.FC = () => {
    return(
        <main className="playlists-container">
            <div className="container">
                <div className="text-container">
                    <h1 className="page-title">Playlists Terapêuticas</h1>
                    <p className="page-subtitle">Selecione playlists curadas para diferentes necessidades de saúde mental</p>
                    <Link to={'/'} className="back-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                        Voltar
                    </Link>
                </div>
                <section className="playlist-category">
                    <h2 className="category-title">Meditação e Relaxamento</h2>
                    <div className="playlists-grid">
                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8O2z77nfMgH" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Peaceful Meditation</h3>
                            <p>Músicas instrumentais para sessões de meditação</p>
                        </div>

                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Nature Sounds</h3>
                            <p>Sons da natureza para relaxamento profundo</p>
                        </div>
                    </div>
                </section>
                <section className="playlist-category">
                    <h2 className="category-title">Gerenciamento de Ansiedade</h2>
                    <div className="playlists-grid">
                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Calm Anxiety</h3>
                            <p>Músicas para acalmar a mente ansiosa</p>
                        </div>

                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9u7XXOp0l5L" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Stress Relief</h3>
                            <p>Faixas para aliviar o estresse diário</p>
                        </div>
                    </div>
                </section>
                <section className="playlist-category">
                    <h2 className="category-title">Foco e Produtividade</h2>
                    <div className="playlists-grid">
                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Deep Focus</h3>
                            <p>Músicas para melhorar a concentração</p>
                        </div>

                        <div className="playlist-card">
                            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWV7EzJMK2FUI" 
                                    width="100%" 
                                    height="380" 
                                    frameBorder="0" 
                                    allow="encrypted-media"></iframe>
                            <h3>Jazz for Work</h3>
                            <p>Jazz suave para ambiente produtivo</p>
                        </div>
                    </div>
                </section>
            </div>
    </main>
    );
};

export default Playlists;