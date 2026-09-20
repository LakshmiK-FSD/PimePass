import { useRef } from "react"
import { useNavigate } from "react-router-dom";

function MoviesCard(props){
    const refer = useRef(null);
    const navigat = useNavigate();
    return(  <div id={props.id} ref={refer} onClick={()=>{
        navigat(`/seating/${refer.current.id}`); console.log(refer.current.id)  }
    } key={props.id} className="card">
        <img src={props.img} alt="" loading="lazy" />
        <div className="cardText">
        <h5>{props.movename}</h5>
        <p>{props.description}</p></div>

    </div>)
}
export default MoviesCard