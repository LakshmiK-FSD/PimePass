import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "../useFetcher";
import ClassSeat from "../ClassSeat/ClassSeat";
import screen from "../assets/screen.png";
import style from "./Seating.module.css";
import { useEffect, useState } from "react";

function Seating() {
  const { theatnam, tmid } = useParams();
  const [parentData, setParen] = useState([]);
  const navi = useNavigate();
 const arr = parentData.filter((item,index)=>parentData.indexOf(item)===index)
  function senData(arr) {
    setParen(prev => [...prev, ...arr]); 
  }
 
  const [data, error] = useFetcher(`http://localhost:5000/${theatnam}`);
  if (error) return <div>Unable to load</div>;
  if (!data) return <div>Loading...</div>;

  const timeData = data.map(e => e.showtimes.find(en => en.timeId == tmid));
  if (!timeData) return <div>Loading...</div>;

  const seatsT = timeData.map(e => e.seats || []);
  if (!seatsT) return <div>Seats Loading...</div>;

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
     <div onClick={()=>navi("/bookdetail")} className={style.booking}>
      <p>BookNow</p>
     </div>

      <div>
        <h4>sellected seats:{arr.length}</h4>
        {/* <h3>Collected from children:</h3> */}
        <pre>{JSON.stringify(arr)}</pre> 
      </div>
    </div>
  );
}

export default Seating;
