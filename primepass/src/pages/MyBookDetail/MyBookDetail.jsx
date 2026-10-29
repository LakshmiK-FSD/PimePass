import { useEffect, useRef, useState } from "react";
import { CalendarClock, Armchair, Building} from 'lucide-react';
import {QRCodeCanvas} from 'qrcode.react';
import api from "@services/api"
import style from "./MyBookDetail.module.css";
function MyBookDetail({datas}){
        const viewRef = useRef();
        const [data,setData] = useState(null);
       useEffect(()=>{
        async function getter() {
            try { 
                const res = await api.get(`/users/movename/${datas?.movie}`)
                setData(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }
         getter();
        },[datas?.movie])
         if(!data){
           return  
         }
       function viewBook(show){
        if(show){
             viewRef.current.style.display="block";
        }
        else{
            viewRef.current.style.display="none";
        }
         }
         const seatIdQ ="#PP"+`${datas.id}`.padStart("6","0");
    return(
     <div>
    
        { data && 
        <div>
            <div className={style.tick}>
             <div className={style.imge}>
                <img src={data.img} alt="" />
             </div>
             <div className={style.remain}>
                <div className={style.remain1}>
                    <h3>{datas.movie}</h3>
                     <p>confirmed</p>
                </div>
                <div className={style.remain2}>
                    <div className={style.remain21}><div><Building size={18}/></div><p>{datas.theaterName}</p></div>
                    <div className={style.remain22}><div><CalendarClock size={17}/></div><p>{datas.showDate}</p>,<p>{datas.showTime}</p></div>
                    <div className={style.remain23}><div><Armchair size={19} strokeWidth={1.5} /></div>seats: <p>{datas.seatId}</p></div>
                </div>
                <span></span>
                <div className={style.remain3}>
                   <div className={style.remain31}><h6>&#8377;{datas.paidAmt}</h6><p>ID:{seatIdQ}</p></div> 
                   <div className={style.tktbtn} onClick={()=>viewBook(true)}>View Ticket</div>
                   <div ref={viewRef}  className={style.viewbook}>
                       <div>
                            <div className={style.smtick}>
                                <h3>{datas.movie}</h3>
                                <div><p>{datas.theaterName}</p><p>{datas.showDate}</p><p>,{datas.showTime}</p><p>seats:{datas.seatId}</p></div>
                            </div>
                            <div className={style.smqr}><QRCodeCanvas value={seatIdQ} size={100}/>
                           </div> <p>Show this QR code at the entrance</p>
                            <div className={style.close} onClick={()=>viewBook(false)}>Close</div>
                       </div>
                   </div>
                </div>
             </div>
            </div>
        </div>
        }
     </div>
    );
}
export default MyBookDetail;