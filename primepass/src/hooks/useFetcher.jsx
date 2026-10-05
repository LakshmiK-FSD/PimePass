import { useEffect, useState } from "react";

const useFetcher = (api)=>{
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  useEffect(()=>{
    fetch(api).then((res)=>{if(!res.ok){
        throw Error("unable Fetch")
    }
return(res.json())
}).then((res)=>setData(res)).catch((error)=>setError(error))
  },[api])
return [data,error];
}
export default useFetcher;