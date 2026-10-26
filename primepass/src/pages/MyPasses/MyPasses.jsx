import Header from "@components/Header";
import { use, useEffect, useState } from "react";
import style from './MyPasses.module.css'
import api from '@services/api';
import MyBookDetail from "../MyBookDetail/MyBookDetail";
function MyPasses(){
     const id =localStorage.getItem("id");
    const [data,setData] = useState([]);
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
   const datasF = data.map((e)=>{
       return( 
       <MyBookDetail datas={e}/>
       );
   })
    return(
        <div>
            
            <Header show ={true} shownav={true}/>
            <h5>My Bookings</h5>
           <div className={style.comer}>{datasF}</div>
        </div>
    );
}
export default MyPasses;