import React from "react";
import KakashiKunai from "../../img/HomePage/IntroHome/Kakashi-kunai.png";
import NarutoKunai from "../../img/HomePage/IntroHome/Naruto-kunai.png";
import JirayaKunai from "../../img/HomePage/IntroHome/Jiraya-kunai.png";

const LoaderHome = () => {
  return (
    <div className="loader-home">
      <img className="kunai" src={KakashiKunai} alt="" />
      <img className="naruto-kunai" src={NarutoKunai} alt="" />
      <img className="kunai" src={JirayaKunai} alt="" />
    </div>
  );
};
export default LoaderHome;
