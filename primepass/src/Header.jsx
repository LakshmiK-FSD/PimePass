import Navbar from "./Navbar"
import logo from "./assets/logo.png"
import Profile from "./Profile"
import { MapPin } from 'lucide-react';
import { useNavigate } from "react-router-dom";
function Header(props){
  const navigate = useNavigate();
    return (
        <>
        <div className="headersec">
        <img id="logo" src={logo} alt="" />
        <span id="line"></span><div className="locname">
        <div className="location">
        <MapPin/> </div><p>Cuddalore</p></div>
          <Navbar/>
          {props.show && <span id="search"><i className="fa-solid fa-magnifying-glass"></i>
          <input id="bar" placeholder="Search,Movies,Events,..."/></span>}
          <Profile />
          <div className="hamburger">
            <dic className="harmof">
           <span className="line"></span>
           <span className="line"></span>
           <span className="line"></span></dic>
           <div className="hamburgmenu">
            <div className="hamprofile">
             <Profile />
           {props.usernamepr || <h6>Guest</h6>}
            </div>
             <p onClick={()=>navigate('/')}>Home</p>
             <p onClick={()=>navigate('/aboutus')}>AboutUs</p>
             <p onClick={()=>navigate('/')}>Passes</p>
             <p onClick={()=>navigate('/')}>Organize</p>
             <p onClick={()=>navigate('/')}>MyPasses</p>
           </div>
</div>
          </div>
        </>
    );
}
export default Header