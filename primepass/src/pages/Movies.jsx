import { useEffect, useState } from 'react';
import MoviesCard from '@pages/MoviesCard';
import { ThreeDot } from "react-loading-indicators";
import EmptyCard from '@pages/Empty/EmptyCard';
function Movies({result}) {
    const token = localStorage.getItem("token");
    const [Movies,setMovie]= useState([]);
    const [error,setError]= useState([]);
useEffect(()=>{fetch("http://localhost:8080/users/movies", {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
    .then((data)=>data.json())
    .then((response)=>
       setMovie(response))
    .catch((error)=>{
      setError(error)
      console.error("Error fetching data:", error)})},[])
if(error){
  console.error("Error fetching data:", error)
}
 const movieCard =(result==1)?Movies.map((res)=> <MoviesCard id={res.id} img={res.img} movename={res.movename} description={res.description} />):Movies.filter((e)=>e.id>7).map((res)=> <MoviesCard id={res.id} img={res.img} movename={res.movename} description={res.description} />);
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