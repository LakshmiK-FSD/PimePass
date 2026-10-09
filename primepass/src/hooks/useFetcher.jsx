import { useEffect, useState } from "react";
const useFetcher = (api)=>{
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  useEffect(()=>{ 
    const token = localStorage.getItem("token");
    fetch(api,
      {
       method:"GET",
        headers:{
          "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
        }
      }
    ).then((res)=>{if(!res.ok){
        throw Error("unable Fetch")
    }
return(res.json())
}).then((res)=>setData(res)).catch((error)=>setError(error))
  },[api])
return [data,error];
}
export default useFetcher;
