import React, { useEffect, useState } from 'react'

export const Populate = () => {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await fetch(`https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json`);
                console.log(response);   
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    },[]);
  return (
    <div>Populate</div>
  )
}
