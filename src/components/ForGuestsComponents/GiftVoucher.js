import React, { useEffect, useState, useRef } from "react";
import giftVoucherMobile from "../../img/ForGuestsPage/GiftVoucher/giftVoucherMobile.svg";
import DesktopHisoka from "../../img/ForGuestsPage/GiftVoucher/DesktopHisoka.svg";
import DesktopPinkImg from "../../img/ForGuestsPage/GiftVoucher/DesktopPinkImg.svg";
import useNavigationButton from "../useNavigationButton";

const GiftVoucher = () => {
  const navigateToNone = useNavigationButton("/none");
  const componentRef = useRef(null);
  const [hisokaStyle, setHisokaTransform] = useState({
    transform: `translateX(-50vw)`, // Initial translateX value for Hisoka
  });

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const offset = componentRef.current.offsetTop;
          const scrollY = window.scrollY;
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollPosition = scrollY - offset + window.innerHeight; // Position de défilement relative au composant
          let scrollPercentage = Math.max(0, scrollPosition) / scrollHeight;

          // Assurez-vous que le pourcentage ne dépasse pas 1
          scrollPercentage = Math.min(scrollPercentage, 1);

          const moveValueHisoka = Math.max(
            -50,
            Math.min(-50 + 600 * scrollPercentage, 2.5)
          );
          setHisokaTransform({
            transform: `translateX(${moveValueHisoka}vw)`,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="GiftVoucher-container" ref={componentRef}>
      <div className="infos-container">
        <h1 className="title-GiftVoucher">
          THE CULT
          <br />
          GIFT VOUCHER
        </h1>
        <p className="info1 info">
          Need a gift voucher? Gift an unforgettable experience to that special
          someone with a THE CULT voucher. The gift voucher can be spent in
          installments until all funds are exhausted!
        </p>
        <p className="info2 info">
          The gift voucher is valid only for visits to the restaurant and does
          not apply to attendance at THE CULT themed events.
        </p>
        <button className="Rect-button" onClick={navigateToNone}>
          GET VOUCHER
        </button>
      </div>
      <img className="giftVoucherMobile" src={giftVoucherMobile} alt="" />
      <img
        style={hisokaStyle}
        className="DesktopHisoka"
        src={DesktopHisoka}
        alt=""
      />
      <img className="DesktopPinkImg" src={DesktopPinkImg} alt="" />
    </div>
  );
};

export default GiftVoucher;
