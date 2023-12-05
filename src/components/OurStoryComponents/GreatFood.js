import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { MealData } from "../MenuComponents/MealData";
import MealCard from "../MenuComponents/MealCard";
import ourStoryVideo from "../../video/OurStoryVideo.mp4";
import useNavigationButton from "../useNavigationButton";

const GreatFood = () => {
  const navigateToMenu = useNavigationButton("/thecult/menu");
  const categories = [
    "BREAKFASTS",
    "STARTERS",
    "RAMEN",
    "NOODLES",
    "HOT DISHES",
    "DESSERTS",
  ];

  const getRandomItemFromCategory = (category) => {
    const items = MealData.filter(
      (dataItem) => dataItem.categorie === category
    );
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const randomItems = categories.map(getRandomItemFromCategory);

  return (
    <div className="greatFood-container">
      <div className="video-container">
        <video
          className="ourStoryVideo"
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={ourStoryVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="infos-container">
        <h1 className="title-info">
          BEHIND EVERY GREAT
          <br />
          MEETS IS A GREAT FOOD
        </h1>
        <div className="texts-container">
          <p className="info1">
            If you’re an anime fan, you’ve probably found yourself craving some
            of the delicious Japanese snacks that your favorite characters enjoy
            in each episode.
          </p>
          <p className="info2">
            The only thing that could make your anime marathon better is to have
            some of these snacks to enjoy yourself. Here are some popular snacks
            that you’ve probably seen in anime and where to get them!
          </p>
        </div>
      </div>
      <div className="mealCardList mealCardList-OurStory">
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          grabCursor={true}
          className="swiperRandom"
          modules={[FreeMode]}
        >
          {randomItems.map((dataItem, index) => (
            <SwiperSlide key={index}>
              <div className="mealCards-container">
                <MealCard data={dataItem} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="dishesButton-container">
        <h2>THE CULT PRESENTS YOUR NEW FAVORITE DISHES</h2>
        <button className="Rect-button" onClick={navigateToMenu}>
          SHOP NOW
        </button>
        <h1>FOLLOW US @THECULT</h1>
      </div>
    </div>
  );
};

export default GreatFood;
