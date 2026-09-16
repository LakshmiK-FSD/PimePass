import Navbar from "./Navbar"
import logo from "./assets/logo.png"
import Profile from "./Profile"
import { MapPin } from 'lucide-react';
function Header(props){
    return (
        <>
        <div className="headersec">
        <img id="logo" src={logo} alt="" />
        <span id="line"></span><div className="locname">
        <div className="location">
        <MapPin/> </div><p>Cuddalore</p></div>
          <Navbar/>
          <span id="search"><i className="fa-solid fa-magnifying-glass"></i>
          <input id="bar" placeholder="Search,Events,Movies,..."/></span>
          <Profile />
          <div className="hamburger">
           <span className="line"></span>
           <span className="line"></span>
           <span className="line"></span>
           <div className="hamburgmenu">
            <div className="hamprofile">
             <Profile />
           {props.usernamepr || <h6>Guest</h6>}
            </div>
             <p>Home</p>
             <p>AboutUs</p>
             <p>Passes</p>
             <p>Organize</p>
             <p>MyPasses</p>
           </div>
</div>
          </div>
        </>
    );
}
export default Header