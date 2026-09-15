import Navbar from "./Navbar"
import logo from "./assets/logo.png"
import Profile from "./Profile"

function Header(){
    return (
        <>
        <div className="headersec">
        <img id="logo" src={logo} alt="" />
        <span id="line"></span>
          <Navbar/>
          <span id="search"><i class="fa-solid fa-magnifying-glass"></i>
          <input id="bar" placeholder="Search,Events,Movies,..."/></span>
          <Profile />
          </div>
        </>
    );
}
export default Header