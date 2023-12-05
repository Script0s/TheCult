import React, { useRef } from "react";
import ninjaLeft from "../../img/MenuPage/NinjaLeft.svg";
import ninjaRight from "../../img/MenuPage/NinjaRight.svg";
import stoneBackground from "../../img/MenuPage/StoneBackground.svg";

const DeliverOrder = () => {
  const stoneBackgroundRef = useRef(null);
  const animationFrameId = useRef(null);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const translateX = x * 0.1;
    const translateY = y * 0.1;

    cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      if (stoneBackgroundRef.current) {
        stoneBackgroundRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    });
  };

  return (
    <div className="deliverOrder-container" onMouseMove={handleMouseMove}>
      <div className="deliverOrder-img">
        <img
          ref={stoneBackgroundRef}
          className="stoneBackground"
          src={stoneBackground}
          alt=""
        />
        <img className="ninja-left" src={ninjaLeft} alt="" />
        <img className="ninja-right" src={ninjaRight} alt="" />
      </div>
      <div className="deliverOrder-infos">
        <h2>
          WE'LL DELIVER YOUR ORDER QUICKLY AND
          <br />
          DISCREETLY, LIKE THE REAL NINJAS OF HIDDEN
          <br />
          VILLAGE OR YOU CAN PICK UP READY-MADE
          <br />
          MEALS FROM THE RESTAURANT
        </h2>
        <p className="info">
          Free delivery for orders from 65 euros
          <br />
          and free parking for restaurant guests
        </p>
      </div>
    </div>
  );
};

export default DeliverOrder;
