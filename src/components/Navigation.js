import React, { useState, useRef, useEffect } from "react";
import theCult from "../img/HomePage/Logo/TheCult.svg";
import menuMobile from "../img/HomePage/Mobile/MenuMobile.svg";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [btnState, setBtnState] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const menuIcon = menuRef.current;
    const overlay = overlayRef.current;

    if (menuIcon && overlay) {
      const rect = menuIcon.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      overlay.style.transformOrigin = `${centerX}px ${centerY}px`;
      overlay.style.setProperty("--x", `${centerX}px`);
      overlay.style.setProperty("--y", `${centerY}px`);
    }
  }, [btnState]);

  useEffect(() => {
    setBtnState(false);
  }, [location.pathname, location.hash]);

  const handleClick = () => {
    setBtnState((prevBtnState) => !prevBtnState);
  };

  const toggleClassCheck = btnState ? " active" : "";

  return (
    <div className="navigation">
      <div className="nav-left">
        <Link to="/menu" className={`menu navLink${toggleClassCheck}`}>
          MENU
        </Link>
        <Link to="/bookings" className={`booking navLink${toggleClassCheck}`}>
          BOOKING
        </Link>
        <Link
          to="/forguests"
          className={`forGuests navLink${toggleClassCheck}`}
        >
          FOR GUESTS
        </Link>
      </div>
      <div className="nav-center">
        <Link to="/">
          <img className="theCult" src={theCult} alt="" />
        </Link>
        <div className="menu-button">
          <i
            ref={menuRef}
            className={`fa-solid fa-bars menuToggle${toggleClassCheck}`}
            onClick={handleClick}
          ></i>
          <div
            ref={overlayRef}
            style={{
              backgroundImage: `url(${menuMobile})`,
            }}
            className={`overlay${toggleClassCheck}`}
          />
        </div>
      </div>
      <div className="nav-right">
        <Link to="/ourstory" className={`ourStory navLink${toggleClassCheck}`}>
          OUR STORY
        </Link>
        <Link
          to="/#contactFooter"
          className={`contactUs navLink${toggleClassCheck}`}
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
