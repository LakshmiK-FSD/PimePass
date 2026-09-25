import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "../useFetcher";
import ClassSeat from "../ClassSeat/ClassSeat";
import screen from "../assets/screen.png";
import style from "./Seating.module.css";
import {useEffect, useState } from "react";

function Seating() {
  const { theatnam, tmid,movnnam,movId} = useParams();
  
  const [parentData, setParen] = useState([]);
  const navi = useNavigate();
 const prr = parentData.reduce((acc,[stat,value])=>{(acc[stat]=value); return acc},{})
 const arr = Object.entries(prr).filter(([a,b])=>b).map(([a,b])=>a)
 useEffect(()=>{
  console.log(arr)
 })
  function senData(arr) {
    setParen(prev => [...prev, ...arr]); 
  }
 
  const [data, error] = useFetcher(`http://localhost:5000/${theatnam}`);
  if (error) return <div>Unable to load</div>;
  if (!data) return <div>Loading...</div>;

  const timeData = data.map(e => e.showtimes.find(en => en.timeId == tmid));
  const time= (timeData.map((e)=>e.showTime)).join();
   const theatdet =[theatnam,tmid,time]
  if (!timeData) return <div>Loading...</div>;

  const seatsT = timeData.map(e => e.seats || []);
  if (!seatsT) return <div>Seats Loading...</div>;
  const btnsh = (arr.length!==0)
  return (
    <div className={style.maintheat}>
      <div className={style.centseat}>
        <h2>{theatnam}</h2>
        {timeData.map((e, idx) => (
          <h3 key={idx}>{e.showTime}</h3>
        ))}
        <div className={style.theatcent}>
          <div className="crow">
            {seatsT.map((seatGroup, idx) =>
              seatGroup.map((seat, seatIdx) => (
                <div key={`${idx}-${seatIdx}`}>
                  <h4>{seat}</h4>
                  <ClassSeat sendFun={senData} classs={seat} />
                </div>
              ))
            )}
          </div>
          <div className={style.screimg}>
            <img src={screen} alt="screen" />
          </div>
        </div>
      </div>
    {btnsh && arr.length<=2 && <div className={style.riglef}>
            <div className={style.frst}>
              <h5>Movie:</h5><h3>{movnnam}</h3>
        <h5>Seats:</h5><h4>{arr.length}</h4>
        {/* <pre>{JSON.stringify(arr.sort((a,b)=>a-b))}</pre>  */}
      </div>
      <div onClick={()=>navi(`/bookdetail/${movId}`,{state:{arr,theatdet}})} className={style.booking}>
      <p>BookNow</p>
     </div>
      </div>}
    </div>
  );
}

export default Seating;
