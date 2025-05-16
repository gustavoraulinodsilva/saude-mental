import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,Pagination } from "swiper/modules";
import '../sass/components/_home-about-carousel.scss';
import { Link } from "react-router-dom";

export interface SlideData{
    title: string;
    content: string;
    cta?: {
        label: string;
        link: string;
    }
}

interface Props{
    slides: SlideData[];
}

const HomeAboutCarousel: React.FC<Props> = ({slides}) => {

    const isInternalLink = (link: string) => {
        return !link.startsWith('http') && !link.startsWith('#');
    };

    return (
        <div className="home-about-carousel">
            <Swiper
                direction="vertical"
                modules={[Mousewheel,Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                mousewheel={true}
                pagination={{ clickable: true }}
                className="swiper"
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="swiper-content">
                            <h3 className="slide-title">{slide.title}</h3>
                            <p className="slide-text">{slide.content}</p>
                            {slide.cta && (
                                <div className="slide-footer">
                                    {isInternalLink(slide.cta.link) ? (
                                        <Link 
                                            to={slide.cta.link.replace(/^\//, '')} 
                                            className="cta-button"
                                        >
                                            {slide.cta.label}
                                        </Link>
                                    ) : (
                                        <a 
                                            href={slide.cta.link} 
                                            className="cta-button"
                                        >
                                            {slide.cta.label}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeAboutCarousel;