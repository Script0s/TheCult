import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Chargez l'état initial du panier depuis LocalStorage au démarrage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Enregistrez le panier mis à jour dans LocalStorage
    } else {
      const newItem = { ...item, quantity: 1 };
      const newCartItems = [...cartItems, newItem];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems)); // Enregistrez le panier mis à jour dans LocalStorage
    }
  };

  // Fonction pour supprimer un article du panier
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Enregistrez le panier mis à jour dans LocalStorage
  };

  // Fonction pour incrémenter la quantité d'un article dans le panier
  const incrementQuantity = (item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.indexOf(item);

    if (index !== -1) {
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Enregistrez le panier mis à jour dans LocalStorage
    }
  };

  // Fonction pour décrémenter la quantité d'un article dans le panier
  const decrementQuantity = (item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.indexOf(item);

    if (index !== -1) {
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Enregistrez le panier mis à jour dans LocalStorage
      } else {
        removeFromCart(item); // Supprime entièrement le plat si la quantité est de 1
      }
    }
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const calculateMinimumOrder = () => {
    return cartItemCount < 3;
  };

  const calculateSubtotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };
  // Fonction pour réinitialiser le panier
  const resetCart = () => {
    setCartItems([]); // Réinitialisez le panier en vidant le tableau des articles
    localStorage.removeItem("cartItems"); // Supprime également le panier de LocalStorage
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        cartItemCount,
        calculateMinimumOrder,
        calculateSubtotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
