import React from "react";
import { useCart } from "../ShopComponents/CartContext";

const MealCard = ({ data }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div className="mealCard">
      <div className="meal-img">
        <img
          className="image drawingImageUrl"
          src={data.drawingImageUrl}
          alt=""
        />
        <img
          className="image desktopImageUrl"
          src={data.desktopImageUrl}
          alt=""
        />
      </div>
      <div className="mealCard-info">
        <h2 className="title" translate="no">
          {data.title}
        </h2>
        <p className="info">{data.description}</p>
        <button
          className="Rect-buttonMeal"
          translate="no"
          onClick={handleAddToCart}
        >
          {`€${data.price} - ADD TO BAG`}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
