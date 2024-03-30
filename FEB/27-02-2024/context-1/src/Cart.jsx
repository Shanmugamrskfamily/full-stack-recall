import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { cart, removeFromCart, updateCartItem } = useContext(CartContext);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleUpdateCartItem = (productId, price, newQuantity) => {
        updateCartItem(productId,price, newQuantity);
    };

    return (
        <div>
            <h1>My Cart</h1>
            <div>
                {cart.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <div>
                            <button onClick={() => handleUpdateCartItem(product.id,product.price, product.quantity + 1)}>+</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => handleUpdateCartItem(product.id,product.price, product.quantity - 1)}>-</button>
                            <br />
                            <button onClick={() => handleRemoveFromCart(product.id)}>Remove Item</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
