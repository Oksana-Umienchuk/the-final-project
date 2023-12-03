import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';

import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import { urlImage } from '../../config/config';

function SliderActorsImagesList({ actorImage }) {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y, Scrollbar]}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                autoplay={true}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {actorImage.map((slide) => (
                    <SwiperSlide key={slide.file_path} className="relative w-screen">
                        <img src={`${urlImage}${slide.file_path}`} alt="actor photos" className="w-screen" />
                    </SwiperSlide >
                ))
                }
            </Swiper >
        </>
    );
}

SliderActorsImagesList.propTypes = { actorImage: PropTypes.array };
export default SliderActorsImagesList;
