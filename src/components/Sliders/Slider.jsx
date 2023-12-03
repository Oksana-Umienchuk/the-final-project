import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
                            <img src={`${urlImageOriginal}${slide.backdrop_path}`} alt={slide.title} className="w-screen object-cover object-center" />
                            <div>
                                <div className="h-50 bg-gradient-to-t from-black to-transparent rounded-lg text-left -mb-3 mt-3 absolute z-10 bottom-3  -right-1 -left-1">
                                    <h2 className="text-lg text-white py-8 px-3 font-bold sm:text-2xl md:text-3xl lg:text-4xl sm:m-1 md:m-2 lg:m-3">{slide.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide >
                ))}
            </Swiper >
        </>
    );
}

export default Slider;
