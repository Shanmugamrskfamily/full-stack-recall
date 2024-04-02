import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[movies,setMovies]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      try {
        let res=await fetch('https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json');
        let data=await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[]);

  console.log(movies);
  return (
    <div>
      <h1>Movies Data</h1>
      {movies.map((movie,index)=>(
        <div key={index}>
          <p>{movie.title}</p>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  )
}

export default App
