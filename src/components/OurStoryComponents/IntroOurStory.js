import React from "react";
import calligraphieLeft from "../../img/Intro-img/Calligraphy-left.svg";
import calligraphieRight from "../../img/Intro-img/Calligraphy-right.svg";
import ourStoryIntro from "../../img/Intro-img/OurStory-Heroe.svg";
const IntroOurStory = () => {
  return (
    <div className="intro-container">
      <img className="calligraphie-left" src={calligraphieLeft} alt="" />
      <img className="heroe-intro" src={ourStoryIntro} alt="" />
      <img className="calligraphie-right" src={calligraphieRight} alt="" />
    </div>
  );
};

export default IntroOurStory;
