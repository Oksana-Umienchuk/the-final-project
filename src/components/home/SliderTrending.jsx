import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import getData from '../../api/getData';

import { urlImage } from '../../config/config';

function SliderTrending({ url }) {

    const [slides, setSlides] = useState([]);

    useEffect(() => {

        async function getSlider() {

            const data = await getData(url);

            setSlides(data.results);
        }
        getSlider();

    }, []);

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y, Scrollbar]}
                spaceBetween={10}
                slidesPerView={5}
                autoplay={true}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.poster_path} className="relative w-screen">
                        < Link to={`/films/${slide.id}`} className="block">
                            <img src={`${urlImage}${slide.poster_path}`} alt={slide.title} className="w-screen" />
                        </Link>
                    </SwiperSlide >
                ))
                }
            </Swiper >
        </>
    );
}

SliderTrending.propTypes = { url: PropTypes.string };
export default SliderTrending;
