
import { use, useEffect, useState } from "react";
import style from './MyPasses.module.css'
import MyBookDetail from "../MyBookDetail/MyBookDetail";
import { TicketX } from "lucide-react";
function MyPasses({inData}){
     const id =localStorage.getItem("id");
   const datasF = inData.map((e)=>{
       return( 
       <MyBookDetail datas={e}/>
       );
   })
    return(
        <div>
          {inData.length != 0 && <div className={style.comer}>{datasF}</div>}
          {inData.length == 0 && <div className={style.noBooking}> <div><TicketX size={176} color="#8e8585" strokeWidth={1.1} /></div> <h6>No Bookings</h6> </div>}
        </div>
    );
}
export default MyPasses;