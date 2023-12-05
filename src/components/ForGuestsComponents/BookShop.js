import React from "react";
import jujutsuKaisen from "../../img/ForGuestsPage/BookShop/JujutsuKaisen.svg";
import useNavigationButton from "../useNavigationButton";

const BookShop = () => {
  const navigateToBookings = useNavigationButton("/bookings");
  const navigateToMenu = useNavigationButton("/menu");
  return (
    <div className="BookShop-container">
      <h2>
        BOOK YOUR LUCKY TABLE AT THE CULT WITH A SIMPLE ONLINE FORM OR ORDER
        DELIVERY
      </h2>
      <div className="button-container">
        <button
          className="Rect-button bookin-button"
          onClick={navigateToBookings}
        >
          BOOK IN
        </button>
        <button className="Rect-button shopnow-button" onClick={navigateToMenu}>
          SHOP NOW
        </button>
      </div>
      <img className="jujutsuKaisen" src={jujutsuKaisen} alt="" />
    </div>
  );
};

export default BookShop;
