import { useRef } from "react";
import style from "./ProfileDetl.module.css"
function ProfileDetl(props){
    
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
       <div className={style.logout}></div>
      </div></div>
    </div>
  );
}
export default ProfileDetl