import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TheatersList from "./TeatersList";

function Theaters() {
  const { id } = useParams();
  const [theaters, setTheat] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTheat(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [id]); 

  if (!theaters || !theaters.theaterIds) {
    return <div><p>Loading...</p></div>;
  }

  const datas = (
    <>
      {theaters.theaterIds.map((data) => (
        <TheatersList key={data} theaterId={data} />
      ))}
    </>
  );

  return (
    <div>
      {datas}
    </div>
  );
}

export default Theaters;
