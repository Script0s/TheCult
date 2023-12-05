import React from "react";
import { Link } from "react-router-dom";
import mobileRamen1 from "../../img/HomePage/ViewMenu/RamenMobile1.svg";
import mobileRamen2 from "../../img/HomePage/ViewMenu/RamenMobile2.svg";
import mobileNoodles1 from "../../img/HomePage/ViewMenu/NoodlesMobile1.svg";
import mobileNoodles2 from "../../img/HomePage/ViewMenu/NoodlesMobile2.svg";
import mobileStarters1 from "../../img/HomePage/ViewMenu/StartersMobile1.svg";
import mobileStarters2 from "../../img/HomePage/ViewMenu/StartersMobile2.svg";
import mobileDesserts1 from "../../img/HomePage/ViewMenu/DessertsMobile1.svg";
import mobileDesserts2 from "../../img/HomePage/ViewMenu/DessertsMobile2.svg";
import desktopRamen from "../../img/HomePage/ViewMenu/RamenDesktop.svg";
import desktopNoodles from "../../img/HomePage/ViewMenu/NoodlesDesktop.svg";
import desktopStarters from "../../img/HomePage/ViewMenu/StartersDesktop.svg";
import desktopDesserts from "../../img/HomePage/ViewMenu/DessertsDesktop.svg";
import useNavigationButton from "../useNavigationButton";

const ViewMenu = () => {
  const navigateToMenu = useNavigationButton("/thecult/menu");
  return (
    <div className="View-menu">
      <div className="desktop-bigImg">
        <Link to="/thecult/menu#ramensList">
          <img src={desktopRamen} alt="" />
        </Link>
        <Link to="/thecult/menu#noodlesList">
          <img src={desktopNoodles} alt="" />
        </Link>
        <Link to="/thecult/menu#startersList">
          <img src={desktopStarters} alt="" />
        </Link>
        <Link to="/thecult/menu#dessertsList">
          <img src={desktopDesserts} alt="" />
        </Link>
      </div>
      <div className="ViewMenu-info-container">
        <div className="ViewMenu-info">
          <h1>BELLY FULL, HEART FULL</h1>
          <p className="viewMenu-text1">
            Taste Naruto's favorite ramen, sink your teeth into the onigiri that
            demon slayer Tanjiro loves, or discuss memorable moments of your
            favorite anime over tea and air pancakes.
          </p>
          <p className="viewMenu-text2">
            Feast on all the famous anime food in our Cult Hidden Village.
          </p>
        </div>
        <div className="mobileViewMenu-img">
          <Link to="/thecult/menu#ramensList">
            <div className="category-img">
              <img className="category-img1" src={mobileRamen1} alt="" />
              <img
                className="category-img2 category-img2a"
                src={mobileRamen2}
                alt=""
              />
            </div>
          </Link>
          <Link to="/thecult/menu#noodlesList">
            <div className="category-img">
              <img className="category-img1" src={mobileNoodles1} alt="" />
              <img
                className="category-img2 category-img2b"
                src={mobileNoodles2}
                alt=""
              />
            </div>
          </Link>
          <Link to="/thecult/menu#startersList">
            <div className="category-img">
              <img className="category-img1" src={mobileStarters1} alt="" />
              <img
                className="category-img2 category-img2a"
                src={mobileStarters2}
                alt=""
              />
            </div>
          </Link>
          <Link to="/thecult/menu#dessertsList">
            <div className="category-img">
              <img className="category-img1" src={mobileDesserts1} alt="" />
              <img
                className="category-img2 category-img2b"
                src={mobileDesserts2}
                alt=""
              />
            </div>
          </Link>
        </div>
        <button
          className="Rect-button viewTheMenu-button"
          onClick={navigateToMenu}
        >
          VIEW THE MENU
        </button>
      </div>
    </div>
  );
};

export default ViewMenu;
