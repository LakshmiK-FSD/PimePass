import Header from "@components/Header";
import { use, useEffect, useState } from "react";
import api from '@services/api';
function MyPasses(){
    const date = new Date();
    const mainDate = new Date("2026-10-20T20:09:21.057Z");
    const time = date.getTime();
    const time2 = mainDate.getTime();
    const check = time
    return(
        <div>
            <Header show ={true} shownav={true}/>

           <h2>{time}</h2>
           <h2>{time2}</h2>
        </div>
    );
}
export default MyPasses;
