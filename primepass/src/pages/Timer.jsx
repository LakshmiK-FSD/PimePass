import { useEffect,useState } from "react";
function Timer(){
    const [min,setMin] = useState(180);
    useEffect(()=>{
      const id =  setInterval(()=>{

             setMin((prev)=>
                {
                    if(prev <=0){ 
                        return 0;}
                    return prev-1});
         },1000)
         return ()=> clearInterval(id);
        },[])
    function timeMake(min){
         const mine = Math.floor(min/60);
         const sec = min%60;
         return `${String(mine).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    }
    return(
           <div className="clock">
           <div className="clock2">
            <p>The Seat Lock for</p>
            <h5>{timeMake(min)}</h5>
            </div>
            </div>
            
    );
}
export default Timer;