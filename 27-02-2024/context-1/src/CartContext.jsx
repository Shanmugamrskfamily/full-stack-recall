import { createContext, useState } from "react";


const CartContext=createContext();

const CartProvider=({children})=>{

    const[cart,setCart]=useState([]);

    const addToCart=(product)=>{
        setCart([cart,...product]);
    }

    const removeCart=(productID)=>{
        const updatedCart=cart.filter((item)=>item.id!==productID);
        setCart(updatedCart);
    }

    const updateCartItem=(productId,newQty)=>{
        const updatedCart=cart.map((item)=>{
            if(item.id===productId){
                return({...item,quntity:newQty});
            }
            return item;
        });
        setCart(updatedCart);
    }

return(
    <CartContext.Provider value={{cart, addToCart, removeCart,updateCartItem}}>
        {children}
    </CartContext.Provider>
)
}