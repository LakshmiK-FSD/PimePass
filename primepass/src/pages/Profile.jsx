import defaultprof from "@assets/userdef.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDetl from "@pages/ProfileDetl/ProfileDetl";

function Profile(props){
    const[toggle,setToggle]=useState(false)
      const moveRef = useRef();
    useEffect(()=>console.log(moveRef),[toggle])
  
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
      <> <div id="usprofile" onClick={()=>moveFunc()}>
            <img id="imagecs"  src={profile} alt="" /></div> 
          <div ref={moveRef} className="momve"><div className="moveMain">
              <div className="leftClick" onClick={()=>moveFunc()}><pre>  </pre></div> <div className="moveProf">
 <ProfileDetl/></div></div>
        </div> </>
    );
}
export default Profile;