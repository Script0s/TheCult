import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "./MealData";
import MealCard from "./MealCard";

const Desserts = () => {
  const breakfastItems = MealData.filter(
    (dataItem) => dataItem.categorie === "DESSERTS"
  );

  return (
    <div id="dessertsList" className="mealCardList">
      <h1 className="category-title">DESSERTS</h1>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        className="swiperDesserts"
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

export default Desserts;
