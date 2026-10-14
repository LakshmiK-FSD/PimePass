import Navbar from "@components/Navbar"
import logo from "@assets/logo.png"
import Profile from "@pages/Profile"
import { MapPin } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Searcher from "../pages/Search/Searcher";
import { useEffect, useRef, useState } from "react";
function Header(props){
  const navigate = useNavigate();
  const srcmainRef = useRef();
  const[togg,setTogg]=useState(false);
  useEffect(()=>{
    (togg)?srcmainRef.current.style.display = "block":srcmainRef.current.style.display = "none";
  },[togg])
 
function toggler(){
  setTogg(!togg);
  
}
    return (
        <>
        <div className="headersec">
        <img id="logo" src={logo} alt=""/>{props.shownav && <>
        <span id="line"></span><div className="locname">
        <div className="location">
        <MapPin/> </div><p>Cuddalore</p></div>
          <Navbar/></>}
          {props.show &&<> <span onClick={toggler} id="search"><i  className="fa-solid fa-magnifying-glass"></i>
          <div id="bar">Search,Movies,Events,...</div></span>
          <div className="searcmain" ref={srcmainRef}>
          <Searcher valuer={togg}  cclick={toggler} /></div></>
          }
          <Profile />
          <div className="hamburger">
          <div className="harmof">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span></div>
          <div className="hamburgmenu">
          <div className="hamprofile">
          <Profile />
           {props.usernamepr || <h6>Guest</h6>}
            </div>
             <p onClick={()=>navigate('/')}>Home</p>
             <p onClick={()=>navigate('/aboutus')}>AboutUs</p>
             <p onClick={()=>navigate('/')}>Passes</p>
             <p onClick={()=>navigate('/organize')}>Organize</p>
             <p onClick={()=>navigate('/')}>MyPasses</p>
           </div>
</div>
          </div>
        </>
    );
}
export default Header