import React from "react";
import heroe from "../../img/OurStoryPage/MainWizard/Heroe.svg";
import chips from "../../img/OurStoryPage/MainWizard/Chips.svg";
import leaf from "../../img/OurStoryPage/MainWizard/Leaf.svg";
import gallery from "../../img/OurStoryPage/MainWizard/Gallery.svg";
import useNavigationButton from "../useNavigationButton";

const MainWizard = () => {
  const navigateToMenu = useNavigationButton("/menu");
  return (
    <div className="mainWizard-container">
      <div className="infos-container">
        <div className="info-text">
          <h1>
            MAIN WIZARD
            <br />
            TAKESHI KITANO
          </h1>
          <p className="info1">
            Our chef Takeshi came from Tokyo to promote Japanese cuisine, making
            it simple for the chef and divine for the diners — that’s his long
            time mission. Now in our open kitchen, he lovingly and happily
            prepares authentic dishes from the best of anime for you.
          </p>
          <p className="info2">
            Play an anime quiz with Takeshi and maybe he’ll share a cool recipe
            with you!
          </p>
          <button className="Rect-button" onClick={navigateToMenu}>
            VIEW ALL MENU
          </button>
        </div>

        <div className="mainWizard-img">
          <img className="chips" src={chips} alt="" />
          <img className="heroe" src={heroe} alt="" />
          <img className="leaf" src={leaf} alt="" />
          <img className="gallery" src={gallery} alt="" />
        </div>
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

export default MainWizard;
