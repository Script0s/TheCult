import React from "react";
import Navigation from "../components/Navigation";
import Shop from "../components/ShopComponents/Shop";
import IntroOurStory from "../components/OurStoryComponents/IntroOurStory";
import Footer from "../components/Footer";
import WhoAreWe from "../components/OurStoryComponents/WhoAreWe";
import OurMission from "../components/OurStoryComponents/OurMission";
import MainWizard from "../components/OurStoryComponents/MainWizard";
import SwiperBlackWhite from "../components/SwiperBlackWhite";
import GreatFood from "../components/OurStoryComponents/GreatFood";

const OurStory = () => {
  return (
    <div className="ourStory-container">
      <Navigation />
      <Shop />
      <IntroOurStory />
      <WhoAreWe />
      <OurMission />
      <MainWizard />
      <GreatFood />
      <SwiperBlackWhite />
      <Footer />
    </div>
  );
};

export default OurStory;
