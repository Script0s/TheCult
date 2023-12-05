import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./HomeComponents/ImagesSlider";
import { FreeMode } from "swiper/modules";

const SwiperBlackWhite = () => {
  return (
    <div className="swiperBlackWhite-container">
      <Swiper
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        slidesPerView={2}
        spaceBetween={15}
        freeMode={true}
        grabCursor={true}
        className="swiperBlackWhite"
        modules={[FreeMode]}
        breakpoints={{
          768: {
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`item item${index}`}>
              <img
                draggable="false"
                className="imageBlackWhite"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBlackWhite;
