import React from "react";
import calligraphieLeft from "../../img/Intro-img/Calligraphy-left.svg";
import calligraphieRight from "../../img/Intro-img/Calligraphy-right.svg";
import menuIntro from "../../img/Intro-img/Menu-Heroe.svg";
const IntroMenu = () => {
  return (
    <div className="intro-container">
      <img className="calligraphie-left" src={calligraphieLeft} alt="" />
      <img className="heroe-intro" src={menuIntro} alt="" />
      <img className="calligraphie-right" src={calligraphieRight} alt="" />
    </div>
  );
};

export default IntroMenu;
