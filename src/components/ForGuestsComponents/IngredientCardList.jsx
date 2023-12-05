import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid } from "swiper/modules";
import IngredientCard from "../ForGuestsComponents/IngredientCard";
import { ingredientCardData } from "../ForGuestsComponents/IngredientCardData";
const IngredientCardList = () => {
  return (
    <div className="ingredient-card-list">
      <Swiper
        slidesOffsetBefore={20}
        slidesOffsetAfter={50}
        slidesPerView="auto"
        grid={{ rows: 3, fill: "rows" }}
        spaceBetween={10}
        freeMode={true}
        grabCursor={true}
        modules={[Grid, FreeMode]}
        breakpoints={{
          768: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 0,
            grid: { rows: 5 },
          },
          1200: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            grid: { rows: 5 },
          },
        }}
      >
        {ingredientCardData.map((dataItem, index) => (
          <SwiperSlide key={index}>
            <IngredientCard data={dataItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IngredientCardList;
