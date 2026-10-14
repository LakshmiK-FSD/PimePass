import { useEffect, useState } from "react";
import useFetcher from "@hooks/useFetcher";
import style from "./ClassSeat.module.css";
function ClassSeat({sendFn2, sendFun, classs }) {
  const [seatts, setSeats] = useState({});
  const [stsIndex, setSts] = useState({});
  const [data, error] = useFetcher(`http://localhost:8080/users/viewclass/${classs}`);
  useEffect(()=>{
          sendFun(Object.entries(seatts));
          sendFn2(Object.entries(stsIndex));
        }
,[seatts,stsIndex])
  if (error) return <div>Unable to load</div>;
  if (!data) return <div>Loading...</div>;

  function togglers(row, coloum,index) {
    const key = `${row}${coloum}`;
    setSeats(prev => ({ ...prev, [key]:!prev[key] }));
    setSts(prev=>({...prev,[index]:!prev[index]}))
  
  }
  //  const seatar = data.map((e, rowIndex) => (
  //   <div key={`rowout-${rowIndex}`} className={style.rrowf}></div>
  const seatCreat = data.seats;
  const seatar = seatCreat.map((e, rowIndex) => (
    <div key={`rowout-${rowIndex}`} className={style.rrowf}>
      {e.clrow.map((e2, seatIndex) => {
        const key = `${e2.rowId}${e2.number}`;
        const isSelected = seatts[key];
        const bookedSeat = (e2.status === "AVAILABLE" )?true:false;
        return (
          <div key={`rowin-${seatIndex}`}
            onClick={() => togglers(e2.rowId, e2.number,e2.setid)}
            className={(bookedSeat)?`${isSelected ?style.seatselect : style.seat}`:`${style.booked}`} >
            {e2.rowId}{e2.number}
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className={style.classs}>
      {seatar}
    </div>
  );
}

export default ClassSeat;
