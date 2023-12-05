import React from "react";
import labelMobile from "../../img/HomePage/Label/LabelTitleMobile.svg";
import labelDesktop from "../../img/HomePage/Label/LabelTitleDesktop.svg";
import LabelCard from "../HomeComponents/LabelCard";
import { LabelCardData } from "../HomeComponents/LabelCardData";

const LabelCardList = () => {
  return (
    <div className="label-card-list">
      <img className="labelMobile" src={labelMobile} alt="" />
      <img className="labelDesktop" src={labelDesktop} alt="" />
      <div className="labelCard-container">
        {LabelCardData.map((dataItem, index) => (
          <LabelCard
            key={index}
            data={dataItem}
            className={dataItem.title.split(" ")[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default LabelCardList;
