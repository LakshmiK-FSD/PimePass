import { useParams } from "react-router-dom";
import useFetcher from "../useFetcher";
import ClassSeat from "../ClassSeat/ClassSeat";
import screen from "../assets/screen.png"
import style from "./Seating.module.css"
function Seating() {
  const { theatnam, tmid } = useParams();
  const [data, error] = useFetcher(`http://localhost:5000/${theatnam}`);

  if (error) {
    return <div>Unable to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const timeData = data.map((e) =>
    e.showtimes.find((en) => en.timeId == tmid)
  );

  if (!timeData) {
    return <div>Loading...</div>;
  }

  const seatsT = timeData.map((e) => e.seats || []);

  if (!seatsT) {
    return <div>Seats Loading...</div>;
  }

  return (
    <div className={style.maintheat}>
      <div className={style.centseat}>
        <h2>{theatnam}</h2>
           {timeData.map((e, idx) => (
        <h3 key={idx}>{e.showTime}</h3>
      ))}
        <div className={style.theatcent}>
        <div className="crow">
          {seatsT.map((seatGroup, idx) =>(
            seatGroup.map((seat, seatIdx) => (<div><h4>{seat}</h4>
              <ClassSeat key={`${idx}-${seatIdx}`} classs={seat} /></div>
            )))
          )}
        </div>
      
      <div className={style.screimg}><img src={screen} alt="" /></div>
    </div></div></div>
  );
}

export default Seating;
