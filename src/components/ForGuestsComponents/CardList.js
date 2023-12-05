import React from "react";
import Card from "../ForGuestsComponents/Card";
import { cardData } from "../ForGuestsComponents/CardData";

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((dataItem, index) => (
        <Card key={index} data={dataItem} />
      ))}
    </div>
  );
};

export default CardList;
