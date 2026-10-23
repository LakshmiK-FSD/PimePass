import Header from "@components/Header";
import { use, useEffect, useState } from "react";
import api from '@services/api';
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

    return(
        <div>
            <Header show ={true} shownav={true}/>
            {data.length!=0 && JSON.stringify(data)}
        </div>
    );
}
export default MyPasses;