import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";


import "swiper/css/scrollbar";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Navigation, Scrollbar } from "swiper";
import VCard from "./VCard";



export default function VerticalSwiper() {
    return (
        <>

            <Swiper
                direction={"vertical"}
                slidesPerView={2.5}
                scrollbar={true}
                freeMode={true}
                modules={[FreeMode, Scrollbar, Navigation]}
                className="mySwiper"
                style={{ height: '80vh', width: '27rem', right: 0 }}
            >

                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VCard />
                </SwiperSlide>
            </Swiper>

        </>
    );
}
