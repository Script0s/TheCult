import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import calli from "../img/NonePage/Calli.svg";
import chainsawman from "../img/NonePage/Chainsawman.svg";
import MobileTopLeft from "../img/NonePage/MobileTopLeft.svg";
import MobileBottomLeft from "../img/NonePage/MobileBottomLeft.svg";
import MobileTopMid from "../img/NonePage/MobileTopMid.svg";
import MobileTopRight from "../img/NonePage/MobileTopRight.svg";
import MobileBottomRight from "../img/NonePage/MobileBottomRight.svg";
import DesktopBottomRight from "../img/NonePage/DesktopBottomRight.svg";
import DesktopBottomLeft from "../img/NonePage/DesktopBottomLeft.svg";

const None = () => {
  return (
    <div className="none-container">
      <Navigation />
      <div className="NonProfit-project">
        <img className="calli" src={calli} alt="" />
        <h1>
          MAYBE NEXT TIME, MY FRIEND
          <br />
          IT'S JUST A NON-PROFIT PROJECT
        </h1>
        <div className="button-container">
          <div className="leftButton-container">
            <h2>FEEL FREE TO SAY HELLO</h2>
            <button className="Rect-button">LINKEDIN</button>
          </div>
          <div className="rightButton-container">
            <h2>ORDER A WEBSITE</h2>
            <button className="Rect-button">LINKEDIN</button>
          </div>
        </div>
        <div className="img-none-container">
          <img className="chainsawman" src={chainsawman} alt="" />
          <img className="MobileTopLeft" src={MobileTopLeft} alt="" />
          <img className="MobileBottomLeft" src={MobileBottomLeft} alt="" />
          <img className="MobileTopMid" src={MobileTopMid} alt="" />
          <img className="MobileTopRight" src={MobileTopRight} alt="" />
          <img className="MobileBottomRight" src={MobileBottomRight} alt="" />
          <img className="DesktopBottomRight" src={DesktopBottomRight} alt="" />
          <img className="DesktopBottomLeft" src={DesktopBottomLeft} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default None;
