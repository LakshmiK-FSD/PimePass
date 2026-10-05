import style from "./Theaters.module.css"
import { useLocation, useParams } from "react-router-dom";
import TheatersList from "@pages/TheatersList";
import useFetcher from "@hooks/useFetcher";

function Theaters() {
  const { id } = useParams();
  const locat = useLocation();
  const name = locat.state?.name;
const[dataa,error]=useFetcher(`http://localhost:8080/movies/${id}`);
const[dates,error2]=useFetcher(`http://localhost:8080/theatdate`);
    if(error || error2 ){
        return(<>
        <p>{error.message}</p>
        <p>{error2.message}</p>
        </>)
    }
      if(!dataa){
        return(<>
        <p>loading....</p>
        </>)
    }
     if(!dates){
        return(<>
        <p>loading....</p>
        </>)
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
