import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "@hooks/useFetcher";
import { Play } from 'lucide-react';
import Headers from "@components/Header"
function Datevise(){
      const {id} = useParams();
      const navi = useNavigate();
    const[dataa,error]=useFetcher(`http://localhost:8080/users/movies/${id}`);
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
                  <Headers shownav={true} show={true}/>
                   <div className="dateimg" >
                    <div className="moviedetails">
                        
                            <h5>{dataa.movename}</h5>
                            <div className="langer"><span>{dataa.details.rating}</span><i></i><span>{dataa.details.language}</span><i></i><span>{dataa.details.duration}</span></div>
                            <p>The final chapter of the acclaimed thriller trilogy. Years after outsmarting the police, Vijay Salgaonkar’s past resurfaces when new evidence threatens
                                 to expose his secret. As the investigation reopens, he must outwit the system once again to save his family.
                               Accessibility through Audio Description (AD) &amp; Closed Captions (CC) is available for this movie on the 'CineDubs' app.</p>
                            <div><div className="movebar">{(dataa.details.genres).split(",").map((e)=><div>{e}</div>)}</div></div>
                            <div className="release">ReleaseDate: {dataa.details.releaseDate}</div>
                        <div className="trail"><img  src={dataa.img} alt="" />
                        <div className="ccply"><Play size={20} /></div>
                        </div>
                    </div>
                  <img className="datimg" src={dataa.img} alt="" />
                  </div>
        <div className="bkt" onClick={()=>navi(`/theaters/${id}`,{state:{name:dataa.movename}})}>BooKTicket</div>
    
    <div></div>
    </div>)
}
export default Datevise;