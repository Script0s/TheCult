import React from "react";

const LabelCard = ({ data, className }) => {
  return (
    <div className={`labelCard labelCard${className}`}>
      <div className="label-img">
        <img src={data.mobileImageUrl} alt="" />
      </div>
      <div className="labelCard-info">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default LabelCard;
