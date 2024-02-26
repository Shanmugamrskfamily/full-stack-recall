import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const data = await response.json(); 
        setProducts(data);
      } catch (error) {
        console.error(`Error Occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>My Shopping</h1>
      <div>
        <h2>Products</h2>
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="product-container">
            {products.map(product => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <p>Product Price: ${product.price}</p>
                <div>
                  <button onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 })}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
