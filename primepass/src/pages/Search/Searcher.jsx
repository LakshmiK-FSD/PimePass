import { use, useState } from 'react';
import api from '@services/api';
import style from './Searcher.module.css';
import { X } from 'lucide-react';
import Result from './Result';
function Searcher(props){
   const [res,setRes]=useState();
   async function search(e){
       const valuer = e.target.value;
       try{
          const res = await api.get("users/search",{
            params:{
               srh:valuer
            }}
          )
          if(res){
            setRes(res);
          }
       }
       catch(error){
           console.log(error);
       }
    }
    
    return(
        <div className={style.mainsearch}>
            <div className={style.searcm} onClick={()=>props.cclick()}>  
            </div>
            <div className={style.search}>
                <div className={style.makefix}>
                <span  className={style.searbar}><i className="fa-solid fa-magnifying-glass"></i>
               <form > <input name='search' onChange={search} placeholder="Search,Movies,Events,..."/>
               <button  type='reset'><X size={18}/></button>
               </form>
                </span>
                <div className={style.liner}> </div></div>
                <div className={style.top}>
                   {res && <Result data={res}/>}
                </div>
            </div>
        </div>
    );
}
export default Searcher;