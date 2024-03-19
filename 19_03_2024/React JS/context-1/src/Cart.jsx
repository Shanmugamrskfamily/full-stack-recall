import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { items, qtyChange } = useContext(CartContext);

    return (
        <div style={{ margin: '30px', padding: '20px' }}>
            <h2>Cart</h2>
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => qtyChange('increment', item.id)} style={{ margin: '20px' }}>+</button>
                        <button onClick={() => qtyChange('decrement', item.id)}>-</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;
