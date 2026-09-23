import useFetcher from "../useFetcher";
import style from "./ClassSeat.module.css"
function ClassSeat(props){
 const [data,error]=useFetcher(`http://localhost:5000/${props.classs}`);
  if(error){
    return(<div>
      unable to load
    </div>)}
      if(!data){
    return(<div>
      Loading...
    </div>)}
    const seatar = data.map((e)=>(<div key={`rowout-${e}`} className={style.rrowf}>{e.clrow.map((e2)=>(<div key={`rowin-${e2}`} className={style.seat}>{e2.row}{e2.number}</div>))}</div>))

    return(
        <div className={style.classs}>
         {seatar}
        </div>
    );
}
export default ClassSeat;