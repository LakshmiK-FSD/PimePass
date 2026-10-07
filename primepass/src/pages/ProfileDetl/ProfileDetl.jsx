import { useRef } from "react";
import style from "./ProfileDetl.module.css"
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
function ProfileDetl(props){
   const loginRef =useRef();
  function loginf(){
    loginRef.current.style.display="block";

  }
  const navi = useNavigate();
  return(
    <div className={style.moveCover}><div className={style.scrprev}>
      <div className={style.box1}><h3>Profile</h3></div>
   <div className={style.boxalign}><div className={style.profile}>
   <h6>L</h6> </div><div className={style.nameing}>
      <h2>Lakshmi</h2>
      <p>+91 9361106095</p>
      </div></div> 
      <div className={style.bookdet}>view bookings</div>
      <div className={style.support}><p>support</p>
      <h4>Chat With Us</h4>
      </div>
      <div className={style.support}><p>More</p>
      <h4>Conditions</h4>
      </div>
      <div className={style.support}>
      <h4>privacy Policy</h4>
      <div className={style.logout}><span>Logout</span></div>
       <div onClick={()=>loginf()} className={`${style.logout}`}>LogIn

        <div ref={loginRef} className={style.login}><Login/></div>
       </div>
      </div >
     
      </div>
    </div>
  );
}
export default ProfileDetl