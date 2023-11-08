import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const urlImage = 'https://image.tmdb.org/t/p/original';

export const Slider = ({ slides }) => {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.backdrop_path} className='relative' >
                        <img src={`${urlImage}${slide.backdrop_path}`} alt={slide.title} />
                        <Link to={`/films/${slide.id}`}>
                            <h2 className="text-3xl p-3">{slide.title}</h2>
                            <p className="text-2xl p-2">{slide.overview}</p>
                            <Button variant="contained" className='p-1 m-1'>Watch</Button>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    );
};
