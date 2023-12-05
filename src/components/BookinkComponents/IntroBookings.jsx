import React from "react";
import calligraphieLeft from "../../img/Intro-img/Calligraphy-left.svg";
import calligraphieRight from "../../img/Intro-img/Calligraphy-right.svg";
import bookingIntro from "../../img/Intro-img/Booking-Heroe.svg";

const IntroBookings = () => {
  return (
    <div className="intro-container">
      <img className="calligraphie-left" src={calligraphieLeft} alt="" />
      <img className="heroe-intro" src={bookingIntro} alt="" />
      <img className="calligraphie-right" src={calligraphieRight} alt="" />
    </div>
  );
};

export default IntroBookings;
