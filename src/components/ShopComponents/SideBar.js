import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import IncrementButton from "../../img/Shop/IncrementButton.svg";
import DecrementButton from "../../img/Shop/DecrementButton.svg";
import RemoveButton from "../../img/Shop/RemoveButton.svg";
import FormDelivery from "./FormDelivery";

const Sidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    calculateMinimumOrder,
    calculateSubtotal,
  } = useCart();

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Utilisez useEffect pour détecter les changements dans cartItems
  useEffect(() => {
    if (cartItems.length === 0 && isOpen) {
      // Si le panier est vide et que la barre latérale est ouverte, fermez la barre latérale
      onClose();
    }
  }, [cartItems, isOpen, onClose]);

  //Fonction pour afficher le formulaire et masquer le bouton CHECKOUT
  const showForm = () => {
    setIsFormVisible(true);
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""} ${
        isFormVisible ? "form-visible" : ""
      }`}
    >
      <div className="sideBarContent">
        <div className="sidebar-header">
          <h2>YOUR ORDER</h2>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
        <div className="itemsAndFormContainer">
          <div className="items-container">
            <div className="order-items">
              {cartItems.map((item, index) => (
                <div key={index} className="order-item">
                  <h3>{item.titleSideBar}</h3>
                  <div className="quantity-controls">
                    <img
                      className="decrement-button"
                      onClick={() => decrementQuantity(item)}
                      src={DecrementButton}
                      alt=""
                    />
                    <span className="quantity">{item.quantity}</span>
                    <img
                      className="increment-button"
                      onClick={() => incrementQuantity(item)}
                      src={IncrementButton}
                      alt=""
                    />
                  </div>
                  <p className="price">
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                  <img
                    onClick={() => removeFromCart(item)}
                    className="remove-button"
                    src={RemoveButton}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="total-cart">
              {calculateMinimumOrder() && (
                <p className="MinQuantity">Minimum order quantity: 3</p>
              )}

              {calculateSubtotal() < 30 && (
                <p className="MinOrder">Minimum order: € 30</p>
              )}

              <p className="SubTotal">Subtotal: € {calculateSubtotal()}</p>
            </div>
          </div>
          {isFormVisible ? (
            <FormDelivery className="form-delivery" />
          ) : (
            <button className="Rect-button submit-sidebar" onClick={showForm}>
              CHECKOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
