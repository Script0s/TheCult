import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Crystals from "../components/HomeComponents/Crystals";
import GoodCompany from "../components/HomeComponents/GoodCompany";
import ViewMenu from "../components/HomeComponents/ViewMenu";
import DinnerAnimation from "../components/HomeComponents/DinnerAnimation";
import ChefTakeshi from "../components/HomeComponents/ChefTakeshi";
import Vacactioning from "../components/HomeComponents/Vacactioning";
import FormHomePage from "../components/HomeComponents/FormHomePage";
import Footer from "../components/Footer";
import LabelCardList from "../components/HomeComponents/LabelCardList";
import SwiperBlackWhite from "../components/SwiperBlackWhite";
import useAnchor from "../components/useAnchor";
import Shop from "../components/ShopComponents/Shop";

const Home = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Mettre à jour l'opacité à 1 après le montage du composant
    setOpacity(1);
  }, []); // Le tableau vide assure que cela ne s'exécute qu'une fois
  useAnchor();
  return (
    <div
      style={{ opacity: opacity, transition: "opacity ease-in-out 0.5s" }}
      className="HomePage-container"
    >
      <Navigation />
      <Shop />
      <Crystals />
      <GoodCompany />
      <ViewMenu />
      <LabelCardList />
      <DinnerAnimation />
      <ChefTakeshi />
      <Vacactioning />
      <SwiperBlackWhite />
      <FormHomePage />
      <Footer />
    </div>
  );
};

export default Home;
