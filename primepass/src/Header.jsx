import Navbar from "./Navbar";
import Profile from "./Profile";
import logo from "./assets/logo.png"

function Header(){
    return (
        <>
        <div className="herosec">
        <img id="logo" src={logo} alt="" />
        <span id="line"></span>
          <Navbar/>
          <span id="search"><i class="fa-solid fa-magnifying-glass"></i>
          <input id="bar" placeholder=" Search"/></span>
          <Profile/>
          </div>
        </>
    );
}
export default Header