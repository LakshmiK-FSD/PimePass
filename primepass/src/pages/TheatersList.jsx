import { useNavigate } from "react-router-dom";
import useFetcher from "@hooks/useFetcher";
function TheatersList(props) {
  const api = `http://localhost:8080/theater/${props.theaterId}`;
  const [data, error] = useFetcher(api);
  const naviga = useNavigate();


  // Error state
  if (error) {
    return <p>{error.message}</p>;
  }

  // Loading state
  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // Render
  return (
    <div className="showtime">
       <img className="theatbgimg" src={data.theaterimg} alt="" />
      <div className="theatdet">
          <div className="maintheat" key={data.theatid}>
           
            <div className="theatdetail">
                <div className="namtheat">
              <h3>{data.theaterName}</h3>
              <p className="landmm">
                <h4>Location:</h4>
                {data.theaterAddress.map((e, addrIdx) => (
                  <p key={addrIdx}>{e}</p>
                ))}
              </p>
                <p>
                <h4>Cancellation:</h4>
                {data.cancelation}
              </p>
              </div>
            </div>

            <div className="timetheat">
              <div className="movtheat">
              <h5>{props.movnam}</h5>
              <h6>Dates Available</h6></div>
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
              {e.date}
                </div>
              ))}
            </div>
          </div>
       
      </div>

    </div>
  );
}

export default TheatersList;
