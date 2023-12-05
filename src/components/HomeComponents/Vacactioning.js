import React, { useEffect, useRef, useState } from "react";
import mobileLuffyNaruto from "../../img/HomePage/Vacationing/mobileLuffyNaruto.svg";
import DesktopAyanami from "../../img/HomePage/Vacationing/DesktopAyanami.svg";
import DesktopLuffy from "../../img/HomePage/Vacationing/DesktopLuffy.svg";
import DesktopNaruto from "../../img/HomePage/Vacationing/DesktopNaruto.svg";
import DesktopSailorMoon from "../../img/HomePage/Vacationing/DesktopSailorMoon.svg";
import DesktopRengoku from "../../img/HomePage/Vacationing/DesktopRengoku.svg";
import DesktopLeftBlade from "../../img/HomePage/Vacationing/DesktopLeftBlade.svg";
import DesktopRightBlade from "../../img/HomePage/Vacationing/DesktopRightBlade.svg";
import shuriken1 from "../../img/HomePage/Vacationing/shuriken1.svg";
import shuriken2 from "../../img/HomePage/Vacationing/shuriken2.svg";
import shuriken3 from "../../img/HomePage/Vacationing/shuriken3.svg";
import shuriken4 from "../../img/HomePage/Vacationing/shuriken4.svg";
import useNavigationButton from "../useNavigationButton";
import homeVideo from "../../video/HomeVideo.mp4";

const Vacationing = () => {
  const navigateToBookings = useNavigationButton("/thecult/bookings");

  const containerRef = useRef(null);

  const [rotationDegree, setRotationDegree] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const shurikenStyles = [
    { transform: `rotate(${rotationDegree}deg)` },
    { transform: `rotate(${-rotationDegree}deg)` },
    { transform: `rotate(${rotationDegree}deg)` },
    { transform: `rotate(${-rotationDegree}deg)` },
  ];

  const shurikens = [shuriken1, shuriken2, shuriken3, shuriken4];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        let st = window.scrollY;
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setRotationDegree((prev) => prev + (st > lastScrollTop ? 2.5 : -2.5));
        }
        setLastScrollTop(st);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="vacationing-container" ref={containerRef}>
      <div className="video-container">
        <video
          className="homeVideo"
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={homeVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="vacationing-infos">
        <h2>
          WHETHER YOU'RE VACATIONING ALONE, OUT
          <br />
          WITH FRIENDS OR PLANNING A HOLIDAY PARTY,
          <br />
          WE'RE SURE WE CAN ACCOMMODATE YOU
        </h2>
        <p>After all, hospitality is what we do</p>
        <button
          className="Rect-button buttonBookin"
          onClick={navigateToBookings}
        >
          BOOK IN
        </button>
      </div>
      <div className="mobileHeroes-container">
        <img
          className="mobileLuffyNaruto"
          src={mobileLuffyNaruto}
          alt="Luffy and Naruto"
        />
      </div>
      <div className="desktopHeroesBlades-container">
        <div className="heroesImg-container">
          <img className="DesktopAyanami" src={DesktopAyanami} alt="Ayanami" />
          <img className="DesktopLuffy" src={DesktopLuffy} alt="Luffy" />
          <img className="DesktopNaruto" src={DesktopNaruto} alt="Naruto" />
          <img
            className="DesktopSailorMoon"
            src={DesktopSailorMoon}
            alt="SailorMoon"
          />
          <img className="DesktopRengoku" src={DesktopRengoku} alt="Rengoku" />
        </div>
        <div className="blades">
          <img
            className="DesktopLeftBlade"
            src={DesktopLeftBlade}
            alt="LeftBlade"
          />
          <img
            className="DesktopRightBlade"
            src={DesktopRightBlade}
            alt="RightBlade"
          />
        </div>
      </div>
      <div className="shuriken-container">
        {shurikens.map((shuriken, index) => (
          <div key={index} className={`shuriken-img-container${index + 1}`}>
            <img
              style={shurikenStyles[index]}
              className={`shuriken${index + 1} shuriken`}
              src={shuriken}
              alt={`Shuriken${index + 1}`}
            />
          </div>
        ))}
      </div>
      <h1>FOLLOW US @THECULT</h1>
    </div>
  );
};

export default Vacationing;
