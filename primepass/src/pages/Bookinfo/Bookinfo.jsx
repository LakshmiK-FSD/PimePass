import useFetcher from "@hooks/useFetcher";
import { useEffect, useState } from "react";
import style from "./Bookinfo.module.css";
import { ThreeDot } from "react-loading-indicators";
import {QRCodeCanvas} from 'qrcode.react';
import api from "@services/api";

function Bookinfo(props){
    const theatname = props.theat[0];
    const theatid = props.theat?.[2];
    const date = props.theat?.[3];
    const timer = props.theat?.[4];
    const movieName = props.theat?.[5];
    const time = props.theat?.[1];
    const seats = props.seats;    
    const strDate = date.split("-").reverse().toString();
    useEffect(()=>{
      async function booker() {
          try {
               const res = await api.post("/users/booker",{
              userName:localStorage.getItem("userName"),
               userId: localStorage.getItem("id"),
              seatId: props.arr.toString(),
              seatTId: seats.toString(),
              showDate: date,
              showTime: timer,
              theaterName: theatname,
              theaterId: theatid,
              movie:movieName,
              paidAmt:props.paid
            })
          } catch (error) {
            console.log(error)
          }

        }
        booker();
      },[])
    const[data,error]=useFetcher(`http://localhost:8080/users/movies/${props.movid}`);
    const[data2,error2]=useFetcher(`http://localhost:8080/users/theater/${theatid}`);
    const[data3,error3]=useFetcher(`http://localhost:8080/users/time/${time}`);
     
    if(error && error2 && error3){
        return(<>
        <p>unnable to load</p>
        </>)
    }

      if(!data && !data2 && !data3){
        return(<div className="loading">
        <ThreeDot size="large" variant="bounce" color={"blue"} text="LOADING..."/>
        </div>)
    }
  
    const location1=data2?.theaterAddress?.[0]
    const location2=data2?.theaterAddress?.[1]
    const moviename = data?.movename;
    const movieimg = data?.img;
    const rating = data?.details.rating;
    const duration = data?.details.duration;
    const language = data?.details.language;
    const view = data?.details.view;
    const date2 = new Date(strDate);
    const month = date2.toLocaleString("en-ID",{month:"short"});
    const weeDay = date2.toLocaleString("en-ID",{weekday:"short"});
    const year = date2.toLocaleString("en-ID",{year:"numeric"});
    const qrCode = strDate.replaceAll(",","")+"-"+props.arr.map((e,i)=>e)?.[0].toString();
    const datas =props.arr.map((e,i)=>(<div className={style.rowmy}>
        <p>{e}</p>{!(i==props.arr.length-1) && <p>,</p>}
        </div>))
    return(
    <>

     <div className={style.main2}>
    <div className={style.main1}>
    <div className={style.movDeta}>
      <div className={style.subImg}>
        <img src={movieimg} alt=""/>
      </div>
      <div className={style.detail}>
        <div className={style.subdetai}>
          <h3>{moviename}</h3>
        </div>
        <div className={style.subdetai2}>
          <p>{rating}</p>
          <p>{language?.split(",")[0] || language}</p>
          <p>{view}</p>
          <p>{duration}</p>
        </div>
        <div className={style.subdetai3}>
         <div><h5 className={style.theaterN}>{data2?.theaterName}</h5>
         <div className={style.address}><h6>{location1}</h6><h6>{location2}</h6></div>
         </div> 
         <h5> </h5>
        </div>
      </div>
    </div>
    <span className={style.line}></span>
    <div className={style.helding}>
      <div className={style.timer}><p>Date</p><div className={style.monther}><h5>{weeDay},{"2"}{month}</h5></div>
      <div><h5>{year}</h5></div>
      </div>
      <div className={style.timers}><p>Time</p><h5>{data3.time}</h5></div>
      <div className={style.timers}><p>Ticket</p><h5>{props.arr.length}</h5></div>
      <div className={style.timers4}><p>Seats</p><h5>{datas}</h5></div>
    </div></div>
    
    <div className={style.qr}>
      <span className={style.verti}></span>
      <div className={style.qr2}>
      <div className={style.qrcode1} style={{paddingBottom:"20px"}}><QRCodeCanvas value={qrCode} size={100} level={"H"} /></div>
      <h4>{qrCode}</h4>
      <p>Please arrive 15 minutes before the show.</p>
     </div></div>
    </div>
    </>
  );
}
export default Bookinfo