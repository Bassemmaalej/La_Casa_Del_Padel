import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Pagination, Scrollbar } from "swiper";
import Item from "./Item_ListView_Tornment";
import './list_yous.css';

export default function Liste() {
    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode, Pagination, Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
            </Swiper>
        </>
    );
}
