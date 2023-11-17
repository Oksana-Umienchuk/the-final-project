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

import getData from '../api/getData';

const urlImage = 'https://image.tmdb.org/t/p/original';
const url = `/movie/upcoming?language=en-US&page=1`;

function Slider() {

    const [slides, setSlides] = useState(() => {
        const data = JSON.parse(
            window
                .localStorage
                .getItem(url)
        );

        return data ? data.results : [];
    });

    useEffect(() => {

        async function getSlider() {

            const data = await getData(url);

            window.localStorage.setItem(
                url,
                JSON.stringify(data)
            );
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
                    <SwiperSlide key={slide.backdrop_path} className="relative w-screen">
                        <img src={`${urlImage}${slide.backdrop_path}`} alt={slide.title} className="w-screen" />
                        <Link to={`/films/${slide.id}`} className="absolute z-10 bottom-10 right-0 left-0">
                            <div className="bg-white opacity-60 m-5 rounded-lg flex align-end">
                                <h2 className="text-4xl p-1 font-bold m-3">{slide.title}</h2>
                                {/* <p className="text-xl p-2 m-3">{slide.overview}</p> */}
                            </div>
                            <Button variant="contained" className="p-2 m-3" sx={{
                                '.MuiButton-root': {
                                    color: 'rgb(8 51 68)',
                                    backgroundColor: 'rgb(251 191 36)',
                                }
                            }}
                            >Watch</Button>
                        </Link>
                    </SwiperSlide >
                ))}
            </Swiper >
        </>
    );
};

export default Slider;
