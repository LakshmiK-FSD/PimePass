import Navbar from "./Navbar"
import logo from "./assets/logo.png"
import Profile from "./Profile"
import { MapPin } from 'lucide-react';
function Header(){
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
          <button className="hamburger">
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
</button>
          </div>
        </>
    );
}
export default Header