import useFetcher from "@hooks/useFetcher";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import api from "@services/api";
function Bookinfo(props){
    const theatname = props.theat[0];
    const theatid = props.theat?.[2];
    const date = props.theat?.[3];
    const timer = props.theat?.[4];
    const movieName = props.theat?.[5];
    const time = props.theat?.[1];
    const seats = props.seats;    
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
              movie:movieName
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
 
        const datas =props.arr.map((e,i)=>(<div className="row">
        <p>{e}</p>{!(i==props.arr.length-1) && <p>,</p>}
        </div>))
    return(<>
     <div className="ticket">
       <div className="boxbook">
           <div className="row2">
             <div className="pad">
               <div className="row4"> <h4>{moviename} </h4><p>{rating}</p> <p>{language}</p><p>{view}</p><p style={{color:"#f4f2f268",fontSize:"12px",paddingTop:"4px"}}>{duration}</p></div>
               <div className="row3"> <h6>
                {data2?.theaterName}
              </h6> 
              <h5>{location1}</h5><h5>{location2}</h5> </div>
             </div>
             <div className="imgbook">
                <img src={movieimg} alt=""/>
            </div>
           </div>
         </div> 
         <div className="boxbook"><h3>{data3.time}</h3>
        </div>
         <div className="boxbook">

       <div className="colm"> <div className="row"><h3>{props.arr.length}:Tickets</h3></div><div className="row"><h4>seats:</h4><p className="row pt">{datas}</p>
       </div></div></div></div>
    </>);
}
export default Bookinfo