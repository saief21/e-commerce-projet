import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  // Retirer un produit du panier
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  // Modifier la quantité d'un produit dans le panier
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
