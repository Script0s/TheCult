import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "./MealData";
import MealCard from "./MealCard";

const RamenList = () => {
  const breakfastItems = MealData.filter(
    (dataItem) => dataItem.categorie === "RAMEN"
  );

  return (
    <div id="ramensList" className="mealCardList">
      <h1 className="category-title">RAMEN</h1>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        className="swiperRamen"
        modules={[FreeMode]}
      >
        {breakfastItems.map((dataItem, index) => (
          <SwiperSlide key={index}>
            <MealCard key={index} data={dataItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RamenList;
