import React from "react";
import Navigation from "../components/Navigation";
import IntroMenu from "../components/MenuComponents/IntroMenu";
import Footer from "../components/Footer";
import DeliverOrder from "../components/MenuComponents/DeliverOrder";
import BreakfastsList from "../components/MenuComponents/BreakfastsList";
import StartersList from "../components/MenuComponents/StartersList";
import RamenList from "../components/MenuComponents/RamenList";
import NoodlesList from "../components/MenuComponents/NoodlesList";
import HotDishes from "../components/MenuComponents/HotDishes";
import Desserts from "../components/MenuComponents/Desserts";
import useAnchor from "../components/useAnchor";
import Shop from "../components/ShopComponents/Shop";

const Menu = () => {
  useAnchor();
  return (
    <div>
      <Navigation />
      <Shop />
      <IntroMenu />
      <BreakfastsList />
      <StartersList />
      <RamenList />
      <NoodlesList />
      <HotDishes />
      <Desserts />
      <DeliverOrder />
      <Footer />
    </div>
  );
};

export default Menu;
