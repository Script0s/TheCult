import React, { useState } from "react";
import CartIcon from "./IconCart";
import Sidebar from "./SideBar";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false); // État initial de la barre latérale

  const openSidebar = () => {
    setIsOpen(true); // Ouvrez la barre latérale en définissant isOpen à true
  };

  const closeSidebar = () => {
    setIsOpen(false); // Fermez la barre latérale en définissant isOpen à false
  };

  return (
    <div>
      {/* Passez openSidebar comme prop à CartIcon */}
      <CartIcon openSidebar={openSidebar} />

      {/* Passez isOpen et closeSidebar comme props à Sidebar */}
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />

      {/* Reste du contenu de votre application */}
    </div>
  );
};

export default Cart;
