import React, { useState, useEffect } from "react";
import '../sass/pages/_playlists.scss';
import { Link } from "react-router-dom";
import playlistsData from '../data/playlists.json';

interface PlaylistItem {
  name: string;
  description: string;
  spotifyEmbed: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Category {
  title: string;
  description: string;
  therapeuticNote?: string;
  playlists: PlaylistItem[];
}

interface Introduction {
  title: string;
  subtitle: string;
  mainContent: string;
  historicalContext: {
    title: string;
    content: string;
  };
  scientificEvidence: {
    title: string;
    benefits: Benefit[];
  };
  therapeuticApplications: {
    title: string;
    conditions: string[];
  };
  callToAction: string;
}

interface PlaylistsContent {
  pageTitle: string;
  pageSubtitle: string;
  introduction: Introduction;
  categories: Category[];
}

const Playlists: React.FC = () => {
    const [content, setContent] = useState<PlaylistsContent | null>(null);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    
    useEffect(() => {
        const formattedContent: PlaylistsContent = {
            pageTitle: playlistsData.content.pageTitle,
            pageSubtitle: playlistsData.content.pageSubtitle,
            introduction: playlistsData.content.introduction as Introduction,
            categories: playlistsData.content.categories.map(category => ({
                title: category.title,
                description: category.description,
                therapeuticNote: category.therapeuticNote,
                playlists: category.playlists.map(playlist => ({
                    name: playlist.name,
                    description: playlist.description,
                    spotifyEmbed: playlist.spotifyEmbed
                }))
            }))
        };

        setContent(formattedContent);
    }, []);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    
    if (!content) {
        return <div className="loading-container">
            <div className="loading-spinner">🎵</div>
            <p>Carregando suas playlists terapêuticas...</p>
        </div>;
    }
    
    return(
        <main className="playlists-container">
            <div className="container">
                <div className="text-container" id="playlists">
                    <h1 className="page-title">{content.pageTitle}</h1>
                    <p className="page-subtitle">{content.pageSubtitle}</p>
                    <Link to={'/'} className="back-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                        Voltar
                    </Link>
                </div>

                {/* Seção de Introdução Expandida */}
                <section className="introduction-expanded">
                    <div className="intro-header">
                        <h2>{content.introduction.title}</h2>
                        <h3>{content.introduction.subtitle}</h3>
                        <p className="main-content">{content.introduction.mainContent}</p>
                    </div>

                    {/* Contexto Histórico */}
                    <div className="interactive-section">
                        <button 
                            className={`section-toggle ${expandedSection === 'history' ? 'active' : ''}`}
                            onClick={() => toggleSection('history')}
                        >
                            {content.introduction.historicalContext.title}
                            <span className="toggle-icon">{expandedSection === 'history' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'history' && (
                            <div className="section-content">
                                <p>{content.introduction.historicalContext.content}</p>
                            </div>
                        )}
                    </div>

                    {/* Evidências Científicas */}
                    <div className="interactive-section">
                        <button 
                            className={`section-toggle ${expandedSection === 'science' ? 'active' : ''}`}
                            onClick={() => toggleSection('science')}
                        >
                            {content.introduction.scientificEvidence.title}
                            <span className="toggle-icon">{expandedSection === 'science' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'science' && (
                            <div className="section-content">
                                <div className="benefits-grid">
                                    {content.introduction.scientificEvidence.benefits.map((benefit, index) => (
                                        <div className="benefit-card" key={index}>
                                            <div className="benefit-icon">{benefit.icon}</div>
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Aplicações Terapêuticas */}
                    <div className="interactive-section">
                        <button 
                            className={`section-toggle ${expandedSection === 'applications' ? 'active' : ''}`}
                            onClick={() => toggleSection('applications')}
                        >
                            {content.introduction.therapeuticApplications.title}
                            <span className="toggle-icon">{expandedSection === 'applications' ? '▼' : '▶'}</span>
                        </button>
                        {expandedSection === 'applications' && (
                            <div className="section-content">
                                <div className="conditions-grid">
                                    {content.introduction.therapeuticApplications.conditions.map((condition, index) => (
                                        <div className="condition-tag" key={index}>
                                            <span>✓</span> {condition}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="call-to-action">
                        <p>{content.introduction.callToAction}</p>
                    </div>
                </section>
                
                {/* Categorias de Playlists */}
                {content.categories.map((category, index) => (
                    <section className="playlist-category" key={index}>
                        <div className="category-header">
                            <h2 className="category-title">{category.title}</h2>
                            <p className="category-description">{category.description}</p>
                            {category.therapeuticNote && (
                                <div className="therapeutic-note">
                                    <span className="note-icon">🎯</span>
                                    <p>{category.therapeuticNote}</p>
                                </div>
                            )}
                        </div>
                        <div className="playlists-grid">
                            {category.playlists.map((playlist, pIndex) => (
                                <div className="playlist-card" key={pIndex}>
                                    <iframe 
                                        src={playlist.spotifyEmbed} 
                                        width="100%" 
                                        height="380" 
                                        frameBorder="0" 
                                        allow="encrypted-media">
                                    </iframe>
                                    <h3>{playlist.name}</h3>
                                    <p>{playlist.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
};

export default Playlists;