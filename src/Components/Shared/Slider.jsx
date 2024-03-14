import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

import Cards from "./Cardd";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Sliderr() {
    return (
        <>


            <Swiper

                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={-70}
                navigation={true}

                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                style={{ paddingTop: 30, paddingBottom: 20 }}

                className="mySwiper"
            >
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards />
                </SwiperSlide>
            </Swiper>

        </>

    );
}