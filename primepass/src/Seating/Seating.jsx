import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "../useFetcher";
import ClassSeat from "../ClassSeat/ClassSeat";
import screen from "../assets/screen.png";
import style from "./Seating.module.css";
import {useEffect, useState } from "react";

function Seating() {
  const { movid,theatid,dateid,timeid} = useParams();
    const [data, error] = useFetcher(`http://localhost:8080/time/${timeid}`);
    const [data2, error2] = useFetcher(`http://localhost:8080/movies/${movid}`);
    const [data3, error3] = useFetcher(`http://localhost:8080/theater/${theatid}`);
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

  if (error2) 
    {
    return <div>unable to load</div>
    }
  if (!data || !data2 || !data3 ) 
    {
    return <div>Loading...</div>
    }

  // const timeData = data.map(e => e.showtimes.find(en => en.timeId == tmid));
  //const time= (timeData.map((e)=>e.showTime)).join();
//=========>>>>>>>   const theatdet =[theatnam,tmid,time]<<<<<<=========
   //need to change  uper..
  // if (!timeData) return <div>Loading...</div>;
  // const seatsT = data.timeData.map(e => e.showtimes||[]);
  const seatsT = data.viewcls.map(e => e.clsid);
  //if (!seatsT) return <div>Seats Loading...</div>;
  const btnsh = (arr.length!==0)
  {/*  */}
  return (
                                         <div className={style.maintheat}>
                                          <div className={style.centseat}>
                                          {/* <h2>{theatnam}</h2> */}
                                          <h2>{data3.theaterName}</h2>
        {/* {timeData.map((e, idx) => (
          <h3 key={idx}>{e.showTime}</h3>
        ))} */}
         {data.viewcls.map((e, idx) => (
          <h3 key={idx}>{e.clsName}</h3>
        ))}
                                          <div className={style.theatcent}>
                                          <div className="crow">
                                           
           {/* {seatsT.map((seatGroup, idx) =>  //array enter
              seatGroup.map((seat, seatIdx) =>  */}
            {seatsT.map((clsid, idx) =>
                (<div key={`${clsid}`}>
                  {/* <h4>{seat}</h4> */}
                  <ClassSeat sendFun={senData} classs={clsid} />
                </div>
              )
            )}
          </div>
          <div className={style.screimg}>
            <img src={screen} alt="screen" />
          </div>
        </div>
      </div>
      {/* seat open booking */}
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
