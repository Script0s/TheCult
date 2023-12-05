import React from "react";
import shoppingCart from "../../img/Shop/ShoppingCart.svg";
import { useCart } from "../ShopComponents/CartContext";

const CartIcon = ({ openSidebar }) => {
  // Ajoutez la prop openSidebar
  const { cartItemCount } = useCart();

  return (
    <div
      className={`cart-icon-container ${cartItemCount > 0 ? "visible" : ""}`}
      onClick={openSidebar} // Appelez openSidebar lorsque l'icône du panier est cliquée
    >
      <div className="cart-icon">
        <div className="cart-icon-counter">{cartItemCount}</div>
        <img src={shoppingCart} alt="Cart Icon" />
      </div>
    </div>
  );
};

export default CartIcon;
