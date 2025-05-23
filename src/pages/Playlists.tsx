import React, { useState, useEffect } from "react";
import '../sass/pages/_playlists.scss';
import { Link } from "react-router-dom";
import playlistsData from '../data/playlists.json';

interface PlaylistItem {
  name: string;
  description: string;
  spotifyEmbed: string;
}

interface Category {
  title: string;
  description: string;
  playlists: PlaylistItem[];
}

interface PlaylistsContent {
  pageTitle: string;
  pageSubtitle: string;
  introduction: {
    title: string;
    content: string;
  };
  categories: Category[];
}

const Playlists: React.FC = () => {
    const [content, setContent] = useState<PlaylistsContent | null>(null);
    
    useEffect(() => {
        const formattedContent: PlaylistsContent = {
            pageTitle: playlistsData.content.pageTitle,
            pageSubtitle: playlistsData.content.pageSubtitle,
            introduction: {
                title: playlistsData.content.introduction.title,
                content: playlistsData.content.introduction.content
            },
            categories: playlistsData.content.categories.map(category => ({
                title: category.title,
                description: category.description,
                playlists: category.playlists.map(playlist => ({
                    name: playlist.name,
                    description: playlist.description,
                    spotifyEmbed: playlist.spotifyEmbed
                }))
            }))
        };

        setContent(formattedContent);
    }, []);
    
    if (!content) {
        return <div>Carregando...</div>;
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
                <section className="introduction">
                    <h2>{content.introduction.title}</h2>
                    <p>{content.introduction.content}</p>
                </section>
                {content.categories.map((category, index) => (
                    <section className="playlist-category" key={index}>
                        <h2 className="category-title">{category.title}</h2>
                        {category.description && <p className="category-description">{category.description}</p>}
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