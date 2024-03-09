import React, { useEffect, useState } from 'react'

export const Map_1 = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const value = await response.json();
                setData(value);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                
            }
        };
    
        fetchData();
    }, []);
    
  return (
    <div>
        <h1>MAP</h1>
        <div className='main'>
            { loading?(<p>Loading...</p>):(data.map(data=>(
            <div className='container' key={data.id}>
                <p>Product Title: {data.title}</p>
                <p>Product Price: ${data.price}</p>
                <p>Product Category: {data.category}</p>
            </div>)))}
        </div>
    </div>
  )
}
