import React from "react";
import chopstickLeft from "../../img/HomePage/Chopsticks/chopstickLeft.svg";
import chopstickright from "../../img/HomePage/Chopsticks/chopstickRight.svg";
import egg from "../../img/HomePage/Chopsticks/egg.svg";
import leftTopOne from "../../img/HomePage/Chopsticks/1LeftTop.svg";
import leftDownOne from "../../img/HomePage/Chopsticks/1LeftDown.svg";
import leftTopTwo from "../../img/HomePage/Chopsticks/2LeftTop.svg";
import midDown from "../../img/HomePage/Chopsticks/2LeftDown.svg";
import rightTop from "../../img/HomePage/Chopsticks/1RightTop.svg";
import rightMid from "../../img/HomePage/Chopsticks/2Right.svg";
import rightDown from "../../img/HomePage/Chopsticks/3Right.svg";

const DinnerAnimation = () => {
  return (
    <div className="dinnerAnimation-container">
      <div className="leftDinner">
        <div className="leftPart1">
          <img className="leftTopOne" src={leftTopOne} alt="" />
          <img className="leftDownOne" src={leftDownOne} alt="" />
        </div>
        <div className="leftPart2">
          <img className="leftTopTwo" src={leftTopTwo} alt="" />
          <img className="midDown" src={midDown} alt="" />
        </div>
      </div>
      <img className="chopstickLeft" src={chopstickLeft} alt="" />
      <img className="chopstickRight" src={chopstickright} alt="" />
      <img className="egg" src={egg} alt="" />
      <div className="rightDinner">
        <div className="rightPart1">
          <img className="rightTop" src={rightTop} alt="" />
          <img className="rightMid" src={rightMid} alt="" />
        </div>
        <img className="rightDown" src={rightDown} alt="" />
      </div>
    </div>
  );
};

export default DinnerAnimation;
