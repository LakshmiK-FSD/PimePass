import MyPasses from "../MyPasses/MyPasses";
import Header from "@components/Header";
import style from "./SeperatTime.module.css";
import api from '@services/api';
import { useEffect, useState } from "react";
function SeperatTime(){
    const [clickCheck,setClick]=useState(0);
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([]);
       useEffect(()=>{
    async function getter() {
        try { 
            if(localStorage.getItem("id")){
            const res = await api.get("/users/passes")
            setData(res.data);
            console.log(res.data);
        }} catch (error) {
            console.log(error)
        }
    }
    getter();
   },[])
   if(data.length==0){
    <div>
        <h4>
            loading...
        </h4>
    </div>
   }
    function clickCh(ch){
    setClick(ch);

    if(ch===1){
      const filt = data.filter((e)=>new Date(e.showDate.split("-").reverse().join("-").toString()).getTime()<new Date().getDate())
      setData2(filt)
    }
    else if(ch===2){
      const filt =  data.filter((e)=>new Date(e.showDate.split("-").reverse().join("-").toString()).getTime()>new Date().getDate())
      setData2(filt)
    }
    else{
      setData2(data)
    }
    }
   
    return(
        <div>
            <Header show ={true} shownav={true}/>
            <div className={style.bg}>
            <div className={style.bgmain}>
                {data && data.map((e)=>new Date(e.showDate.split("-").reverse().join("-").toString()).getTime()>new Date().getDate)}
            <h5>My Bookings</h5>
            <p style={{color:"rgba(107, 113, 126, 0.9)",padding:"10px 20px"}}>Your tickets for movies and events, all in one place.</p>
            <div className={style.septime}>
                <h6 onClick={()=>clickCh(0)}  className={(clickCheck===0)?`${style.selected}`:`${style.unselected}`}>All</h6>
                <h6 onClick={()=>clickCh(1)}  className={(clickCheck===1)?`${style.selected}`:`${style.unselected}`}>UpComming</h6>
                <h6 onClick={()=>clickCh(2)}  className={(clickCheck===2)?`${style.selected}`:`${style.unselected}`}>Past</h6></div>
          {data2 && clickCheck != 0 && <MyPasses inData={data2}/>}
           {data2 && clickCheck === 0 && <MyPasses inData={data}/>}
           {/* <div>{JSON.stringify(data)}</div> */}
        </div></div></div>
    );
}
export default SeperatTime;