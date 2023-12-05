import React from "react";

const IngredientCard = ({ data }) => {
  return (
    <div className="ingredient-card">
      <h2 className="title-card">{data.title}</h2>
      <p className="info-card">{data.description}</p>
    </div>
  );
};

export default IngredientCard;
