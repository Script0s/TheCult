import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "./MealData";
import MealCard from "./MealCard";

const NoodlesList = () => {
  const breakfastItems = MealData.filter(
    (dataItem) => dataItem.categorie === "NOODLES"
  );

  return (
    <div id="noodlesList" className="mealCardList">
      <h1 className="category-title">NOODLES</h1>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        className="swiperNoodles"
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

export default NoodlesList;
