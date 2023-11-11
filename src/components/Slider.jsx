import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

const urlImage = 'https://image.tmdb.org/t/p/original';

function Slider() {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
        // асинхронна ф-цiя для вiдправки запиту на сервер
        async function getFilms() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTg2ZmIzZmQ3YzQyMjI0ZWQ0OTJhZjU5YzE5YmM1NyIsInN1YiI6IjY1NGJkOWExMjg2NmZhMDBjNDI2NTU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7_oL62CSIuSYXlzKhEK8WnK1EQFT-u1zlMeXXqeMvE'
                }
            };

            //треба дочекатися відповіді
            const response = await fetch(url, options);
            const data = await response.json(); //масив з об'єктами з сервера збережені у змінній data
            // return data.results;
            console.log(data.results);
            setSlides(data.results);
        }
        // const dataPopular = await getFilms();
        getFilms();

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
                    <SwiperSlide key={slide.backdrop_path} className="relative" >
                        <img src={`${urlImage}${slide.backdrop_path}`} alt={slide.title} />
                        <Link to={`/films/${slide.id}`} className="absolute z-10 bottom-5">
                            <div className="bg-white opacity-60 p-5 m-10 rounded-lg">
                                <h2 className="text-4xl p-3 font-bold m-3">{slide.title}</h2>
                                <p className="text-xl p-2 m-3">{slide.overview}</p>
                            </div>
                            <Button variant="contained" className='p-2 m-3 bg-blue-800'>Watch</Button>
                        </Link>
                    </SwiperSlide >
                ))}
            </Swiper >
        </>
    );
};

export default Slider;
