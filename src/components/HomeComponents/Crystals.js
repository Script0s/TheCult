import React, { useRef, useEffect } from "react";
import upLeft1 from "../../img/HomePage/Crystals/UpLeft1.svg";
import upLeft2 from "../../img/HomePage/Crystals/UpLeft2.svg";
import upRight1 from "../../img/HomePage/Crystals/UpRight1.svg";
import upRight2 from "../../img/HomePage/Crystals/UpRight2.svg";
import upRight3 from "../../img/HomePage/Crystals/UpRight3.svg";
import mid1 from "../../img/HomePage/Crystals/Down1.svg";
import mid2 from "../../img/HomePage/Crystals/Mid.svg";
import mid3 from "../../img/HomePage/Crystals/Down5.svg";
import mobileIchigo from "../../img/HomePage/Crystals/Heroes/MobileIchigo.svg";
import mobileSenku from "../../img/HomePage/Crystals/Heroes/MobileSenku.svg";
import desktopIchigo from "../../img/HomePage/Crystals/Heroes/DesktopIchigo.svg";
import desktopSenku from "../../img/HomePage/Crystals/Heroes/DesktopSenku.svg";
import down1 from "../../img/HomePage/Crystals/Down2.svg";
import down2 from "../../img/HomePage/Crystals/Down4.svg";
import down3 from "../../img/HomePage/Crystals/Down3.svg";
import down6 from "../../img/HomePage/Crystals/Down6.svg";
import down7 from "../../img/HomePage/Crystals/UpRight4.svg";

const Crystals = () => {
  const refs = {
    upLeft1: useRef(null),
    upLeft2: useRef(null),
    upRight1: useRef(null),
    upRight2: useRef(null),
    upRight3a: useRef(null),
    upRight3b: useRef(null),
    mid1: useRef(null),
    mid3: useRef(null),
    down1: useRef(null),
    down2: useRef(null),
    down3: useRef(null),
    down4: useRef(null),
    down5: useRef(null),
    down6: useRef(null),
    down7: useRef(null),
  };

  const transformations = {
    upLeft1: [0.25, -0.25, 0],
    upLeft2: [0.1, -0.1, 0],
    upRight1: [-0.1, -0.1, 0],
    upRight2: [-0.2, -0.2, 0],
    upRight3a: [-0.25, -0.25, -10],
    upRight3b: [-0.3, -0.3, 0],
    mid1: [0.05, 0.05, 66],
    mid3: [-0.2, 0.2, 101],
    down1: [0.1, 0.1, 10],
    down2: [-0.18, 0.18, 5],
    down3: [0.2, 0.2, 15],
    down4: [0.2, 0.2, 0],
    down5: [-0.1, 0.1, 0],
    down6: [-0.2, 0.2, 0],
    down7: [-0.1, -0.1, 0],
  };

  const animationFrameId = useRef(null);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const moveX = Math.max(-100, Math.min(100, x));
    const moveY = Math.max(-100, Math.min(100, y));

    cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      for (const key in refs) {
        const [translateX, translateY, rotation] = transformations[key];
        refs[key].current.style.transform = `translate(${
          moveX * translateX
        }px, ${moveY * translateY}px) rotate(${rotation}deg)`;
      }
    });
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="heroesCrystals" onMouseMove={handleMouseMove}>
      <div className="crystalsUp">
        <div className="upLeft">
          <img className="upLeft1" src={upLeft1} ref={refs.upLeft1} alt="" />
          <img className="upLeft2" src={upLeft2} ref={refs.upLeft2} alt="" />
        </div>
        <div className="upRight">
          <img className="upRight1" src={upRight1} ref={refs.upRight1} alt="" />
          <img className="upRight2" src={upRight2} ref={refs.upRight2} alt="" />
          <img
            className="upRight3a"
            src={upRight3}
            ref={refs.upRight3a}
            alt=""
          />
          <img
            className="upRight3b"
            src={upRight3}
            ref={refs.upRight3b}
            alt=""
          />
        </div>
      </div>
      <div className="container-tag-heroes">
        <div className="tag-line">
          <h2 className="firstTag">
            YOU HAVE WATCHED IT, NOW YOU CAN TASTE IT
          </h2>
          <h1 className="secondtag">BRINGING ANIME</h1>
          <h1 className="thirdTag">FOOD TO LIFE</h1>
        </div>
        <div className="heroesCrystal-container">
          <img className="mid1" src={mid1} ref={refs.mid1} alt="" />
          <img className="mid2" src={mid2} alt="" />
          <img className="mid3" src={mid3} ref={refs.mid3} alt="" />
          <div className="mobileHeroes-img">
            <img className="mobileIchigo" src={mobileIchigo} alt="" />
            <img className="mobileSenku" src={mobileSenku} alt="" />
          </div>
          <div className="desktopHeroes-img">
            <img className="desktopIchigo" src={desktopIchigo} alt="" />
            <img className="desktopSenku" src={desktopSenku} alt="" />
          </div>
          <img className="down1" src={down1} ref={refs.down1} alt="" />
          <img className="down2" src={down2} ref={refs.down2} alt="" />
          <img className="down3" src={down3} ref={refs.down3} alt="" />
          <img className="down4" src={mid1} ref={refs.down4} alt="" />
          <img className="down5" src={mid3} ref={refs.down5} alt="" />
          <img className="down6" src={down6} ref={refs.down6} alt="" />
          <img className="down7" src={down7} ref={refs.down7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Crystals;
