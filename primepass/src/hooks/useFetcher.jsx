import { useEffect, useState } from "react";

const useFetcher = (api)=>{
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  useEffect(()=>{
    fetch(api,{
  method:"GET",
  headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsYWtzaG1pa2FuZGFuMjAyMEBnbWFpbC5jb20iLCJpYXQiOjE3OTEzMDU3OTIsImV4cCI6MTc5MTMwOTM5Mn0.WOTvGDLmvE0AsuzL0pgULzJMarXUi8-ZwqkyDkSI20I"}
}).then((res)=>{if(!res.ok){
        throw Error("unable Fetch")
    }
return(res.json())
}).then((res)=>setData(res)).catch((error)=>setError(error))
  },[api])
return [data,error];
}
export default useFetcher;