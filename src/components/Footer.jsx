import React from "react";
import narutoBlack from "../img/HomePage/Footer/NarutoBlack.svg";
import narutoPink from "../img/HomePage/Footer/NarutoPink.svg";
import Logo from "../img/HomePage/Logo/DesktopTheCult.svg";

const Footer = () => {
  return (
    <div id="contactFooter" className="footer-container">
      <div className="titleInfos">
        <img className="desktopLogo" src={Logo} alt="" />
        <div className="adress-container">
          <h2 className="title-footer">ADDRESS</h2>
          <p className="adress-infos1 adress-infos">113 Grafton Street</p>
          <p className="adress-infos2 adress-infos">
            Dublin, D02 W522, Ireland
          </p>
        </div>
        <div className="hours-container">
          <h2 className="title-footer">OPENING HOURS</h2>
          <p className="hours-infos2 hours-infos">
            Monday - Thursday 11:30 am - 10:30 pm
          </p>
          <p className="hours-infos3 hours-infos">
            Friday & Sunday 11:30 am - 01 am
          </p>
        </div>
        <div className="contactUs-container">
          <h2 className="title-footer">CONTACT US</h2>
          <p className="contactUs-phone">+353 1 962 9514</p>
          <p className="contactUs-mail">hello@thecultdublin.com</p>
        </div>
        <div className="naruto-container">
          <img className="narutoBlack" src={narutoBlack} alt="" />
          <img className="narutoPink" src={narutoPink} alt="" />
        </div>
      </div>
      <div className="personalProject">
        <p>
          · A project created as part of training · All materials are taken from
          public sources and belong to their owners · Special thanks to Julianna
          Beda ·
        </p>
        <div className="link">
          <p>· Developed by Alexandre Ghazarian ·</p>· 
          <a href="https://www.linkedin.com/in/alexandre-ghazarian-5341b9249" target="_blank" rel="noopener noreferrer"> Linkedin</a> ·
        </div>
      </div>
    </div>
  );
};

export default Footer;
