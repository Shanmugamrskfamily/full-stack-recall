import React, { useEffect, useState } from 'react';

export const Reduce_1 = () => {
    const [breeds, setBreeds] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
                if (!response.ok) {
                    throw new Error('Error on Fetching Data!');
                }
                const data = await response.json();
                setBreeds(data.message);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    console.log(breeds);
    return (
        <div>
            <h1>Dog Breeds</h1>
            <div className='main-1'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    Object.entries(breeds).map(([category, breedList]) => (
                        <div className='container-1' key={category}>
                            <h2>{category.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ')}</h2>
                            <ul>
                                {breedList.map((breed) => (
                                    <li key={breed}>{breed.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ')}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
