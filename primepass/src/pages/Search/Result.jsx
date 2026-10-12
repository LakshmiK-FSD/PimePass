import { useState } from "react";
import style from "./Searcher.module.css";
import { useNavigate } from "react-router-dom";
function Result(props){
    const navig = useNavigate();
    const res = props.data;
     return(
        <div className={style.mainsrc}>
            {res && res.data.map((e)=>{
                return(
                    <div onClick={()=>navig(`/dates/${e.id}`)} className={style.make}>
                        <div>
                            <img src={e.img} alt="" />
                        </div>
                        <div className={style.subrow}>
                        <h5>{e.movename}</h5>
                        <p>{e.details.language}</p>
                        <p>{e.details.genres}</p>
                        </div>
                    </div>
                );
            })}
        </div>
     );
}
export default Result;