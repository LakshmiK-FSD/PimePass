import style from "./Theaters.module.css"
import { useParams } from "react-router-dom";
import TheatersList from "../TheatersList";
import useFetcher from "../useFetcher";

function Theaters() {
  const { id } = useParams();

const[dataa,error]=useFetcher(`http://localhost:5000/movies/${id}`);
    if(error){
        return(<>
        <p>{error}</p>
        </>)
    }
      if(!dataa){
        return(<>
        <p>loading....</p>
        </>)
    }
  const datas = (
    <>
      {dataa.theaterIds.map((data) => (
        <TheatersList key={data} theaterId={data}/>
      ))}
    </>
  );

  return (
    <div className={style.ovie}><div>
      <img className={style.image} src={dataa.img} alt="" />
      </div><div className={style.side}>
      <div className={style.theaters}>
      {datas}</div>
     </div>
    </div>
  );
}

export default Theaters;
