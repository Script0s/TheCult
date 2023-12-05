import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "./MealData";
import MealCard from "./MealCard";

const BreakfastsList = () => {
  const breakfastItems = MealData.filter(
    (dataItem) => dataItem.categorie === "BREAKFASTS"
  );

  return (
    <div className="mealCardList">
      <h1 className="category-title">BREAKFASTS</h1>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        className="swiperBreakfasts"
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

export default BreakfastsList;
