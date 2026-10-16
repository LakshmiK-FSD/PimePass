import style from "./Theaters.module.css"
import { useLocation, useParams } from "react-router-dom";
import TheatersList from "@pages/TheatersList";
import useFetcher from "@hooks/useFetcher";
import { ThreeDot } from "react-loading-indicators";
function Theaters() {
  const { id } = useParams();
  const locat = useLocation();
  const name = locat.state?.name;
const[dataa,error]=useFetcher(`http://localhost:8080/users/movies/${id}`);
const[dates,error2]=useFetcher(`http://localhost:8080/users/theatdate`);
    if(error || error2 ){
        return(<>
        <p>{error.message}</p>
        <p>{error2.message}</p>
        </>)
    }
      if(!dataa){
         return(<div className="loading">
        <ThreeDot size="large" variant="bounce" size={30} color={"blue"} text="LOADING..."/>
        </div>)
    }
     if(!dates){
        return(<div className="loading">
        <ThreeDot size="large" variant="bounce" size={30} color={"blue"} text="LOADING..."/>
        </div>)
    }
    

  const datas = (
    <>
      {dataa.theaters.map((data) => (
        <TheatersList  movnam={dataa.movename} key={data.theatid} movId={id} theaterId={data.theatid}/>
      ))}
    </>
  );

  return (
    <div className={style.paren}>
      <div className={style.toprow}><h5>{dataa.movename}</h5>
      <p>Pick a theatre and one of its available dates.</p>
      </div>
    <div className={style.ovie}><div> 
      </div><div className={style.side}>
      <div className={style.theaters}>
      {datas}</div>
     </div>
    </div>
    </div>
  );
}

export default Theaters;
