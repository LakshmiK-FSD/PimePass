import { useNavigate } from "react-router-dom";
import useFetcher from "@hooks/useFetcher";
 import { CircleX } from 'lucide-react';
 import { MapPinCheck } from 'lucide-react';
function TheatersList(props) {
  const api = `http://localhost:8080/users/theater/${props.theaterId}`;
  const [data, error] = useFetcher(api);
  const naviga = useNavigate();
  
  function daysAdd(add){
    const now = new Date();
    now.setDate(now.getDate()+Number(add));
   return {totalDay: now.toLocaleDateString('en-IN', { dateStyle: 'full' }), year: now.getFullYear()}
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return (
      <div>
        <p>   </p>
      </div>
    );
  }

  return (
    <div className="showtime">
       <img className="theatbgimg" src={data.theaterimg} alt="" />
      <div className="theatdet">
          <div className="maintheat" key={data.theatid}>
            <div className="theatdetail">
                <div className="namtheat">
              <h3>{data.theaterName}</h3>
              <p className="landmm">
                <MapPinCheck color="white" size={20}/>
                {data.theaterAddress.map((e, addrIdx) => (
                  <p key={addrIdx}>{e}</p>
                ))}
              </p>
                <p>
               <CircleX color="white" size={17}/> <h4>Cancellation</h4>
                <div className="roundCan">{data.cancelation}</div>
              </p>
              </div>
            </div>

            <div className="timetheat">
              <div className="movtheat">

              {/* <h5>{props.movnam}</h5>
              <h6>Dates Available</h6> */}
              </div>
              {data.dates.map((e, timeIdx) => (
                // <div
                //   key={timeIdx}
                //   className="timebutton"
                //   onClick={() =>
                //     naviga(`/seating/${props.theaterId}/${e.dateId}/${props.movnam}/${props.movId}`)
                //   }
                // >
                //   {e.date}
                // </div>
                <div 
                  key={timeIdx+10}
                  className="timebutton"
                  onClick={() =>
                    naviga(`/check/${props.movId}/${data.theatid}/${e.dateId}`,{state:{img:data.theaterimg}})
                  }
                >
                     <div className="day">
                                                  
                            
                            
                            
                       <p>{daysAdd(timeIdx + 1).totalDay.split(",")[0].trim().slice(0, 3)}</p>
                        <h6>{String(timeIdx + 1).padStart(2, "0")}</h6>
                         <div className="btnrow"> <h4>{daysAdd(timeIdx + 1).totalDay.split(",")[1].trim().split(" ")[1].slice(0, 3)}</h4>
                         <h4>{String(daysAdd(timeIdx + 1).year).slice(-2)}</h4>
                         </div>
                      </div>        
                </div>
              ))}
            </div>
          </div>
       
      </div>

    </div>
  );
}

export default TheatersList;
