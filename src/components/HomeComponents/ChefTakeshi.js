import React from "react";
import mobileChefTakeshi from "../../img/HomePage/ChefTakeshi/mobileChefTakeshi.svg";
import desktopChefTakeshi from "../../img/HomePage/ChefTakeshi/desktopChefTakeshi.svg";
import desktopPinkImg from "../../img/HomePage/ChefTakeshi/desktopPinkImg.svg";
import desktopBlackPepper from "../../img/HomePage/ChefTakeshi/desktopBlackPepper.svg";
import desktopWhitePepper from "../../img/HomePage/ChefTakeshi/desktopWhitePepper.svg";
import desktopOnionAsterisque from "../../img/HomePage/ChefTakeshi/desktopOnionAsterisque.svg";
import desktopShrimp from "../../img/HomePage/ChefTakeshi/desktopShrimp.svg";
import useNavigationButton from "../useNavigationButton";

const ChefTakeshi = () => {
  const navigateToOurStory = useNavigationButton("/ourstory");
  return (
    <div className="chefTakeshi-container">
      <div className="desktopChefTakeshiImg-container">
        <img className="desktopShrimp" src={desktopShrimp} alt="" />
        <img className="desktopPinkImg" src={desktopPinkImg} alt="" />
        <img className="desktopChefTakeshi" src={desktopChefTakeshi} alt="" />
        <img className="desktopWhitePepper" src={desktopWhitePepper} alt="" />
        <img className="desktopBlackPepper" src={desktopBlackPepper} alt="" />
        <img
          className="desktopOnionAsterisque"
          src={desktopOnionAsterisque}
          alt=""
        />
      </div>
      <div className="chefTakeshi-info">
        <h1>
          UNIQUE CHEF
          <br />
          TAKESHI KITANO
        </h1>
        <p className="text-description1">
          Chef Takeshi will immerse you in the cultural and historical aspects
          of gastronomy and show you how and why food is woven into the
          background or plot of anime.
        </p>
        <p className="text-description2">
          Welcome to the anime food family! Thank you for being a part of it,
          Takeshi x
        </p>
        <button
          className="Rect-button readOurStory"
          onClick={navigateToOurStory}
        >
          READ OUR STORY
        </button>
      </div>
      <div className="mobileChefTakeshiImg-container">
        <img className="chefTakeshi-img" src={mobileChefTakeshi} alt="" />
      </div>

      <div className="text-animate">
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
        <h1>#THECULT~</h1>
      </div>
    </div>
  );
};

export default ChefTakeshi;
