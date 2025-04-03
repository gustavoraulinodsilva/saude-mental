import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,Pagination } from "swiper/modules";
import '../sass/components/_home-about-carousel.scss';

const HomeAboutCarousel: React.FC = () => {
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
                <SwiperSlide>
                    <div className="swiper-slide">
                        <h3>Slide 1</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <h3>Slide 2</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <h3>Slide 3</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeAboutCarousel;