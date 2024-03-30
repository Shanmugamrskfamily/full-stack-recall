import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const qtyChange = (action, id) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          if (action === "increment") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrement" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (action === "decrement" && item.quantity === 1) {
            return null; 
          }
        }
        return item;
      }).filter(Boolean) 
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, qtyChange }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
