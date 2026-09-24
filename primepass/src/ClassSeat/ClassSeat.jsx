import { useEffect, useState } from "react";
import useFetcher from "../useFetcher";
import style from "./ClassSeat.module.css";
function ClassSeat({ sendFun, classs }) {
  const [seatArr,setArr] = useState([])
  const [seatts, setSeats] = useState({});
  const [data, error] = useFetcher(`http://localhost:5000/${classs}`);
  useEffect(()=>{(console.log(seatts));
          setArr(Object.entries(seatts))
          sendFun(seatArr)
        }
,[seatts])

  if (error) return <div>Unable to load</div>;
  if (!data) return <div>Loading...</div>;

  function togglers(row, coloum) {
    const key = `${row}${coloum}`;
    setSeats(prev => ({ ...prev, [key]:!prev[key] }));
  }

  const seatar = data.map((e, rowIndex) => (
    <div key={`rowout-${rowIndex}`} className={style.rrowf}>
      {e.clrow.map((e2, seatIndex) => {
        const key = `${e2.row}${e2.number}`;
        const isSelected = seatts[key];
        return (
          <div
            key={`rowin-${seatIndex}`}
            onClick={() => togglers(e2.row, e2.number)}
            className={isSelected ? style.seat: style.seatselect}
          >
            {e2.row}{e2.number}
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
