import {  useLocation, useNavigate, useParams } from "react-router-dom";
import useFetcher from "@hooks/useFetcher";
import style from "./Timeselec.module.css"
function Timeselec(){
    const {mov,theat,date}=useParams();
    const locat = useLocation();
    const naviga = useNavigate();
    const imge = locat.state?.img;
    const [data,error]=useFetcher(`http://localhost:8080/users/dates/${date}`)
    const [data2,error2]=useFetcher(`http://localhost:8080/users/movies/${mov}`)
    const [data3,error3]=useFetcher(`http://localhost:8080/users/theater/${theat}`)
  // Error state
  if (error && error2 && error3) {
    return <p>{error.message}</p>;
  }

  if (!data || !data2 || !data3) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
    return(
        <div className={style.main}>
          <img className={style.imge} src={imge} alt="" />
          <div className={style.top}>
            <div className="row">
              <div className={style.round}><img className={style.imge2} src={imge} alt="" /></div><div className={style.hell}><h3>{data3.theaterName}</h3>
              <p>{data3.theaterAddress[0]}</p>
              </div>
           
          </div></div>
          <div className={style.whit}>
            <div> <h3 className={style.lineh}>{data2.movename} </h3>
            <p className={style.shows}>Shows</p>
            </div>
            
            <div className={style.row}>{data.shows.map((e)=><p
             onClick={() =>
                    naviga(`/seating/${mov}/${theat}/${date}/${e.timeId}`)
                  }
            >{e.time}</p>)}</div>
            
          </div>
           
        </div>
    );
}
export default Timeselec;