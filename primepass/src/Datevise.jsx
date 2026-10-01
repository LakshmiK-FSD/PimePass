import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "./useFetcher";
function Datevise(){
      const {id} = useParams();
      const navi = useNavigate();
    const[dataa,error]=useFetcher(`http://localhost:8080/movies/${id}`);
        if(error){
            return(<>
            <p>{error.message}</p>
            </>)
        }
          if(!dataa){
            return(<>
            <p>loading....</p>
            </>)
        }
    
    return (<div>
                   <div className="dateimg" >
                  <img className="datimg" src={dataa.img} alt="" />
                  </div>
        <div className="bkt" onClick={()=>navi(`/theaters/${id}`)}>BooKTicket</div>
    </div>)
}
export default Datevise;