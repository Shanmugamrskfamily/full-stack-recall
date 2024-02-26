import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]); 
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const updateCartItem = (productId, price, newQty) => {
        const updatedCart = cart.map((item) => {
            if (item.id === productId) {
                if (newQty < 1) {
                    
                    return null;
                }
    
                return { ...item, quantity: newQty, price: newQty * price }; 
            }
            return item;
        }).filter(Boolean);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
