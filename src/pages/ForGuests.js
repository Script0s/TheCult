import React from "react";
import Navigation from "../components/Navigation";
import Shop from "../components/ShopComponents/Shop";
import IntroForGuests from "../components/ForGuestsComponents/IntroForGuests";
import Footer from "../components/Footer";
import OurRules from "../components/ForGuestsComponents/OurRules";
import CardList from "../components/ForGuestsComponents/CardList";
import GiftVoucher from "../components/ForGuestsComponents/GiftVoucher";
import IngredientGlossary from "../components/ForGuestsComponents/IngredientGlossary";
import BookShop from "../components/ForGuestsComponents/BookShop";
import IngredientCardList from "../components/ForGuestsComponents/IngredientCardList";

const ForGuests = () => {
  return (
    <div className="forGuests-container">
      <Navigation />
      <Shop />
      <IntroForGuests />
      <OurRules />
      <CardList />
      <GiftVoucher />
      <IngredientGlossary />
      <IngredientCardList />
      <BookShop />
      <Footer />
    </div>
  );
};

export default ForGuests;
