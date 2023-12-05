import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "./MealData";
import MealCard from "./MealCard";

const StartersList = () => {
  const breakfastItems = MealData.filter(
    (dataItem) => dataItem.categorie === "STARTERS"
  );

  return (
    <div id="startersList" className="mealCardList">
      <h1 className="category-title">Starters</h1>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        className="swiperStarters"
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

export default StartersList;
