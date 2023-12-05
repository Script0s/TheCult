import React from "react";
import makiTopLeft from "../../img/OurStoryPage/OurMission/MakiTopLeft.svg";
import makiTopRight from "../../img/OurStoryPage/OurMission/MakiTopRight.svg";
import makiBottomLeft from "../../img/OurStoryPage/OurMission/MakiBottomLeft.svg";
import makiBottomRight from "../../img/OurStoryPage/OurMission/MakiBottomRight.svg";
import DesktopSandwich from "../../img/OurStoryPage/OurMission/DesktopSandwich.svg";
import DesktopFireForce from "../../img/OurStoryPage/OurMission/DesktopFireForce.svg";

const OurMission = () => {
  return (
    <div className="ourMission-container">
      <div className="makiTop-container maki-container">
        <img className="makiTopLeft makiLeft" src={makiTopLeft} alt="" />
        <img className="makiTopRight makiRight" src={makiTopRight} alt="" />
      </div>
      <div className="titles-container">
        <h1>OUR MISSION</h1>
        <h2>
          WE STARTED THE CULT TO BRING PROUD, LOUD JAPAN FLAVORS TO YOUR
          FINGERTIPS ANY DAY OF THE WEEK. NO MORE DILUTED DISHES, NO MORE
          CULTURAL COMPROMISE
        </h2>
      </div>
      <div className="makiBottom-container maki-container">
        <img className="makiBottomLeft makiLeft" src={makiBottomLeft} alt="" />
        <img
          className="makiBottomRight makiRight"
          src={makiBottomRight}
          alt=""
        />
      </div>
      <img className="DesktopSandwich" src={DesktopSandwich} alt="" />
      <img className="DesktopFireForce" src={DesktopFireForce} alt="" />
    </div>
  );
};

export default OurMission;
