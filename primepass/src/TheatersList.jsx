import { useNavigate } from "react-router-dom";
import useFetcher from "./useFetcher";

function TheatersList(props) {
  const api = `http://localhost:8080/${props.theaterId}`;
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
      <div className="theatdet">
          <div className="maintheat" key={data.theaterName}>
            <div className="theatdetail">
                <div className="namtheat">
              <h3>{props.theaterId}</h3>
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
              {data.showtimes.map((e, timeIdx) => (
                <div
                  key={timeIdx}
                  className="timebutton"
                  onClick={() =>
                    naviga(`/seating/${props.theaterId}/${e.timeId}/${props.movnam}/${props.movId}`)
                  }
                >
                  {e.showTime}
                </div>
              ))}
            </div>
          </div>
       
      </div>

    </div>
  );
}

export default TheatersList;
