import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import getData from '../../api/getData';

import { urlUpcoming, urlImageOriginal } from '../../config/config';

function Slider() {

    const [slides, setSlides] = useState([]);

    useEffect(() => {

        async function getSlider() {

            const data = await getData(urlUpcoming);

            setSlides(data.results);
        }
        getSlider();

    }, []);

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
                    <SwiperSlide key={slide.backdrop_path} className="relative">
                        <Link to={`/films/${slide.id}`} className="block">
                            <img src={`${urlImageOriginal}${slide.backdrop_path}`} alt={slide.title} className="w-screen" />
                            <div className="bg-white opacity-60 m-5 rounded-lg flex align-end absolute z-10 bottom-10 right-0 left-0">
                                <h2 className="text-4xl p-1 font-bold m-3">{slide.title}</h2>
                            </div>
                        </Link>
                    </SwiperSlide >
                ))}
            </Swiper >
        </>
    );
}

export default Slider;
