import useFetcher from "@hooks/useFetcher";

function Bookinfo(props){
    const theatname = props.theat[0];
    const theatid = props.theat?.[2];
    const time = props.theat?.[1];
    const[data,error]=useFetcher(`http://localhost:8080/movies/${props.movid}`);
    const[data2,error2]=useFetcher(`http://localhost:8080/theater/${theatid}`);
    const[data3,error3]=useFetcher(`http://localhost:8080/time/${time}`);
    if(error || error2 || error3){
        return(<>
        <p>unnable to load</p>
        </>)
    }
      if(!data || !data2 || !data3){
        return(<>
        <p>loading....</p>
        </>)
    }

    const location1=data2?.theaterAddress?.[0]
    const location2=data2?.theaterAddress?.[1]
    const moviename = data.movename;
    const movieimg = data.img;
    const rating = data.details.rating;
    const duration = data.details.duration;
    const language = data.details.language;
    const view = data.details.view;
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
                {data2.theaterName}
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