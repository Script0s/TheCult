import React, { useState, useEffect } from "react";
import mobileWhoAreWe from "../../img/OurStoryPage/WhoAreWe/MobileWhoAreWe.svg";
import DesktopLeftNinjas from "../../img/OurStoryPage/WhoAreWe/DesktopLeftNinjas.svg";
import DesktopRightNinjas from "../../img/OurStoryPage/WhoAreWe/DesktopRightNinjas.svg";
import DesktopPinkImg from "../../img/OurStoryPage/WhoAreWe/DesktopPinkImg.svg";

const WhoAreWe = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  let scrollPercentage =
    (17.5 * scrollY) /
    (document.documentElement.scrollHeight - window.innerHeight);

  // DesktopLeftNinjas
  let initialTranslateXLeft = -30;
  let moveValueLeft = Math.min(
    2.5,
    initialTranslateXLeft + 30 * scrollPercentage
  );
  const leftNinjaStyles = {
    transform: `translateX(${moveValueLeft}vw)`,
  };

  // DesktopRightNinjas
  let initialTranslateXRight = 30;
  let moveValueRight = Math.max(
    -2.5,
    initialTranslateXRight - 30 * scrollPercentage
  );
  const rightNinjaStyles = {
    transform: `translateX(${moveValueRight}vw)`,
  };

  return (
    <div className="whoAreWe-container">
      <div className="title-infos-container">
        <div className="titles-container">
          <h1>WHO ARE WE?</h1>
          <h2>
            PEACE, LOVE AND ICONIC
            <br />
            ANIME FOODS
          </h2>
        </div>
        <div className="infos-container">
          <p className="info info1">
            We returned to our roots to finally build the company of our dreams
            — one that proudly reclaims + celebrates the multitudes to be found
            in Asian flavors!
          </p>
          <p className="info info2">
            THE CULT — is our little haven, as a place to give back to our
            community the best way we know how: by giving you a place to meet,
            share stories and create memories.
          </p>
          <p className="info info3">
            This is our fiery love letter to our otaku (and everyone else), our
            food and our favourite characters of anime.
          </p>
          <p className="info info4">
            Pull up a stool and grab a bowl – welcome to our house.
          </p>
          <p className="signature">Team THE CULT x</p>
        </div>
      </div>
      <img
        className="mobileWhoAreWe"
        src={mobileWhoAreWe}
        alt="Who Are We Mobile"
      />
      <div className="desktop-img-container">
        <img
          style={leftNinjaStyles}
          className="DesktopLeftNinjas"
          src={DesktopLeftNinjas}
          alt="Left Ninjas"
        />
        <img
          style={rightNinjaStyles}
          className="DesktopRightNinjas"
          src={DesktopRightNinjas}
          alt="Right Ninjas"
        />
        <img
          className="DesktopPinkImg"
          src={DesktopPinkImg}
          alt="Decorative Pink Image"
        />
      </div>
    </div>
  );
};

export default WhoAreWe;
