import { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';
function Movies() {
    const [Movies,setMovie]= useState([]);
useEffect(()=>{fetch("http://localhost:5000/movies")
    .then((data)=>data.json())
    .then((response)=>
      
       setMovie(response))
    .catch((error)=>console.error("Error fetching data:", error))},[])
  const movieCard =Movies.map((res)=> <MoviesCard id={res.id} img={res.img} movename={res.movename} description={res.description}/>)
    return(
    <div className='cardalign'> 
      {movieCard}
    </div>
    );
    
}
export default Movies;