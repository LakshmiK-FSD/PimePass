import { useEffect, useState } from 'react';
import MoviesCard from '@pages/MoviesCard';
import EmptyCard from '@pages/Empty/EmptyCard';
function Movies() {
    const [Movies,setMovie]= useState([]);
    const [error,setError]= useState([]);
useEffect(()=>{fetch("http://localhost:8080/movies")
    .then((data)=>data.json())
    .then((response)=>
       setMovie(response))
    .catch((error)=>{
      setError(error)
      console.error("Error fetching data:", error)})},[])
if(error){
  console.error("Error fetching data:", error)
}
 const movieCard =Movies.map((res)=> <MoviesCard id={res.id} img={res.img} movename={res.movename} description={res.description} />)
if(!movieCard){
  return(
    <div>
      <EmptyCard/>   
    </div>
  );
}
    return(
    <div className='cardalign'> 
      {movieCard.length == 0 && <EmptyCard />}
      {movieCard}
    </div>
    );
    
}
export default Movies;