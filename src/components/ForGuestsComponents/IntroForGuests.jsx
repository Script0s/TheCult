import React from "react";
import calligraphieLeft from "../../img/Intro-img/Calligraphy-left.svg";
import calligraphieRight from "../../img/Intro-img/Calligraphy-right.svg";
import forGuestsIntro from "../../img/Intro-img/ForGuests-Heroe.svg";
const IntroForGuests = () => {
  return (
    <div className="intro-container">
      <img className="calligraphie-left" src={calligraphieLeft} alt="" />
      <img className="heroe-intro" src={forGuestsIntro} alt="" />
      <img className="calligraphie-right" src={calligraphieRight} alt="" />
    </div>
  );
};

export default IntroForGuests;
