import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="title1-card title-card">{data.title}</h1>
        <h1 className="title2-card title-card">{data.subtitle}</h1>
        <p className="info-card">{data.description}</p>
      </div>
      <img
        src={data.mobileImageUrl}
        alt={data.title}
        className="card-image-mobile"
      />
      <img
        src={data.desktopImageUrl}
        alt={data.title}
        className="card-image-desktop"
      />
    </div>
  );
};

export default Card;
