import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Seating() {
  const { id } = useParams();
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/movies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSeats(data);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const datas = seats && (
    <div>
      <p>{seats.arrangement.seating}</p>
      <p>{seats.arrangement.capacity}</p>
    </div>
  );

  return (
    <div>
      {datas || <div>Loading...</div>}
      <p>seating</p>
      <h1>hello</h1>
    </div>
  );
}

export default Seating;
