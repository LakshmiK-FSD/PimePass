import defaultprof from "@assets/userdef.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDetl from "@pages/ProfileDetl/ProfileDetl";
import Login from "./Login/Login";

function Profile(props){
    const[toggle,setToggle]=useState(false)
      const moveRef = useRef();
      const loginRef = useRef();
    useEffect(()=>console.log(moveRef),[toggle])
       function login(){
        loginRef.current.style.display="block";
       }
       function moveFunc(){
        setToggle(!toggle);
    if(!toggle)
        {  moveRef.current.style.display="block"}
    else
    {
         moveRef.current.style.display="none"
    }
    }
       const profile=props.profileuse || defaultprof;
    return(
      <> <div id="usprofile">
           {!localStorage.getItem("userName") && <div onClick={login}><div  ref={loginRef}  className="login"><Login/></div> <img className="imagecs"  src={profile} alt="" /></div>}
           {(localStorage.getItem("userName")) && <div className="imageLet"  onClick={()=>moveFunc()}> <h4> {localStorage.getItem("userName").slice(0,1)} </h4></div>}
           </div> 
          <div ref={moveRef} className="momve"><div className="moveMain">
              <div className="leftClick" onClick={()=>moveFunc()}><pre>  </pre></div> <div className="moveProf">
 <ProfileDetl/></div></div>
        </div> </>
    );
}
export default Profile;