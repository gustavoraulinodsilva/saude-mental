import React from "react";
import { Link } from "react-router-dom";
import '../sass/components/_disorder-carousel.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export interface Disorder{
    id: number;
    title: string;
    description: string;
    symptoms: string[];
    link: string;
}

export interface DisorderCarouselProps {
    disorders: Disorder[];
}

const DisorderCarousel: React.FC<DisorderCarouselProps> = ({ disorders }) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 }
        }}
        className="disorder-carousel"
      >
        {disorders.map((disorder) => (
          <SwiperSlide key={disorder.id}>
            <article className="disorder-card">
              <div className="card-header">
                <h3>{disorder.title}</h3>
              </div>
              <div className="card-content">
                <p>{disorder.description}</p>
                <ul className="symptoms-list">
                  {disorder.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
              <Link to={disorder.link} className="card-link">
                Saiba mais →
              </Link>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default DisorderCarousel;