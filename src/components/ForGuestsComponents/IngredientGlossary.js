import React from "react";
import deidara from "../../img/ForGuestsPage/IngredientGlossary/Deidara.svg";
import itachi from "../../img/ForGuestsPage/IngredientGlossary/Itachi.svg";
import mountainMobile from "../../img/ForGuestsPage/IngredientGlossary/MountainMobile.svg";
import DesktopMountain from "../../img/ForGuestsPage/IngredientGlossary/DesktopMountain.svg";

const IngredientGlossary = () => {
  return (
    <div className="ingredientGlossary-container">
      <div className="infos-container">
        <h1 className="title-ingredientGlossary">INGREDIENT GLOSSARY</h1>
        <p className="info1 info">
          The chef and waiters don’t have to be the only ones who can decipher
          the ingredients on the menu. Our glossary is a complete collection of
          ingredients used in the kitchen.
        </p>
        <p className="info2 info">
          Don’t be afraid to try, pleasant gastronomic discoveries are waiting
          for you!
        </p>
      </div>
      <div className="glossaryImg-container">
        <img className="deidara" src={deidara} alt="" />
        <img className="itachi" src={itachi} alt="" />
        <img className="mountainMobile" src={mountainMobile} alt="" />
        <img className="DesktopMountain" src={DesktopMountain} alt="" />
      </div>
    </div>
  );
};

export default IngredientGlossary;
