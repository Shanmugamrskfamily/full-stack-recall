import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    console.log('Products:', products);

    return (
        <div>
            <h1>All Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {products.map(product => (
                        <div key={product.id}>
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>Rs.{product.price}</p>
                            <button onClick={() => addToCart(product)}>Buy</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
