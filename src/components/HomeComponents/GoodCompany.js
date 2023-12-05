import React from "react";
import mobileDemonSlayer from "../../img/HomePage/GoodCompany/MobileDemonSlayer.svg";
import desktopDemonSlayer from "../../img/HomePage/GoodCompany/DesktopDemonSlayer.svg";
import knife from "../../img/HomePage/GoodCompany/Knife.svg";
import useNavigationButton from "../useNavigationButton";

const GoodCompany = () => {
  const navigateToBookings = useNavigationButton("/bookings");
  return (
    <div className="gatherIn-goodCompany">
      <div className="theCult-info-container">
        <img className="knife" src={knife} alt="" />
        <div className="theCult-info">
          <h1>
            GATHER IN
            <br />
            GOOD COMPANY
          </h1>
          <p className="theCult-description">
            THE CULT is a meeting place for foodies and otaku (and everyone
            else). We've taken the best of anime culture and modern Japanese
            cuisine and blended them together. Drop past for a party, stay for a
            bite or grab a goodies on the fly.
          </p>
          <p className="theRule">
            Our only rule is: come as you are and enjoy as you please. We look
            forward to seeing you!
          </p>
          <button
            className="Rect-button bookYourself"
            onClick={navigateToBookings}
          >
            BOOK YOURSELF IN
          </button>
        </div>
      </div>
      <img className="mobileDemonSlayer" src={mobileDemonSlayer} alt="" />
      <img className="desktopDemonSlayer" src={desktopDemonSlayer} alt="" />
    </div>
  );
};

export default GoodCompany;
